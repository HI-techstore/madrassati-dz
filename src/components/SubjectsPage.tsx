import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Calculator, FlaskConical, Languages, Microscope, Music, Palette, Globe2, Search, SlidersHorizontal } from 'lucide-react';

interface Subject {
  name: string;
  icon: React.ReactNode;
  count: number;
  description: string;
  categories: string[];
  slug: string;
}

interface SubjectsPageProps {
  onSubjectClick: (subject: string) => string;
}

export default function SubjectsPage({ onSubjectClick }: SubjectsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const subjects: Subject[] = [
    {
      name: 'Mathematics',
      icon: <Calculator className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      count: 156,
      description: 'Algebra, Calculus, Geometry, and more',
      categories: ['Science', 'Core'],
      slug: 'mathematics'
    },
    {
      name: 'Physics',
      icon: <FlaskConical className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      count: 124,
      description: 'Mechanics, Thermodynamics, Electricity',
      categories: ['Science'],
      slug: 'physics'
    },
    {
      name: 'Languages',
      icon: <Languages className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      count: 98,
      description: 'Arabic, French, English Literature',
      categories: ['Languages', 'Core'],
      slug: 'languages'
    },
    {
      name: 'Literature',
      icon: <Book className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      count: 112,
      description: 'Poetry, Prose, Literary Analysis',
      categories: ['Humanities'],
      slug: 'literature'
    },
    {
      name: 'Biology',
      icon: <Microscope className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      count: 89,
      description: 'Cell Biology, Genetics, Ecology',
      categories: ['Science'],
      slug: 'biology'
    },
    {
      name: 'Arts',
      icon: <Palette className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      count: 67,
      description: 'Visual Arts, Art History, Design',
      categories: ['Arts'],
      slug: 'arts'
    },
    {
      name: 'Music',
      icon: <Music className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      count: 45,
      description: 'Theory, History, Performance',
      categories: ['Arts'],
      slug: 'music'
    },
    {
      name: 'Geography',
      icon: <Globe2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      count: 78,
      description: 'Physical, Human, Economic Geography',
      categories: ['Humanities'],
      slug: 'geography'
    }
  ];

  const categories = ['All', 'Core', 'Science', 'Languages', 'Humanities', 'Arts'];

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || subject.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Academic Subjects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover comprehensive resources across various disciplines to support your academic journey
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search subjects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            <SlidersHorizontal className="h-5 w-5 text-gray-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                  ${selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSubjects.map((subject) => (
            <div
              key={subject.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => navigate(onSubjectClick(subject.slug))}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg group-hover:scale-110 transition-transform">
                    {subject.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {subject.count} resources
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {subject.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {subject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {subject.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50">
                <div className="w-full text-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                  Explore Resources →
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No subjects found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}