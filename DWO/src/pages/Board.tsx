
import React from 'react';
import { 
  Users, Mail, Phone, Calendar, 
  Briefcase, ChevronDown, Download, 
  Filter, PlusCircle, Search 
} from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

// Board member type
type BoardMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  joinedDate: string;
  term: string;
  committees: string[];
  status: 'Active' | 'Inactive' | 'Term Ending';
};

// Mock data
const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: 'Dr. Alice Johnson',
    role: 'Chairperson',
    email: 'alice.johnson@example.org',
    phone: '(555) 123-4567',
    joinedDate: '2020-06-15',
    term: '2020-2026',
    committees: ['Executive', 'Governance'],
    status: 'Active'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Vice-Chair',
    email: 'michael.chen@example.org',
    phone: '(555) 234-5678',
    joinedDate: '2021-03-10',
    term: '2021-2027',
    committees: ['Finance', 'Diversity & Inclusion'],
    status: 'Active'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Secretary',
    email: 'sarah.williams@example.org',
    phone: '(555) 345-6789',
    joinedDate: '2019-11-05',
    term: '2019-2025',
    committees: ['Executive', 'Audit', 'Ethics'],
    status: 'Active'
  },
  {
    id: 4,
    name: 'Robert Davis',
    role: 'Treasurer',
    email: 'robert.davis@example.org',
    phone: '(555) 456-7890',
    joinedDate: '2021-09-20',
    term: '2021-2027',
    committees: ['Executive', 'Finance', 'Investment'],
    status: 'Active'
  },
  {
    id: 5,
    name: 'Jennifer Garcia',
    role: 'Member',
    email: 'jennifer.garcia@example.org',
    phone: '(555) 567-8901',
    joinedDate: '2022-01-15',
    term: '2022-2028',
    committees: ['Programs', 'Development'],
    status: 'Active'
  },
  {
    id: 6,
    name: 'Thomas Nguyen',
    role: 'Member',
    email: 'thomas.nguyen@example.org',
    phone: '(555) 678-9012',
    joinedDate: '2020-07-30',
    term: '2020-2026',
    committees: ['Ethics', 'Programs'],
    status: 'Term Ending'
  },
  {
    id: 7,
    name: 'Emily Wilson',
    role: 'Member',
    email: 'emily.wilson@example.org',
    phone: '(555) 789-0123',
    joinedDate: '2019-04-10',
    term: '2019-2025',
    committees: ['Development', 'Marketing'],
    status: 'Active'
  },
  {
    id: 8,
    name: 'David Thompson',
    role: 'Member',
    email: 'david.thompson@example.org',
    phone: '(555) 890-1234',
    joinedDate: '2021-11-15',
    term: '2021-2027',
    committees: ['Finance', 'Investment'],
    status: 'Active'
  }
];

// Status badge color helper
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'bg-green-100 text-green-800 border-green-200';
    case 'Inactive': return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'Term Ending': return 'bg-amber-100 text-amber-800 border-amber-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const Board = () => {
  return (
    <Layout>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Board of Directors</h1>
            <p className="text-gray-600 mt-1">
              Manage your board members, elections, and meetings
            </p>
          </div>
          <Button className="bg-nonprofit-700 hover:bg-nonprofit-800">
            <PlusCircle size={16} className="mr-1" />
            Add Board Member
          </Button>
        </div>
      </div>
      
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 bg-nonprofit-50 border-nonprofit-100">
          <div className="text-sm text-gray-500">Total Board Members</div>
          <div className="text-2xl font-bold text-nonprofit-800 mt-1">8</div>
          <div className="text-xs text-gray-500 mt-1">Current capacity: 3-15 members</div>
        </Card>
        
        <Card className="p-4 bg-green-50 border-green-100">
          <div className="text-sm text-gray-500">Active Members</div>
          <div className="text-2xl font-bold text-green-700 mt-1">7</div>
          <div className="text-xs text-gray-500 mt-1">87.5% of total</div>
        </Card>
        
        <Card className="p-4 bg-amber-50 border-amber-100">
          <div className="text-sm text-gray-500">Terms Ending Soon</div>
          <div className="text-2xl font-bold text-amber-700 mt-1">1</div>
          <div className="text-xs text-gray-500 mt-1">In the next 90 days</div>
        </Card>
        
        <Card className="p-4 bg-purple-50 border-purple-100">
          <div className="text-sm text-gray-500">Next Election</div>
          <div className="text-2xl font-bold text-purple-700 mt-1">June 15</div>
          <div className="text-xs text-gray-500 mt-1">29 days from today</div>
        </Card>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search board members..." 
            className="pl-10" 
          />
        </div>
        <Button variant="outline" className="flex items-center">
          <Filter size={18} className="mr-2" />
          Filter
          <ChevronDown size={16} className="ml-2" />
        </Button>
        <Button variant="outline" className="flex items-center">
          <Download size={18} className="mr-2" />
          Export
        </Button>
      </div>
      
      {/* Board Members Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-3">Name & Role</th>
                <th className="px-6 py-3">Contact</th>
                <th className="px-6 py-3">Term</th>
                <th className="px-6 py-3">Committees</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {boardMembers.map(member => (
                <tr key={member.id} className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-nonprofit-100 text-nonprofit-700 flex items-center justify-center mr-3">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{member.name}</div>
                        <div className="text-gray-500">{member.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center mb-1">
                      <Mail size={14} className="text-gray-400 mr-1" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={14} className="text-gray-400 mr-1" />
                      <span>{member.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center mb-1">
                      <Calendar size={14} className="text-gray-400 mr-1" />
                      <span>Joined: {new Date(member.joinedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={14} className="text-gray-400 mr-1" />
                      <span>Term: {member.term}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {member.committees.map((committee, idx) => (
                        <Badge key={idx} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          {committee}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className={getStatusColor(member.status)}>
                      {member.status}
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
    </Layout>
  );
};

export default Board;
