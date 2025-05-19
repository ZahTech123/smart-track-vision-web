
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCcw, Maximize, Minimize } from "lucide-react";

interface SitePreviewProps {
  url?: string;
}

const SitePreview: React.FC<SitePreviewProps> = ({ url = "/" }) => {
  const [expanded, setExpanded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  
  const handleRefresh = () => {
    setReloadKey(prev => prev + 1);
  };
  
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${
      expanded ? "fixed inset-4 z-50" : "relative w-full"
    }`}>
      <div className="bg-gray-100 p-2 flex items-center justify-between border-b">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-gray-500">Site Preview</div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" onClick={handleRefresh}>
            <RefreshCcw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={handleToggleExpand}>
            {expanded ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="desktop" className="w-full">
        <div className="px-2 pt-2 bg-gray-100">
          <TabsList>
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            <TabsTrigger value="tablet">Tablet</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="desktop" className="m-0">
          <div className="aspect-[16/9] bg-white">
            <iframe 
              key={`desktop-${reloadKey}`}
              src={url} 
              className="w-full h-full border-0" 
              title="Website Preview (Desktop)"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="tablet" className="m-0">
          <div className="aspect-[4/3] bg-white mx-auto max-w-[768px]">
            <iframe 
              key={`tablet-${reloadKey}`}
              src={url} 
              className="w-full h-full border-0" 
              title="Website Preview (Tablet)"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="mobile" className="m-0">
          <div className="aspect-[9/19] bg-white mx-auto max-w-[375px]">
            <iframe 
              key={`mobile-${reloadKey}`}
              src={url} 
              className="w-full h-full border-0" 
              title="Website Preview (Mobile)"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SitePreview;
