
export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive' | 'Pending';
  lastLogin: string;
  avatar?: string;
};

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Administrator',
    status: 'Active',
    lastLogin: '2025-05-16T10:30:00Z',
  },
  {
    id: 2,
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com',
    role: 'Board Member',
    status: 'Active',
    lastLogin: '2025-05-15T14:45:00Z',
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    role: 'Committee Chair',
    status: 'Active',
    lastLogin: '2025-05-14T09:15:00Z',
  },
  {
    id: 4,
    name: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    role: 'Staff',
    status: 'Active',
    lastLogin: '2025-05-16T08:20:00Z',
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    role: 'Volunteer',
    status: 'Inactive',
    lastLogin: '2025-04-30T16:10:00Z',
  },
  {
    id: 6,
    name: 'Jennifer Taylor',
    email: 'jennifer.taylor@example.com',
    role: 'Board Member',
    status: 'Pending',
    lastLogin: 'N/A',
  },
  {
    id: 7,
    name: 'Robert Anderson',
    email: 'robert.anderson@example.com',
    role: 'Committee Member',
    status: 'Active',
    lastLogin: '2025-05-12T11:35:00Z',
  }
];

export const mockRoles = [
  {
    id: 1,
    name: 'Administrator',
    description: 'Full system access and control',
    users: 2,
    permissions: [
      'Manage Users', 'Manage Roles', 'Manage Meetings', 
      'Manage Documents', 'Financial Management', 'System Settings'
    ]
  },
  {
    id: 2,
    name: 'Board Member',
    description: 'Access to board materials and voting',
    users: 3,
    permissions: [
      'View Meetings', 'Vote in Meetings', 'View Documents',
      'View Financial Reports'
    ]
  },
  {
    id: 3,
    name: 'Committee Chair',
    description: 'Lead committee activities',
    users: 4,
    permissions: [
      'Manage Committee Meetings', 'Manage Committee Documents',
      'View Board Materials', 'Submit Committee Reports'
    ]
  },
  {
    id: 4,
    name: 'Committee Member',
    description: 'Participate in committee activities',
    users: 8,
    permissions: [
      'View Committee Meetings', 'View Committee Documents',
      'Submit Feedback'
    ]
  },
  {
    id: 5,
    name: 'Staff',
    description: 'Regular organization staff',
    users: 12,
    permissions: [
      'View Public Documents', 'Submit Reports',
      'Manage Assigned Tasks'
    ]
  },
  {
    id: 6,
    name: 'Volunteer',
    description: 'Organization volunteers',
    users: 15,
    permissions: [
      'View Public Documents', 'View Public Events',
      'Log Volunteer Hours'
    ]
  }
];
