import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Download, Save, Move, StretchHorizontal, AlignCenterHorizontal, RotateCcw } from 'lucide-react';

interface FloatingToolbarProps {
  selectedElement: {
    id: string;
    name: string;
    // Add more properties as needed: x, y, width, height, text, imageUrl, etc.
    styles?: React.CSSProperties;
    content?: string;
  } | null;
  onClose: () => void;
  onSaveElement: (elementData: any) => void; // Define more specific type later
  onCopyJson: (elementData: any) => void;    // Define more specific type later
  onUpdateStyle: (property: string, value: string | number) => void;
  onUpdateContent: (newContent: string) => void;
}

const FloatingToolbar: React.FC<FloatingToolbarProps> = ({
  selectedElement,
  onClose,
  onSaveElement,
  onCopyJson,
  onUpdateStyle,
  onUpdateContent,
}) => {
  if (!selectedElement) {
    return null;
  }

  const handleStyleChange = (property: keyof React.CSSProperties, value: string) => {
    onUpdateStyle(property, value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdateContent(e.target.value);
  };

  return (
    <Card className="fixed top-1/2 right-4 transform -translate-y-1/2 w-80 bg-white shadow-2xl z-[100] border border-gray-300">
      <CardHeader className="p-3 bg-gray-50 border-b border-gray-200 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">Edit: {selectedElement.name || 'Element'}</CardTitle>
        <Button variant="ghost" size="sm" onClick={onClose} className="p-1 h-auto">
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-200px)] max-h-[500px]">
        <CardContent className="p-4 space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium text-sm flex items-center"><Move className="w-4 h-4 mr-2 text-gray-600" /> Position (px)</h4>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="number"
                placeholder="X"
                value={selectedElement.styles?.left?.toString().replace('px', '') || ''}
                onChange={(e) => handleStyleChange('left', e.target.value + 'px')}
              />
              <Input
                type="number"
                placeholder="Y"
                value={selectedElement.styles?.top?.toString().replace('px', '') || ''}
                onChange={(e) => handleStyleChange('top', e.target.value + 'px')}
              />
            </div>
          </div>
          <Separator />

          <div className="space-y-2">
            <h4 className="font-medium text-sm flex items-center"><StretchHorizontal className="w-4 h-4 mr-2 text-gray-600" /> Size (px)</h4>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="number"
                placeholder="Width"
                value={selectedElement.styles?.width?.toString().replace('px', '') || ''}
                onChange={(e) => handleStyleChange('width', e.target.value + 'px')}
              />
              <Input
                type="number"
                placeholder="Height"
                value={selectedElement.styles?.height?.toString().replace('px', '') || ''}
                onChange={(e) => handleStyleChange('height', e.target.value + 'px')}
              />
            </div>
          </div>
          <Separator />
          
          {typeof selectedElement.content === 'string' && (
            <>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Text Content</h4>
                <Input
                  type="text"
                  value={selectedElement.content}
                  onChange={handleContentChange}
                  placeholder="Enter text"
                />
              </div>
              <Separator />
            </>
          )}

          <div className="space-y-2">
            <h4 className="font-medium text-sm flex items-center"><AlignCenterHorizontal className="w-4 h-4 mr-2 text-gray-600" /> Alignment</h4>
            <p className="text-xs text-gray-500">Alignment controls coming soon.</p>
          </div>
          <Separator />

          <div className="space-y-2">
            <h4 className="font-medium text-sm flex items-center"><RotateCcw className="w-4 h-4 mr-2 text-gray-600" /> Orientation</h4>
            <p className="text-xs text-gray-500">Orientation controls coming soon.</p>
          </div>
        </CardContent>
      </ScrollArea>
      <div className="p-3 border-t border-gray-200 bg-gray-50 flex justify-end space-x-2">
        <Button variant="outline" size="sm" onClick={() => onCopyJson(selectedElement)} title="Copy JSON">
          <Download className="w-4 h-4 mr-1.5" /> Copy JSON
        </Button>
        <Button variant="default" size="sm" onClick={() => onSaveElement(selectedElement)} title="Save Settings">
          <Save className="w-4 h-4 mr-1.5" /> Save
        </Button>
      </div>
    </Card>
  );
};

export default FloatingToolbar;

// Helper to add labels to Input if not directly supported by shadcn/ui Input
// This is a common pattern if you want floating labels or more complex input groups.
// For now, we'll assume the parent div acts as a label container if needed.
// const InputWithLabel = ({ label, ...props }) => (
//   <div className="space-y-1">
//     <label className="text-xs text-gray-600">{label}</label>
//     <Input {...props} />
//   </div>
// ); 