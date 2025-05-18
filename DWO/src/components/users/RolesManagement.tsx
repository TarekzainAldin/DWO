
import React, { useState } from 'react';
import { mockRoles } from '@/data/mockUsers';
import { Edit, PlusCircle, Trash, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const RolesManagement = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Manage Roles & Permissions</h3>
        <Button>
          <PlusCircle size={16} className="mr-1" /> Add New Role
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockRoles.map((role) => (
          <Card key={role.id} className="border-gray-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div className="flex-grow">
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-nonprofit-700" />
                    {role.name}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {role.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center mb-2 text-sm text-gray-500">
                <Users size={16} className="mr-1" />
                <span>{role.users} users with this role</span>
              </div>
              <Separator className="my-2" />
              <h4 className="text-sm font-medium mb-2">Permissions:</h4>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <Badge key={permission} variant="outline" className="bg-gray-50">
                    {permission}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex justify-end gap-2">
              <Button variant="outline" size="sm">
                <Edit size={14} className="mr-1" /> Edit
              </Button>
              {role.name !== 'Administrator' && (
                <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                  <Trash size={14} className="mr-1" /> Delete
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RolesManagement;
