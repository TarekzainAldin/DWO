
import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MeetingStats from '@/components/meetings/MeetingStats';
import MeetingSearch from '@/components/meetings/MeetingSearch';
import MeetingsList from '@/components/meetings/MeetingsList';
import NextMeetingPreparation from '@/components/meetings/NextMeetingPreparation';
import MeetingCalendar from '@/components/meetings/MeetingCalendar';
import { getMeetingsMockData } from '@/utils/meetingHelpers';
import { MeetingView } from '@/types/meetings';

const Meetings = () => {
  const [activeView, setActiveView] = useState<MeetingView>('upcoming');
  const meetings = getMeetingsMockData();

  const handleSearch = (searchTerm: string) => {
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  const handleFilter = () => {
    // Implement filter functionality here
    console.log('Opening filter options');
  };

  const handleExport = () => {
    // Implement export functionality here
    console.log('Exporting meetings data');
  };

  return (
    <Layout>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Meetings</h1>
            <p className="text-gray-600 mt-1">
              Schedule, prepare, and manage all your organization's meetings
            </p>
          </div>
          <Button className="bg-nonprofit-700 hover:bg-nonprofit-800">
            <PlusCircle size={16} className="mr-1" />
            Schedule Meeting
          </Button>
        </div>
      </div>
      
      {/* Statistics */}
      <MeetingStats />
      
      {/* Search and Filter */}
      <MeetingSearch 
        onSearch={handleSearch}
        onFilter={handleFilter}
        onExport={handleExport}
      />
      
      {/* Tabs */}
      <Tabs 
        defaultValue="upcoming" 
        value={activeView}
        onValueChange={(value) => setActiveView(value as MeetingView)}
        className="mb-6"
      >
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="all">All Meetings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <MeetingsList meetings={meetings} view="upcoming" />
        </TabsContent>
        
        <TabsContent value="completed">
          <MeetingsList meetings={meetings} view="completed" />
        </TabsContent>
        
        <TabsContent value="all">
          <MeetingsList meetings={meetings} view="all" />
        </TabsContent>
      </Tabs>
      
      {/* Upcoming meeting details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <NextMeetingPreparation />
        </div>
        
        <div>
          <MeetingCalendar />
        </div>
      </div>
    </Layout>
  );
};

export default Meetings;
