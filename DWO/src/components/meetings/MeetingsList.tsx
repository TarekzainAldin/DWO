
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MeetingCard from './MeetingCard';
import { Meeting } from '@/types/meetings';
import { getStatusColor, getTypeColor } from '@/utils/meetingHelpers';

type MeetingsListProps = {
  meetings: Meeting[];
  view: 'upcoming' | 'completed' | 'all';
};

const MeetingsList = ({ meetings, view }: MeetingsListProps) => {
  // Filter meetings based on the view
  const filteredMeetings = 
    view === 'upcoming' 
      ? meetings.filter(meeting => meeting.status === 'Upcoming')
      : view === 'completed' 
        ? meetings.filter(meeting => meeting.status === 'Completed')
        : meetings;

  if (view === 'all') {
    return (
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-3">Meeting Name</th>
                <th className="px-6 py-3">Date & Time</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredMeetings.map(meeting => (
                <tr key={meeting.id} className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{meeting.title}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(meeting.date).toLocaleDateString()}<br />
                    <span className="text-xs">{meeting.time}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{meeting.location}</td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className={getTypeColor(meeting.type)}>
                      {meeting.type}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className={getStatusColor(meeting.status)}>
                      {meeting.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {filteredMeetings.map(meeting => (
        <MeetingCard 
          key={meeting.id}
          meeting={meeting}
          showViewDetailsButton={view === 'upcoming'}
          showViewMinutesButton={view === 'completed'}
        />
      ))}
    </div>
  );
};

export default MeetingsList;
