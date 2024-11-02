import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SubjectsPage from './components/SubjectsPage';
import SubjectDetailPage from './components/SubjectDetail/SubjectDetailPage';
import { Book, Calculator, FlaskConical, Languages, Microscope, Music, Palette, Globe2 } from 'lucide-react';

function App() {
  const subjects = {
    mathematics: {
      name: 'Mathematics',
      icon: <Calculator className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      description: 'Comprehensive resources for Algebra, Calculus, Geometry, and more'
    },
    physics: {
      name: 'Physics',
      icon: <FlaskConical className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      description: 'Mechanics, Thermodynamics, Electricity, and Modern Physics'
    },
    languages: {
      name: 'Languages',
      icon: <Languages className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      description: 'Arabic, French, English Literature and Language Studies'
    },
    literature: {
      name: 'Literature',
      icon: <Book className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      description: 'Poetry, Prose, Literary Analysis and Criticism'
    },
    biology: {
      name: 'Biology',
      icon: <Microscope className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      description: 'Cell Biology, Genetics, Ecology, and Human Anatomy'
    },
    arts: {
      name: 'Arts',
      icon: <Palette className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      description: 'Visual Arts, Art History, Design Principles'
    },
    music: {
      name: 'Music',
      icon: <Music className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      description: 'Music Theory, History, and Performance Studies'
    },
    geography: {
      name: 'Geography',
      icon: <Globe2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      description: 'Physical, Human, and Economic Geography'
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<SubjectsPage onSubjectClick={(subject) => `/subjects/${subject.toLowerCase()}`} />} />
          {Object.entries(subjects).map(([key, subject]) => (
            <Route
              key={key}
              path={`/subjects/${key}`}
              element={<SubjectDetailPage subject={subject} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;