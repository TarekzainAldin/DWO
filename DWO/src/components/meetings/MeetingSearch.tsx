
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Download } from 'lucide-react';

type MeetingSearchProps = {
  onSearch?: (searchTerm: string) => void;
  onFilter?: () => void;
  onExport?: () => void;
};

const MeetingSearch = ({ onSearch, onFilter, onExport }: MeetingSearchProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input 
          placeholder="Search meetings..." 
          className="pl-10" 
          onChange={handleSearch}
        />
      </div>
      <Button variant="outline" className="flex items-center" onClick={onFilter}>
        <Filter size={18} className="mr-2" />
        Filter
      </Button>
      <Button variant="outline" className="flex items-center" onClick={onExport}>
        <Download size={18} className="mr-2" />
        Export
      </Button>
    </div>
  );
};

export default MeetingSearch;
