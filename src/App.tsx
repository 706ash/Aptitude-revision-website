import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { SearchBar } from './components/SearchBar';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { TopicPage } from './pages/TopicPage';
import { SubtopicPage } from './pages/SubtopicPage';
import { topics } from './data/topics';
import { SearchResult } from './types';

function AppContent() {
  const [currentPath, setCurrentPath] = useState<string[]>([]);

  const handleNavigate = (path: string[]) => {
    setCurrentPath(path);
  };

  const handleTopicSelect = (topicId: string) => {
    setCurrentPath([topicId]);
  };

  const handleSubtopicSelect = (subtopicId: string) => {
    setCurrentPath([...currentPath, subtopicId]);
  };

  const handleSearchResultSelect = (result: SearchResult) => {
    if (result.type === 'topic') {
      setCurrentPath([result.id]);
    } else if (result.type === 'subtopic' && result.topicId) {
      setCurrentPath([result.topicId, result.id]);
    } else if ((result.type === 'formula' || result.type === 'mcq') && result.topicId && result.subtopicId) {
      setCurrentPath([result.topicId, result.subtopicId]);
    }
  };

  const getCurrentTopic = () => {
    if (currentPath.length === 0) return null;
    return topics.find(topic => topic.id === currentPath[0]);
  };

  const getCurrentSubtopic = () => {
    if (currentPath.length < 2) return null;
    const topic = getCurrentTopic();
    if (!topic) return null;
    return topic.subtopics.find(subtopic => subtopic.id === currentPath[1]);
  };

  const renderCurrentPage = () => {
    if (currentPath.length === 0) {
      return <Home onTopicSelect={handleTopicSelect} />;
    }

    const topic = getCurrentTopic();
    if (!topic) {
      return <Home onTopicSelect={handleTopicSelect} />;
    }

    if (currentPath.length === 1) {
      return <TopicPage topic={topic} onSubtopicSelect={handleSubtopicSelect} />;
    }

    const subtopic = getCurrentSubtopic();
    if (!subtopic) {
      return <TopicPage topic={topic} onSubtopicSelect={handleSubtopicSelect} />;
    }

    return <SubtopicPage subtopic={subtopic} topicTitle={topic.title} />;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNavigate([])}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Aptitude Master
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Learn • Practice • Excel
                </p>
              </div>
            </button>
            
            <div className="flex items-center space-x-4">
              <SearchBar onResultSelect={handleSearchResultSelect} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navigation currentPath={currentPath} onNavigate={handleNavigate} />
        {renderCurrentPage()}
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;