
import React from 'react';
import { BarChart3, PlusCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Reports = () => {
  return (
    <Layout>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
            <p className="text-gray-600 mt-1">
              Generate and view organization reports
            </p>
          </div>
          <Button className="bg-nonprofit-700 hover:bg-nonprofit-800">
            <PlusCircle size={16} className="mr-1" />
            Create Report
          </Button>
        </div>
      </div>
      
      <div className="min-h-[400px] flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
        <div className="text-center p-6">
          <BarChart3 className="h-12 w-12 text-nonprofit-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Reports Dashboard</h3>
          <p className="text-gray-500 mt-2 max-w-md">
            This section will allow you to generate, view, and share various reports about your organization's activities and performance.
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

export default Reports;
