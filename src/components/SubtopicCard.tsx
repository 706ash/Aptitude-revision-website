
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock, FileText, Calculator } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FormulaCard } from './FormulaCard';
import { KeyNoteCard } from './KeyNoteCard';
import { Subtopic } from '@/types/Topic';

interface SubtopicCardProps {
  subtopic: Subtopic;
  topicId: string;
}

export const SubtopicCard: React.FC<SubtopicCardProps> = ({ subtopic, topicId }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-gray-200/50 overflow-hidden">
      <CardContent className="p-6">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-gray-800">{subtopic.title}</h3>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {subtopic.estimatedTime}
              </Badge>
            </div>
            <p className="text-gray-600">{subtopic.description}</p>
            
            <div className="flex gap-4 mt-3">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Calculator className="h-4 w-4" />
                {subtopic.formulas.length} formulas
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <FileText className="h-4 w-4" />
                {subtopic.keyNotes.length} key notes
              </div>
            </div>
          </div>
          
          <Button variant="ghost" size="sm">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        {isExpanded && (
          <div className="mt-6 space-y-6 animate-fade-in">
            {subtopic.formulas.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-blue-600" />
                  Formulas
                </h4>
                <div className="grid gap-4">
                  {subtopic.formulas.map((formula) => (
                    <FormulaCard key={formula.id} formula={formula} />
                  ))}
                </div>
              </div>
            )}
            
            {subtopic.keyNotes.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  Key Notes
                </h4>
                <div className="grid gap-4">
                  {subtopic.keyNotes.map((note) => (
                    <KeyNoteCard key={note.id} keyNote={note} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
