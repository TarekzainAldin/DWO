
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Video, MapPin } from 'lucide-react';
import { Meeting } from '@/types/meetings';
import { getStatusColor, getTypeColor } from '@/utils/meetingHelpers';

type MeetingCardProps = {
  meeting: Meeting;
  showViewDetailsButton?: boolean;
  showViewMinutesButton?: boolean;
};

const MeetingCard = ({ meeting, showViewDetailsButton = true, showViewMinutesButton = false }: MeetingCardProps) => {
  return (
    <Card key={meeting.id} className="overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-gray-900">{meeting.title}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Calendar size={14} className="mr-1" />
              <span>{new Date(meeting.date).toLocaleDateString()} • {meeting.time}</span>
            </div>
          </div>
          <Badge variant="outline" className={getTypeColor(meeting.type)}>
            {meeting.type}
          </Badge>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          {meeting.location.includes('Virtual') ? (
            <Video size={14} className="mr-1" />
          ) : (
            <MapPin size={14} className="mr-1" />
          )}
          <span>{meeting.location}</span>
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t">
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-500">{meeting.attendees} Attendees</span>
            <span className="text-xs text-gray-500">{meeting.documents} Documents</span>
          </div>
          {showViewDetailsButton && <Button variant="ghost" size="sm">View Details</Button>}
          {showViewMinutesButton && <Button variant="ghost" size="sm">View Minutes</Button>}
        </div>
      </div>
    </Card>
  );
};

export default MeetingCard;
