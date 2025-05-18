
export type Meeting = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Board' | 'Committee' | 'Annual' | 'Special';
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  attendees: number;
  documents: number;
};

export type MeetingView = 'upcoming' | 'completed' | 'all';
