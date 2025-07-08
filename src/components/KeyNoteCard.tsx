
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, BookOpen, AlertCircle, Zap } from 'lucide-react';
import { KeyNote } from '@/types/Topic';

interface KeyNoteCardProps {
  keyNote: KeyNote;
}

export const KeyNoteCard: React.FC<KeyNoteCardProps> = ({ keyNote }) => {
  const getIconAndColors = () => {
    switch (keyNote.type) {
      case 'tip':
        return {
          icon: Lightbulb,
          bgColor: 'from-yellow-50 to-orange-50',
          borderColor: 'border-yellow-200/50',
          iconColor: 'text-yellow-600',
          badgeColor: 'bg-yellow-100 text-yellow-800'
        };
      case 'concept':
        return {
          icon: BookOpen,
          bgColor: 'from-blue-50 to-cyan-50',
          borderColor: 'border-blue-200/50',
          iconColor: 'text-blue-600',
          badgeColor: 'bg-blue-100 text-blue-800'
        };
      case 'trick':
        return {
          icon: Zap,
          bgColor: 'from-purple-50 to-pink-50',
          borderColor: 'border-purple-200/50',
          iconColor: 'text-purple-600',
          badgeColor: 'bg-purple-100 text-purple-800'
        };
      default:
        return {
          icon: AlertCircle,
          bgColor: 'from-gray-50 to-slate-50',
          borderColor: 'border-gray-200/50',
          iconColor: 'text-gray-600',
          badgeColor: 'bg-gray-100 text-gray-800'
        };
    }
  };

  const { icon: Icon, bgColor, borderColor, iconColor, badgeColor } = getIconAndColors();

  const getImportanceBadge = () => {
    switch (keyNote.importance) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800 border-red-200">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Low Priority</Badge>;
    }
  };

  return (
    <Card className={`bg-gradient-to-r ${bgColor} ${borderColor} hover:shadow-md transition-all duration-200`}>
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-lg bg-white/70 flex items-center justify-center flex-shrink-0`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-semibold text-gray-800">{keyNote.title}</h5>
              <div className="flex gap-2">
                <Badge className={badgeColor} variant="outline">
                  {keyNote.type.charAt(0).toUpperCase() + keyNote.type.slice(1)}
                </Badge>
                {getImportanceBadge()}
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{keyNote.content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
