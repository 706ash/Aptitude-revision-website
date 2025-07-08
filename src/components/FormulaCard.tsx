
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, Eye, EyeOff, BookOpen } from 'lucide-react';
import { Formula } from '@/types/Topic';
import { useToast } from '@/hooks/use-toast';

interface FormulaCardProps {
  formula: Formula;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({ formula }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { toast } = useToast();

  const copyFormula = () => {
    navigator.clipboard.writeText(formula.formula);
    toast({
      title: "Formula copied!",
      description: "The formula has been copied to your clipboard.",
    });
  };

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200/50 hover:shadow-md transition-all duration-200">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h5 className="font-semibold text-gray-800 text-lg">{formula.title}</h5>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 hover:text-blue-700"
            >
              {showDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyFormula}
              className="text-gray-600 hover:text-gray-700"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="bg-white/80 rounded-lg p-4 mb-3 border border-blue-200/30">
          <code className="text-lg font-mono text-blue-800 font-semibold">
            {formula.formula}
          </code>
        </div>
        
        <p className="text-gray-700 mb-3">{formula.description}</p>
        
        {showDetails && (
          <div className="space-y-3 animate-fade-in">
            {formula.example && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800">Example</span>
                </div>
                <p className="text-green-700 text-sm">{formula.example}</p>
              </div>
            )}
            
            {formula.variables && Object.keys(formula.variables).length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <h6 className="font-medium text-yellow-800 mb-2">Variables:</h6>
                <div className="space-y-1">
                  {Object.entries(formula.variables).map(([variable, description]) => (
                    <div key={variable} className="text-sm">
                      <span className="font-mono bg-yellow-100 px-2 py-1 rounded text-yellow-800">
                        {variable}
                      </span>
                      <span className="text-yellow-700 ml-2">= {description}</span>
                    </div>
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
