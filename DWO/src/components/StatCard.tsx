
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    label: string;
    positive?: boolean;
  };
  className?: string;
  iconClassName?: string;
};

const StatCard = ({
  title,
  value,
  icon,
  trend,
  className,
  iconClassName,
}: StatCardProps) => (
  <Card className={cn("p-4", className)}>
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h4 className="mt-1 text-2xl font-semibold">{value}</h4>
        {trend && (
          <div className="mt-1 flex items-center text-xs">
            <span
              className={cn(
                "font-medium",
                trend.positive ? "text-green-600" : "text-red-600"
              )}
            >
              {trend.positive ? "+" : "-"}{trend.value}%
            </span>
            <span className="ml-1 text-gray-500">{trend.label}</span>
          </div>
        )}
      </div>
      <div className={cn("p-2 rounded-md", iconClassName || "bg-nonprofit-50 text-nonprofit-700")}>
        {icon}
      </div>
    </div>
  </Card>
);

export default StatCard;
