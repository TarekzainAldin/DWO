
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardCard from '@/components/DashboardCard';
import { Clock, Calendar, Video, FileText } from 'lucide-react';

const NextMeetingPreparation = () => {
  return (
    <DashboardCard 
      title="Next Meeting Preparation" 
      icon={<Clock size={18} />}
    >
      <div className="space-y-3">
        <div className="bg-nonprofit-50 p-4 rounded-lg">
          <h3 className="font-semibold text-nonprofit-800">Finance Committee Budget Review</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Calendar size={14} className="mr-1" />
            <span>June 10, 2025 at 2:00 PM - 4:00 PM</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Video size={14} className="mr-1" />
            <span>Virtual Meeting</span>
          </div>
        </div>
        
        <h4 className="font-medium text-gray-800 mt-4">Required Documents</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 border rounded-md">
            <div className="flex items-center">
              <FileText size={16} className="text-gray-400 mr-2" />
              <span>Q2 Financial Report</span>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">Uploaded</Badge>
          </div>
          <div className="flex justify-between items-center p-2 border rounded-md">
            <div className="flex items-center">
              <FileText size={16} className="text-gray-400 mr-2" />
              <span>Budget Proposal FY2026</span>
            </div>
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Draft</Badge>
          </div>
          <div className="flex justify-between items-center p-2 border rounded-md">
            <div className="flex items-center">
              <FileText size={16} className="text-gray-400 mr-2" />
              <span>Grant Allocation Spreadsheet</span>
            </div>
            <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">Missing</Badge>
          </div>
        </div>
        
        <h4 className="font-medium text-gray-800 mt-4">Attendee Responses</h4>
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>Attending: 5</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span>Not Attending: 1</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
            <span>No Response: 0</span>
          </div>
        </div>
        
        <div className="flex justify-between pt-3 mt-3 border-t">
          <Button variant="outline">Send Reminder</Button>
          <Button className="bg-nonprofit-700 hover:bg-nonprofit-800">Prepare Agenda</Button>
        </div>
      </div>
    </DashboardCard>
  );
};

export default NextMeetingPreparation;
