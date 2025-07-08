
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TopicGrid } from '@/components/TopicGrid';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Heart, BarChart3 } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header onSearchChange={setSearchQuery} />
      <Hero />
      
      {/* Chart Templates Section */}
      <section className="py-8 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Practice Data Interpretation
          </h3>
          <Link to="/charts">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Chart Templates
            </Button>
          </Link>
        </div>
      </section>

      <TopicGrid searchQuery={searchQuery} />
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Ash
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
