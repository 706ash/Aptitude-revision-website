
import { LucideIcon } from 'lucide-react';

export interface Formula {
  id: string;
  title: string;
  formula: string;
  description: string;
  example?: string;
  variables?: { [key: string]: string };
}

export interface KeyNote {
  id: string;
  title: string;
  content: string;
  type: 'definition' | 'concept' | 'tip' | 'trick';
  importance: 'high' | 'medium' | 'low';
}

export interface Subtopic {
  id: string;
  title: string;
  description: string;
  formulas: Formula[];
  keyNotes: KeyNote[];
  estimatedTime: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  subtopics: Subtopic[];
  lastUpdated: string;
}
