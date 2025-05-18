
import React, { useState } from 'react';
import { Users as UsersIcon, PlusCircle, Search, Filter } from 'lucide-react';
import Layout from '@/components/Layout';
import UserTable from '@/components/users/UserTable';
import RolesManagement from '@/components/users/RolesManagement';
import AddUserDialog from '@/components/users/AddUserDialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserStats from '@/components/users/UserStats';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { mockUsers } from '@/data/mockUsers';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState(mockUsers);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const addUser = (user: any) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  return (
    <Layout>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Users & Roles</h1>
            <p className="text-gray-600 mt-1">
              Manage users, roles, and permissions for your organization
            </p>
          </div>
          <Button 
            className="bg-nonprofit-700 hover:bg-nonprofit-800"
            onClick={() => setIsAddUserOpen(true)}
          >
            <PlusCircle size={16} className="mr-1" />
            Add User
          </Button>
        </div>
      </div>

      <UserStats />
      
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search users..." 
            className="pl-10" 
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <Button variant="outline" className="flex items-center">
          <Filter size={18} className="mr-2" />
          Filter
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
        </TabsList>
        <TabsContent value="users" className="mt-4">
          <Card>
            <UserTable 
              users={users.filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.role.toLowerCase().includes(searchTerm.toLowerCase())
              )} 
            />
          </Card>
        </TabsContent>
        <TabsContent value="roles" className="mt-4">
          <RolesManagement />
        </TabsContent>
      </Tabs>

      <AddUserDialog 
        isOpen={isAddUserOpen} 
        onClose={() => setIsAddUserOpen(false)} 
        onAddUser={addUser}
      />
    </Layout>
  );
};

export default Users;
