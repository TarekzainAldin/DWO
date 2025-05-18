
export const getStatusColor = (status: string) => {
  switch (status) {
    case 'Upcoming': return 'bg-green-100 text-green-800 border-green-200';
    case 'Completed': return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getTypeColor = (type: string) => {
  switch (type) {
    case 'Board': return 'bg-nonprofit-100 text-nonprofit-800 border-nonprofit-200';
    case 'Committee': return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Annual': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Special': return 'bg-amber-100 text-amber-800 border-amber-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getMeetingsMockData = (): Meeting[] => {
  return [
    {
      id: 1,
      title: 'Q2 Board Meeting',
      date: '2025-06-15',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Conference Room',
      type: 'Board',
      status: 'Upcoming',
      attendees: 12,
      documents: 5
    },
    {
      id: 2, 
      title: 'Finance Committee Budget Review',
      date: '2025-06-10',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Meeting',
      type: 'Committee',
      status: 'Upcoming',
      attendees: 6,
      documents: 8
    },
    {
      id: 3,
      title: 'Annual Member Meeting',
      date: '2025-09-20',
      time: '9:00 AM - 2:00 PM',
      location: 'City Convention Center',
      type: 'Annual',
      status: 'Upcoming',
      attendees: 45,
      documents: 12
    },
    {
      id: 4,
      title: 'Executive Committee Planning Session',
      date: '2025-05-28',
      time: '3:00 PM - 5:00 PM',
      location: 'Executive Boardroom',
      type: 'Committee',
      status: 'Upcoming',
      attendees: 5,
      documents: 3
    },
    {
      id: 5,
      title: 'Special Board Meeting - Strategic Plan',
      date: '2025-07-05',
      time: '1:00 PM - 4:00 PM',
      location: 'Virtual Meeting',
      type: 'Special',
      status: 'Upcoming',
      attendees: 15,
      documents: 7
    },
    {
      id: 6,
      title: 'Q1 Board Meeting',
      date: '2025-03-15',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Conference Room',
      type: 'Board',
      status: 'Completed',
      attendees: 11,
      documents: 9
    },
  ];
};

// Import at the end to avoid circular dependency
import { Meeting } from '@/types/meetings';
