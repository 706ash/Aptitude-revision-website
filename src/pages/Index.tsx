
import React, { useState } from 'react';
import { TopicGrid } from '@/components/TopicGrid';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Heart } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header onSearchChange={setSearchQuery} />
      <Hero />
      <TopicGrid searchQuery={searchQuery} />
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-200/50 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600 flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Ash
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
