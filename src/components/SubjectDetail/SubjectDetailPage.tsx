import React, { useState } from 'react';
import YearNavigation from './YearNavigation';
import LevelTabs from './LevelTabs';
import ResourceCard from './ResourceCard';
import { Book, Search } from 'lucide-react';

interface SubjectDetailPageProps {
  subject: {
    name: string;
    icon: React.ReactNode;
    description: string;
  };
}

export default function SubjectDetailPage({ subject }: SubjectDetailPageProps) {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedLevel, setSelectedLevel] = useState('high');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for resources
  const resources = [
    {
      id: 1,
      title: 'Final Exam Practice Set',
      type: 'Exam',
      downloadCount: 1234,
      duration: '3 hours',
      downloadUrl: '#',
      level: 'high',
      year: '2024'
    },
    {
      id: 2,
      title: 'Comprehensive Study Guide',
      type: 'Guide',
      downloadCount: 856,
      duration: '2 hours',
      downloadUrl: '#',
      level: 'high',
      year: '2024'
    },
    {
      id: 3,
      title: 'Mock Test Series',
      type: 'Test',
      downloadCount: 567,
      duration: '1.5 hours',
      downloadUrl: '#',
      level: 'high',
      year: '2024'
    }
  ];

  const filteredResources = resources.filter(resource => 
    resource.level === selectedLevel &&
    resource.year === selectedYear &&
    (searchTerm === '' || resource.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subject Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg mr-4">
              {subject.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {subject.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {subject.description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation and Search */}
        <div className="space-y-6 mb-8">
          <YearNavigation
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
          />
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <LevelTabs
              selectedLevel={selectedLevel}
              onLevelChange={setSelectedLevel}
            />
            
            <div className="relative max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              />
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="space-y-4">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              type={resource.type}
              downloadCount={resource.downloadCount}
              duration={resource.duration}
              downloadUrl={resource.downloadUrl}
            />
          ))}

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <Book className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No resources found</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}