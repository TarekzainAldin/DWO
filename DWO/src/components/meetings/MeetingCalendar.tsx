
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardCard from '@/components/DashboardCard';

const MeetingCalendar = () => {
  return (
    <DashboardCard 
      title="Meeting Calendar" 
      icon={<Calendar size={18} />}
      action={
        <Button variant="ghost" size="sm" className="text-sm text-nonprofit-600 hover:text-nonprofit-800">
          Full Calendar
        </Button>
      }
    >
      <div className="space-y-3">
        <h4 className="font-medium text-gray-800">June 2025</h4>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          <div className="text-gray-500">Sun</div>
          <div className="text-gray-500">Mon</div>
          <div className="text-gray-500">Tue</div>
          <div className="text-gray-500">Wed</div>
          <div className="text-gray-500">Thu</div>
          <div className="text-gray-500">Fri</div>
          <div className="text-gray-500">Sat</div>
          
          {/* Calendar days */}
          {Array.from({ length: 30 }).map((_, i) => {
            // Highlight days with meetings
            const hasEvent = [10, 15].includes(i + 1);
            return (
              <div 
                key={i} 
                className={`p-1 rounded-sm ${
                  hasEvent 
                    ? 'bg-nonprofit-100 text-nonprofit-800 font-medium' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
        
        <div className="space-y-2 mt-4">
          <h4 className="font-medium text-gray-800">Upcoming</h4>
          
          <div className="p-2 border-l-2 border-nonprofit-400">
            <div className="font-medium text-gray-800">Finance Committee</div>
            <div className="text-xs text-gray-500">June 10 • 2:00 PM</div>
          </div>
          
          <div className="p-2 border-l-2 border-nonprofit-400">
            <div className="font-medium text-gray-800">Q2 Board Meeting</div>
            <div className="text-xs text-gray-500">June 15 • 10:00 AM</div>
          </div>
          
          <div className="p-2 border-l-2 border-purple-400">
            <div className="font-medium text-gray-800">Special Board Meeting</div>
            <div className="text-xs text-gray-500">July 5 • 1:00 PM</div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default MeetingCalendar;
