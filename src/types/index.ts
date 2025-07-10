export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  title: string;
  description: string;
  concepts?: Concept[];
  formulas: Formula[];
  mcqs: MCQ[];
}

export interface Concept {
  id: string;
  title: string;
  description: string;
}

export interface Formula {
  id: string;
  title: string;
  formula: string;
  description: string;
  example?: string;
}

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  source?: string;
}

export interface SearchResult {
  type: 'topic' | 'subtopic' | 'formula' | 'mcq';
  id: string;
  title: string;
  description: string;
  topicId?: string;
  subtopicId?: string;
}

export interface Reference {
  id: string;
  title: string;
  author: string;
  description: string;
  category: 'arithmetic' | 'data-interpretation' | 'general';
  rating: number;
  pages?: number;
  publisher?: string;
  edition?: string;
}