
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock website content
const initialContent = {
  heroTitle: "Smart Fleet Management Made Simple",
  heroSubtitle: "Track your vehicles in real-time and optimize your business operations with our advanced GPS tracking solutions.",
  contactEmail: "info@terunapng.com",
  contactPhone1: "+675 72352442",
  contactPhone2: "+675 82445259",
  contactAddress: "Tamara Road, 6mile, Near Hide Away",
  contactPostal: "PO Box 619, Waterfront, Konedobu 125, NCD, PNG",
  facebook: "https://facebook.com/smarttrackpng",
  twitter: "https://twitter.com/smarttrackpng",
  linkedin: "https://linkedin.com/company/smarttrackpng",
  instagram: "https://instagram.com/smarttrackpng"
};

// Color themes
const colorThemes = [
  { name: "Red & Black (Default)", primary: "#cc0c25", secondary: "#1a1a1a" },
  { name: "Blue & Gray", primary: "#0066cc", secondary: "#333333" },
  { name: "Green & Dark", primary: "#2e8b57", secondary: "#222222" },
  { name: "Purple & Black", primary: "#6a0dad", secondary: "#101010" },
  { name: "Orange & Gray", primary: "#ff6600", secondary: "#444444" },
];

const Customize = () => {
  const [content, setContent] = useState({ ...initialContent });
  const [activeTheme, setActiveTheme] = useState(0);
  const [customPrimary, setCustomPrimary] = useState("#cc0c25");
  const [customSecondary, setCustomSecondary] = useState("#1a1a1a");
  
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContent(prev => ({ ...prev, [name]: value }));
  };
  
  const saveContentChanges = () => {
    // In a real app, this would save to a database or API
    toast.success("Content changes saved successfully!");
  };
  
  const applyTheme = () => {
    // In a real app, this would update CSS variables or theme configuration
    toast.success("Theme applied successfully!");
  };
  
  const uploadImage = () => {
    // Mock image upload
    toast.success("Banner image uploaded successfully!");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customize Website</h1>
          <p className="text-muted-foreground">
            Update website content, theme and contact information
          </p>
        </div>
        
        <Tabs defaultValue="content">
          <TabsList className="mb-6">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
            <TabsTrigger value="contact">Contact & Social</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>
                  Update the main headline and subtitle displayed on your homepage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="heroTitle" className="text-sm font-medium">Main Headline</label>
                  <Input
                    id="heroTitle"
                    name="heroTitle"
                    value={content.heroTitle}
                    onChange={handleContentChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="heroSubtitle" className="text-sm font-medium">Subtitle</label>
                  <Textarea
                    id="heroSubtitle"
                    name="heroSubtitle"
                    value={content.heroSubtitle}
                    onChange={handleContentChange}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Banner Image</CardTitle>
                <CardDescription>
                  Upload a new hero banner image (recommended size: 1920x1080px)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input id="banner-image" type="file" accept="image/*" />
                  <Button onClick={uploadImage}>Upload Image</Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end">
              <Button onClick={saveContentChanges}>Save Changes</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="theme" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Color Theme</CardTitle>
                <CardDescription>
                  Choose from predefined themes or create your own
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {colorThemes.map((theme, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-md cursor-pointer transition-all ${
                        activeTheme === index ? "ring-2 ring-offset-2 ring-smarttrack-red" : ""
                      }`}
                      onClick={() => setActiveTheme(index)}
                    >
                      <div className="flex gap-2 mb-2">
                        <div 
                          style={{ backgroundColor: theme.primary }} 
                          className="w-8 h-8 rounded"
                        ></div>
                        <div 
                          style={{ backgroundColor: theme.secondary }} 
                          className="w-8 h-8 rounded"
                        ></div>
                      </div>
                      <p className="text-sm font-medium">{theme.name}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Custom Colors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="primaryColor" className="text-sm font-medium">Primary Color (Red)</label>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded border" 
                          style={{ backgroundColor: customPrimary }}
                        ></div>
                        <Input
                          id="primaryColor"
                          type="text"
                          value={customPrimary}
                          onChange={(e) => setCustomPrimary(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="secondaryColor" className="text-sm font-medium">Secondary Color (Black)</label>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded border" 
                          style={{ backgroundColor: customSecondary }}
                        ></div>
                        <Input
                          id="secondaryColor"
                          type="text"
                          value={customSecondary}
                          onChange={(e) => setCustomSecondary(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={applyTheme}>Apply Theme</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Update your business contact details displayed on the website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="contactEmail" className="text-sm font-medium">Email Address</label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    value={content.contactEmail}
                    onChange={handleContentChange}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="contactPhone1" className="text-sm font-medium">Phone 1</label>
                    <Input
                      id="contactPhone1"
                      name="contactPhone1"
                      value={content.contactPhone1}
                      onChange={handleContentChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contactPhone2" className="text-sm font-medium">Phone 2</label>
                    <Input
                      id="contactPhone2"
                      name="contactPhone2"
                      value={content.contactPhone2}
                      onChange={handleContentChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contactAddress" className="text-sm font-medium">Physical Address</label>
                  <Input
                    id="contactAddress"
                    name="contactAddress"
                    value={content.contactAddress}
                    onChange={handleContentChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contactPostal" className="text-sm font-medium">Postal Address</label>
                  <Input
                    id="contactPostal"
                    name="contactPostal"
                    value={content.contactPostal}
                    onChange={handleContentChange}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Social Media Links</CardTitle>
                <CardDescription>
                  Update your social media profile URLs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="facebook" className="text-sm font-medium">Facebook</label>
                    <Input
                      id="facebook"
                      name="facebook"
                      value={content.facebook}
                      onChange={handleContentChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="twitter" className="text-sm font-medium">Twitter</label>
                    <Input
                      id="twitter"
                      name="twitter"
                      value={content.twitter}
                      onChange={handleContentChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn</label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      value={content.linkedin}
                      onChange={handleContentChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="instagram" className="text-sm font-medium">Instagram</label>
                    <Input
                      id="instagram"
                      name="instagram"
                      value={content.instagram}
                      onChange={handleContentChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end">
              <Button onClick={saveContentChanges}>Save Changes</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Customize;
