
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

type DashboardCardProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  action?: React.ReactNode;
};

const DashboardCard = ({
  title,
  icon,
  children,
  className,
  headerClassName,
  action,
}: DashboardCardProps) => (
  <Card className={cn("overflow-hidden", className)}>
    <div className={cn("flex justify-between items-center p-4 border-b", headerClassName)}>
      <div className="flex items-center gap-3">
        {icon && <div className="text-gray-500">{icon}</div>}
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
      {action && <div>{action}</div>}
    </div>
    <div className="p-4">{children}</div>
  </Card>
);

export default DashboardCard;
