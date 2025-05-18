
import React from 'react';
import { Card } from '@/components/ui/card';

const MeetingStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card className="p-4 bg-nonprofit-50 border-nonprofit-100">
        <div className="text-sm text-gray-500">Upcoming Meetings</div>
        <div className="text-2xl font-bold text-nonprofit-800 mt-1">5</div>
        <div className="text-xs text-gray-500 mt-1">Next: June 10, 2025</div>
      </Card>
      
      <Card className="p-4 bg-purple-50 border-purple-100">
        <div className="text-sm text-gray-500">Board Meetings</div>
        <div className="text-2xl font-bold text-purple-700 mt-1">2</div>
        <div className="text-xs text-gray-500 mt-1">This quarter</div>
      </Card>
      
      <Card className="p-4 bg-amber-50 border-amber-100">
        <div className="text-sm text-gray-500">Committee Meetings</div>
        <div className="text-2xl font-bold text-amber-700 mt-1">3</div>
        <div className="text-xs text-gray-500 mt-1">This quarter</div>
      </Card>
      
      <Card className="p-4 bg-blue-50 border-blue-100">
        <div className="text-sm text-gray-500">Annual Meeting</div>
        <div className="text-2xl font-bold text-blue-700 mt-1">Sep 20</div>
        <div className="text-xs text-gray-500 mt-1">126 days from now</div>
      </Card>
    </div>
  );
};

export default MeetingStats;
