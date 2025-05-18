
import React, { useState } from 'react';
import { ClipboardList, PlusCircle, Search, Filter, Download, Users, Calendar, FileText } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Committee type
type Committee = {
  id: number;
  name: string;
  type: 'Standing' | 'Ad Hoc';
  chair: string;
  members: number;
  createdDate: string;
  status: 'Active' | 'Inactive';
  description: string;
  nextMeeting: string | null;
  tasksCount: number;
};

// Mock data
const committees: Committee[] = [
  {
    id: 1,
    name: 'Finance Committee',
    type: 'Standing',
    chair: 'Robert Davis',
    members: 5,
    createdDate: '2022-01-15',
    status: 'Active',
    description: 'Oversees financial operations, budgeting, and financial reporting for the organization.',
    nextMeeting: '2025-06-10',
    tasksCount: 8
  },
  {
    id: 2,
    name: 'Governance Committee',
    type: 'Standing',
    chair: 'Dr. Alice Johnson',
    members: 4,
    createdDate: '2022-01-15',
    status: 'Active',
    description: 'Responsible for board recruitment, nominations, and governance policies.',
    nextMeeting: '2025-05-28',
    tasksCount: 6
  },
  {
    id: 3,
    name: 'Programs & Services Committee',
    type: 'Standing',
    chair: 'Jennifer Garcia',
    members: 7,
    createdDate: '2022-03-10',
    status: 'Active',
    description: 'Evaluates existing programs and services, and develops new initiatives.',
    nextMeeting: '2025-06-05',
    tasksCount: 12
  },
  {
    id: 4,
    name: 'Ethics Committee',
    type: 'Standing',
    chair: 'Thomas Nguyen',
    members: 4,
    createdDate: '2022-02-28',
    status: 'Active',
    description: 'Handles ethical concerns, conflicts of interest, and compliance matters.',
    nextMeeting: '2025-06-15',
    tasksCount: 3
  },
  {
    id: 5,
    name: 'Strategic Planning Task Force',
    type: 'Ad Hoc',
    chair: 'Michael Chen',
    members: 6,
    createdDate: '2024-11-05',
    status: 'Active',
    description: 'Temporary committee for developing the next 3-year strategic plan.',
    nextMeeting: '2025-06-12',
    tasksCount: 9
  },
  {
    id: 6,
    name: 'Audit Committee',
    type: 'Standing',
    chair: 'Sarah Williams',
    members: 3,
    createdDate: '2022-01-15',
    status: 'Active',
    description: 'Oversees the annual audit process and ensures financial accountability.',
    nextMeeting: '2025-07-20',
    tasksCount: 2
  },
  {
    id: 7,
    name: 'Development & Fundraising',
    type: 'Standing',
    chair: 'Emily Wilson',
    members: 5,
    createdDate: '2022-03-25',
    status: 'Active',
    description: 'Plans and implements fundraising strategies and donor relationships.',
    nextMeeting: '2025-06-08',
    tasksCount: 10
  },
  {
    id: 8,
    name: 'Technology Assessment Task Force',
    type: 'Ad Hoc',
    chair: 'David Thompson',
    members: 4,
    createdDate: '2025-01-10',
    status: 'Active',
    description: 'Evaluating current technology systems and making recommendations for improvements.',
    nextMeeting: '2025-05-30',
    tasksCount: 5
  },
];

// Helper functions
const getTypeColor = (type: string) => {
  switch (type) {
    case 'Standing': return 'bg-nonprofit-100 text-nonprofit-800 border-nonprofit-200';
    case 'Ad Hoc': return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const Committees = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter committees based on search query
  const filteredCommittees = committees.filter(committee => 
    committee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    committee.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    committee.chair.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Committees</h1>
            <p className="text-gray-600 mt-1">
              Manage your standing and ad hoc committees
            </p>
          </div>
          <Button className="bg-nonprofit-700 hover:bg-nonprofit-800">
            <PlusCircle size={16} className="mr-1" />
            Create Committee
          </Button>
        </div>
      </div>
      
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 bg-nonprofit-50 border-nonprofit-100">
          <div className="text-sm text-gray-500">Total Committees</div>
          <div className="text-2xl font-bold text-nonprofit-800 mt-1">{committees.length}</div>
          <div className="text-xs text-gray-500 mt-1">{committees.filter(c => c.type === 'Standing').length} Standing, {committees.filter(c => c.type === 'Ad Hoc').length} Ad Hoc</div>
        </Card>
        
        <Card className="p-4 bg-purple-50 border-purple-100">
          <div className="text-sm text-gray-500">Committee Members</div>
          <div className="text-2xl font-bold text-purple-700 mt-1">{committees.reduce((acc, curr) => acc + curr.members, 0)}</div>
          <div className="text-xs text-gray-500 mt-1">Total participants across all committees</div>
        </Card>
        
        <Card className="p-4 bg-amber-50 border-amber-100">
          <div className="text-sm text-gray-500">Upcoming Meetings</div>
          <div className="text-2xl font-bold text-amber-700 mt-1">{committees.filter(c => c.nextMeeting !== null).length}</div>
          <div className="text-xs text-gray-500 mt-1">Next meeting: {new Date(committees.reduce((a, b) => a.nextMeeting! < b.nextMeeting! ? a : b).nextMeeting!).toLocaleDateString()}</div>
        </Card>
        
        <Card className="p-4 bg-blue-50 border-blue-100">
          <div className="text-sm text-gray-500">Open Tasks</div>
          <div className="text-2xl font-bold text-blue-700 mt-1">{committees.reduce((acc, curr) => acc + curr.tasksCount, 0)}</div>
          <div className="text-xs text-gray-500 mt-1">Assigned to committees</div>
        </Card>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search committees..." 
            className="pl-10" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center">
          <Filter size={18} className="mr-2" />
          Filter
        </Button>
        <Button variant="outline" className="flex items-center">
          <Download size={18} className="mr-2" />
          Export
        </Button>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Committees</TabsTrigger>
          <TabsTrigger value="standing">Standing</TabsTrigger>
          <TabsTrigger value="adhoc">Ad Hoc</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredCommittees.map(committee => (
              <Card key={committee.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{committee.name}</h3>
                        <div className="text-sm text-gray-500 mt-1">{committee.description}</div>
                      </div>
                      <Badge variant="outline" className={getTypeColor(committee.type)}>
                        {committee.type}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="flex items-center text-sm">
                        <Users size={14} className="text-gray-400 mr-1" />
                        <span>Chair: {committee.chair}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users size={14} className="text-gray-400 mr-1" />
                        <span>{committee.members} Members</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar size={14} className="text-gray-400 mr-1" />
                        <span>Created: {new Date(committee.createdDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FileText size={14} className="text-gray-400 mr-1" />
                        <span>{committee.tasksCount} Open Tasks</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 mt-3 border-t">
                      {committee.nextMeeting ? (
                        <div className="text-xs text-gray-600">
                          Next meeting: {new Date(committee.nextMeeting).toLocaleDateString()}
                        </div>
                      ) : (
                        <div className="text-xs text-gray-600">No meetings scheduled</div>
                      )}
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Members</Button>
                        <Button variant="ghost" size="sm">Tasks</Button>
                        <Button variant="outline" size="sm" className="bg-nonprofit-50 text-nonprofit-700">View</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="standing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredCommittees.filter(c => c.type === 'Standing').map(committee => (
              <Card key={committee.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{committee.name}</h3>
                        <div className="text-sm text-gray-500 mt-1">{committee.description}</div>
                      </div>
                      <Badge variant="outline" className={getTypeColor(committee.type)}>
                        {committee.type}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="flex items-center text-sm">
                        <Users size={14} className="text-gray-400 mr-1" />
                        <span>Chair: {committee.chair}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users size={14} className="text-gray-400 mr-1" />
                        <span>{committee.members} Members</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar size={14} className="text-gray-400 mr-1" />
                        <span>Created: {new Date(committee.createdDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FileText size={14} className="text-gray-400 mr-1" />
                        <span>{committee.tasksCount} Open Tasks</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 mt-3 border-t">
                      {committee.nextMeeting ? (
                        <div className="text-xs text-gray-600">
                          Next meeting: {new Date(committee.nextMeeting).toLocaleDateString()}
                        </div>
                      ) : (
                        <div className="text-xs text-gray-600">No meetings scheduled</div>
                      )}
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Members</Button>
                        <Button variant="ghost" size="sm">Tasks</Button>
                        <Button variant="outline" size="sm" className="bg-nonprofit-50 text-nonprofit-700">View</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="adhoc">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredCommittees.filter(c => c.type === 'Ad Hoc').map(committee => (
              <Card key={committee.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{committee.name}</h3>
                        <div className="text-sm text-gray-500 mt-1">{committee.description}</div>
                      </div>
                      <Badge variant="outline" className={getTypeColor(committee.type)}>
                        {committee.type}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="flex items-center text-sm">
                        <Users size={14} className="text-gray-400 mr-1" />
                        <span>Chair: {committee.chair}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users size={14} className="text-gray-400 mr-1" />
                        <span>{committee.members} Members</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar size={14} className="text-gray-400 mr-1" />
                        <span>Created: {new Date(committee.createdDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FileText size={14} className="text-gray-400 mr-1" />
                        <span>{committee.tasksCount} Open Tasks</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 mt-3 border-t">
                      {committee.nextMeeting ? (
                        <div className="text-xs text-gray-600">
                          Next meeting: {new Date(committee.nextMeeting).toLocaleDateString()}
                        </div>
                      ) : (
                        <div className="text-xs text-gray-600">No meetings scheduled</div>
                      )}
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Members</Button>
                        <Button variant="ghost" size="sm">Tasks</Button>
                        <Button variant="outline" size="sm" className="bg-nonprofit-50 text-nonprofit-700">View</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Committees;
