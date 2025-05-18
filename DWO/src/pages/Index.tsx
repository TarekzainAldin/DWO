
import React from 'react';
import { 
  Users, ClipboardList, Calendar, CircleDollarSign, 
  FileText, ArrowRight, Check, Clock, RefreshCcw,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import StatCard from '@/components/StatCard';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  // Mock data for the dashboard
  const upcomingMeetings = [
    { id: 1, title: 'Board Quarterly Meeting', date: '2025-06-01', time: '10:00 AM', type: 'Board' },
    { id: 2, title: 'Finance Committee Review', date: '2025-05-25', time: '2:00 PM', type: 'Committee' },
    { id: 3, title: 'Ethics Training Session', date: '2025-05-28', time: '11:00 AM', type: 'Training' },
  ];
  
  const recentTickets = [
    { id: 1, title: 'Budget approval for Q3', status: 'In Progress', priority: 'High', assignee: 'Jane Smith' },
    { id: 2, title: 'Partner agreement review', status: 'New', priority: 'Medium', assignee: 'Unassigned' },
    { id: 3, title: 'Annual report preparation', status: 'In Progress', priority: 'High', assignee: 'Thomas Brown' },
    { id: 4, title: 'Conflict of interest disclosure', status: 'Completed', priority: 'Medium', assignee: 'Sarah Jones' },
  ];
  
  const boardMembers = [
    { id: 1, name: 'Dr. Alice Johnson', role: 'Chairperson', status: 'Active' },
    { id: 2, name: 'Michael Chen', role: 'Vice-Chair', status: 'Active' },
    { id: 3, name: 'Sarah Williams', role: 'Secretary', status: 'Active' },
    { id: 4, name: 'Robert Davis', role: 'Treasurer', status: 'Active' },
    { id: 5, name: 'Jennifer Garcia', role: 'Member', status: 'Active' },
  ];
  
  const governance = {
    boardCompliance: 85,
    committeesFormed: 6,
    documentsUpdated: 92,
    upcomingActions: 8
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-amber-100 text-amber-800';
      case 'Deferred': return 'bg-purple-100 text-purple-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">DWO Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome to your centralized DWO  management system.
        </p>
      </div>
      
      {/* Statistics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Active Board Members"
          value="12"
          icon={<Users size={20} />}
          trend={{ value: 2, label: "from last month", positive: true }}
          iconClassName="bg-nonprofit-50 text-nonprofit-700"
        />
        
        <StatCard
          title="Active Committees"
          value="6"
          icon={<ClipboardList size={20} />}
          iconClassName="bg-purple-50 text-purple-700"
        />
        
        <StatCard
          title="Upcoming Meetings"
          value="8"
          icon={<Calendar size={20} />}
          trend={{ value: 3, label: "from last month", positive: true }}
          iconClassName="bg-amber-50 text-amber-700"
        />
        
        <StatCard
          title="Open Tickets"
          value="24"
          icon={<AlertCircle size={20} />}
          trend={{ value: 5, label: "from last month", positive: false }}
          iconClassName="bg-red-50 text-red-700"
        />
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Meetings */}
          <DashboardCard 
            title="Upcoming Meetings" 
            icon={<Calendar size={18} />}
            action={
              <Button variant="ghost" size="sm" className="text-sm text-nonprofit-600 hover:text-nonprofit-800">
                View All <ArrowRight size={16} className="ml-1" />
              </Button>
            }
          >
            <div className="space-y-3">
              {upcomingMeetings.map(meeting => (
                <div key={meeting.id} className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0">
                  <div>
                    <h4 className="font-medium text-gray-800">{meeting.title}</h4>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{meeting.date} at {meeting.time}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-nonprofit-50 text-nonprofit-700 border-nonprofit-200">
                    {meeting.type}
                  </Badge>
                </div>
              ))}
            </div>
          </DashboardCard>
          
          {/* Recent Tickets */}
          <DashboardCard 
            title="Recent Tickets" 
            icon={<ClipboardList size={18} />}
            action={
              <Button variant="ghost" size="sm" className="text-sm text-nonprofit-600 hover:text-nonprofit-800">
                View All <ArrowRight size={16} className="ml-1" />
              </Button>
            }
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-2">Title</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2">Priority</th>
                    <th className="pb-2">Assignee</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTickets.map(ticket => (
                    <tr key={ticket.id} className="border-t text-gray-800">
                      <td className="py-3">{ticket.title}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="py-3">{ticket.assignee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DashboardCard>
        </div>
        
        {/* Column 2 */}
        <div className="space-y-6">
          {/* Governance Status */}
          <DashboardCard 
            title="Governance Status" 
            icon={<Check size={18} />}
          >
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Board Compliance</span>
                  <span className="font-medium">{governance.boardCompliance}%</span>
                </div>
                <Progress value={governance.boardCompliance} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Committees Formed</span>
                  <span className="font-medium">{governance.committeesFormed}/10</span>
                </div>
                <Progress value={governance.committeesFormed * 10} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Documents Updated</span>
                  <span className="font-medium">{governance.documentsUpdated}%</span>
                </div>
                <Progress value={governance.documentsUpdated} className="h-2" />
              </div>
              
              <div className="pt-2 text-center">
                <Button variant="outline" size="sm" className="w-full border-nonprofit-200 text-nonprofit-700">
                  <RefreshCcw size={14} className="mr-1" /> Run Compliance Check
                </Button>
              </div>
            </div>
          </DashboardCard>
          
          {/* Board Members */}
          <DashboardCard 
            title="Board Members" 
            icon={<Users size={18} />}
            action={
              <Button variant="ghost" size="sm" className="text-sm text-nonprofit-600 hover:text-nonprofit-800">
                View All <ArrowRight size={16} className="ml-1" />
              </Button>
            }
          >
            <div className="space-y-3">
              {boardMembers.map(member => (
                <div key={member.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-nonprofit-100 text-nonprofit-700 flex items-center justify-center mr-3">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{member.name}</h4>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {member.status}
                  </Badge>
                </div>
              ))}
            </div>
          </DashboardCard>
          
          {/* Upcoming Actions */}
          <DashboardCard 
            title="Upcoming Actions" 
            icon={<Clock size={18} />}
          >
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                <span>Annual budget review due in 7 days</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                <span>Committee reports due in 14 days</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                <span>Conflict of interest forms due in 21 days</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="h-2 w-2 rounded-full bg-nonprofit-500 mr-2"></div>
                <span>Board meeting in 5 days</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span>Partner organization review in 12 days</span>
              </div>
              <div className="pt-2 text-center">
                <Button variant="outline" size="sm" className="w-full text-sm border-nonprofit-200 text-nonprofit-700">
                  View All Tasks
                </Button>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
