import React from 'react';

interface YearNavigationProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
}

export default function YearNavigation({ selectedYear, onYearChange }: YearNavigationProps) {
  const years = ['2024', '2023', '2022', '2021', '2020'];

  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearChange(year)}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
            ${selectedYear === year
              ? 'bg-indigo-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}