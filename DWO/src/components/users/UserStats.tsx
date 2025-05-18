
import React from 'react';
import { Users, UserCheck, UserX, Clock } from 'lucide-react';
import StatCard from '@/components/StatCard';

const UserStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        title="Total Users"
        value="42"
        icon={<Users size={20} />}
        trend={{ value: 12, label: "this month", positive: true }}
      />
      <StatCard
        title="Active Users"
        value="36"
        icon={<UserCheck size={20} />}
        trend={{ value: 8, label: "this month", positive: true }}
        iconClassName="bg-green-50 text-green-600"
      />
      <StatCard
        title="Inactive Users"
        value="5"
        icon={<UserX size={20} />}
        iconClassName="bg-red-50 text-red-600"
      />
      <StatCard
        title="Pending Invitations"
        value="3"
        icon={<Clock size={20} />}
        iconClassName="bg-yellow-50 text-yellow-600"
      />
    </div>
  );
};

export default UserStats;
