import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCcw, Maximize, Minimize } from "lucide-react";
import FloatingToolbar from "@/components/admin/FloatingToolbar";

interface SitePreviewProps {
  url?: string;
  onPreviewElementSelect?: (elementIdentifier: string) => void;
}

export type SelectedElementData = {
  id: string;
  name: string;
  styles?: React.CSSProperties;
  content?: string;
  elementType: string;
};

const SitePreview: React.FC<SitePreviewProps> = ({ url = "/", onPreviewElementSelect }) => {
  const [expanded, setExpanded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [activeTab, setActiveTab] = useState("desktop");
  const currentParentOrigin = window.location.origin; // Get parent origin once

  const [selectedElementForToolbar, setSelectedElementForToolbar] = useState<SelectedElementData | null>(null);

  const desktopIframeRef = useRef<HTMLIFrameElement>(null);
  const tabletIframeRef = useRef<HTMLIFrameElement>(null);
  const mobileIframeRef = useRef<HTMLIFrameElement>(null);

  const getActiveIframeRef = () => {
    switch (activeTab) {
      case "tablet":
        return tabletIframeRef;
      case "mobile":
        return mobileIframeRef;
      case "desktop":
      default:
        return desktopIframeRef;
    }
  };

  useEffect(() => {
    const handleMessageFromIframe = (event: MessageEvent) => {
      if (event.origin !== currentParentOrigin) {
        // This check is vital for security.
        // If iframe src can be absolute and different, this logic needs to be more robust
        // e.g. by parsing event.data.expectedOrigin if the iframe sends it.
        console.warn("Message received from unexpected origin:", event.origin, "Expected:", currentParentOrigin);
        return;
      }

      if (typeof event.data === "object" && event.data !== null && event.data.type) {
        const { type, data } = event.data;
        if (type === "elementClicked") {
          console.log("Element clicked in iframe (origin verified):", data);
          setSelectedElementForToolbar(data as SelectedElementData);
          if (onPreviewElementSelect && data.id) {
            onPreviewElementSelect(data.id);
          }
        }
      }
    };

    window.addEventListener("message", handleMessageFromIframe);
    return () => {
      window.removeEventListener("message", handleMessageFromIframe);
    };
  }, [onPreviewElementSelect, currentParentOrigin]);

  const injectScriptToIframe = (iframeElement: HTMLIFrameElement | null) => {
    if (!iframeElement?.contentWindow?.document) {
      console.error("[SitePreview] Cannot access iframe document or window for script injection");
      return;
    }
    const iframeDocument = iframeElement.contentWindow.document;

    const scriptId = "smart-track-editor-script";
    if (iframeDocument.getElementById(scriptId)) {
      return;
    }
    console.log("[SitePreview] Attempting to inject SmartTrack editor script...");

    const script = iframeDocument.createElement("script");
    script.id = scriptId;
    
    const escapedParentOrigin = JSON.stringify(currentParentOrigin);

    script.textContent = `
      console.log("[Iframe Script] Hello from injected script! Parent origin hint: " + ${escapedParentOrigin});

      document.addEventListener('DOMContentLoaded', function() {
        console.log("[Iframe Script] DOMContentLoaded fired.");
        document.body.addEventListener('click', function(e) {
          console.log("[Iframe Script] Body click detected.");
          var target = e.target;
          var editableElement = target.closest('[data-editable-id]') || target;
          var editableId = editableElement.getAttribute('data-editable-id') || editableElement.id;
          if (editableId) {
            console.log("[Iframe Script] Clicked editable element: " + editableId + ". Sending to parent with targetOrigin *.");
            window.parent.postMessage({
              type: "elementClicked",
              data: {
                id: editableId,
                name: editableElement.getAttribute('data-name') || editableElement.tagName,
                elementType: editableElement.tagName,
                styles: { width: window.getComputedStyle(editableElement).width },
                content: editableElement.innerText || editableElement.value || editableElement.src
              }
            }, "*");
          } else {
            console.log("[Iframe Script] Clicked non-editable element.");
          }
        }, true);

        window.addEventListener('message', function(event) {
          if (event.origin !== ${escapedParentOrigin}) {
             // console.warn("[Iframe Script] Message from unexpected origin: " + event.origin);
             // return;
          }
          if (event.data && event.data.type) {
            var type = event.data.type;
            var payload = event.data.payload;
            var elToModify;
            if (payload && payload.id) {
              elToModify = iframeDocument.querySelector('[data-editable-id="' + payload.id + '"]') || iframeDocument.getElementById(payload.id);
            }
            if (elToModify && payload) {
              console.log("[Iframe Script] Received command: " + type + " for element " + payload.id);
              if (type === 'updateElementStyle' && payload.property) {
                elToModify.style[payload.property] = payload.value;
              } else if (type === 'updateElementContent') {
                if (elToModify.tagName === 'IMG') elToModify.src = payload.content;
                else if (typeof elToModify.value !== 'undefined') elToModify.value = payload.content;
                else elToModify.innerText = payload.content;
              }
            }
          }
        });
        console.log("[Iframe Script] Event listeners attached.");
      });
    `;

    try {
      iframeDocument.body.appendChild(script);
      console.log("[SitePreview] SmartTrack editor script successfully appended to iframe body.");
    } catch (e) {
      console.error("[SitePreview] Error appending script to iframe body:", e, script.textContent);
    }
  };

  const handleIframeLoad = () => {
    console.log("iframe loaded, attempting to inject script.");
    const currentIframe = getActiveIframeRef().current;
    injectScriptToIframe(currentIframe);
  };

  useEffect(() => {
    const iframe = getActiveIframeRef().current;
    if (iframe && iframe.contentWindow) {
      // console.log("Active tab/reloadKey changed, checking iframe script for:", activeTab);
      injectScriptToIframe(iframe);
    }
  }, [activeTab, reloadKey, currentParentOrigin]);

  const handleRefresh = () => {
    setReloadKey(prev => prev + 1);
    setSelectedElementForToolbar(null);
  };
  
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCloseToolbar = () => {
    setSelectedElementForToolbar(null);
  };

  const handleSaveElementChanges = (elementData: SelectedElementData | null) => {
    if (!elementData) return;
    console.log("Saving element changes (to be implemented):", elementData);
    alert("Save functionality for element to be implemented. Check console.");
  };

  const handleCopyElementJSON = (elementData: SelectedElementData | null) => {
    if (!elementData) return;
    const jsonString = JSON.stringify(elementData, null, 2);
    navigator.clipboard.writeText(jsonString)
      .then(() => {
        alert("Element JSON copied!");
      })
      .catch(err => {
        console.error("Failed to copy JSON: ", err);
        alert("Failed to copy JSON. See console.");
      });
  };

  const handleUpdateElementStyleInPreview = (elementId: string, property: string, value: string | number) => {
    const activeIframe = getActiveIframeRef().current;
    if (activeIframe?.contentWindow) {
      // For messages to the iframe, the targetOrigin should be the iframe's own origin.
      // If iframe src is relative (e.g., "/"), it inherits the parent's origin.
      const iframeOrigin = activeIframe.src.startsWith('http') ? new URL(activeIframe.src).origin : currentParentOrigin;
      activeIframe.contentWindow.postMessage({
        type: "updateElementStyle",
        payload: { id: elementId, property, value }
      }, iframeOrigin);
    }
  };
  
  const handleUpdateElementContentInPreview = (elementId: string, newContent: string) => {
    const activeIframe = getActiveIframeRef().current;
    if (activeIframe?.contentWindow) {
      const iframeOrigin = activeIframe.src.startsWith('http') ? new URL(activeIframe.src).origin : currentParentOrigin;
      activeIframe.contentWindow.postMessage({
        type: "updateElementContent",
        payload: { id: elementId, content: newContent }
      }, iframeOrigin);
    }
  };

  const toolbarProps = selectedElementForToolbar ? {
    selectedElement: selectedElementForToolbar,
    onClose: handleCloseToolbar,
    onSaveElement: () => handleSaveElementChanges(selectedElementForToolbar),
    onCopyJson: () => handleCopyElementJSON(selectedElementForToolbar),
    onUpdateStyle: (property: string, value: string | number) => {
      if (selectedElementForToolbar?.id) {
        handleUpdateElementStyleInPreview(selectedElementForToolbar.id, property, value);
        setSelectedElementForToolbar(prev => {
          if (!prev) return null;
          const newStyles = { ...(prev.styles || {}), [property]: value };
          return { ...prev, styles: newStyles as React.CSSProperties };
        });
      }
    },
    onUpdateContent: (newContent: string) => {
      if (selectedElementForToolbar?.id) {
        handleUpdateElementContentInPreview(selectedElementForToolbar.id, newContent);
        setSelectedElementForToolbar(prev => prev ? { ...prev, content: newContent } : null);
      }
    },
  } : null;

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
      
      <Tabs defaultValue="desktop" className="w-full" onValueChange={setActiveTab}>
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
              ref={desktopIframeRef}
              key={`desktop-${reloadKey}`}
              src={url} 
              className="w-full h-full border-0" 
              title="Website Preview (Desktop)"
              onLoad={handleIframeLoad}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="tablet" className="m-0">
          <div className="aspect-[4/3] bg-white mx-auto max-w-[768px]">
            <iframe 
              ref={tabletIframeRef}
              key={`tablet-${reloadKey}`}
              src={url} 
              className="w-full h-full border-0" 
              title="Website Preview (Tablet)"
              onLoad={handleIframeLoad}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="mobile" className="m-0">
          <div className="aspect-[9/19] bg-white mx-auto max-w-[375px]">
            <iframe 
              ref={mobileIframeRef}
              key={`mobile-${reloadKey}`}
              src={url} 
              className="w-full h-full border-0" 
              title="Website Preview (Mobile)"
              onLoad={handleIframeLoad}
            />
          </div>
        </TabsContent>
      </Tabs>

      {toolbarProps && <FloatingToolbar {...toolbarProps} />}
    </div>
  );
};

export default SitePreview;
