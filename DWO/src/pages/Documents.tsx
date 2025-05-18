
import React from 'react';
import { FileText, PlusCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Documents = () => {
  return (
    <Layout>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Documents</h1>
            <p className="text-gray-600 mt-1">
              Store and manage organization documents
            </p>
          </div>
          <Button className="bg-nonprofit-700 hover:bg-nonprofit-800">
            <PlusCircle size={16} className="mr-1" />
            Upload Document
          </Button>
        </div>
      </div>
      
      <div className="min-h-[400px] flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
        <div className="text-center p-6">
          <FileText className="h-12 w-12 text-nonprofit-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Document Management</h3>
          <p className="text-gray-500 mt-2 max-w-md">
            This section will allow you to upload, organize, and access all organizational documents with proper permissions.
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

export default Documents;
