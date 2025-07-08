
import React from 'react';
import { TopicGrid } from '@/components/TopicGrid';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <Hero />
      <TopicGrid />
    </div>
  );
};

export default Index;
