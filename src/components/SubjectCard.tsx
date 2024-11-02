import React from 'react';
import { Book } from 'lucide-react';

interface SubjectCardProps {
  subject: string;
  count: number;
  icon?: React.ReactNode;
}

export default function SubjectCard({ subject, count, icon }: SubjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon || <Book className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{subject}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{count} resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}