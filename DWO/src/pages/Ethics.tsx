
import React from 'react';
import { AlertCircle, PlusCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Ethics = () => {
  return (
    <Layout>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Ethics & Legal</h1>
            <p className="text-gray-600 mt-1">
              Manage ethics policies, compliance, and legal matters
            </p>
          </div>
          <Button className="bg-nonprofit-700 hover:bg-nonprofit-800">
            <PlusCircle size={16} className="mr-1" />
            Report Issue
          </Button>
        </div>
      </div>
      
      <div className="min-h-[400px] flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
        <div className="text-center p-6">
          <AlertCircle className="h-12 w-12 text-nonprofit-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Ethics & Legal Management</h3>
          <p className="text-gray-500 mt-2 max-w-md">
            This section will help manage ethics policies, handle compliance issues, and track legal matters for your organization.
          </p>
          <Button className="mt-4 bg-nonprofit-700 hover:bg-nonprofit-800">
            <PlusCircle size={16} className="mr-1" />
            Get Started
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Ethics;
