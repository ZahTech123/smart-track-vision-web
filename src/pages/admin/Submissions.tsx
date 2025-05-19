
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

// Mock data
const mockSubmissions = [
  {
    id: 1,
    type: "Quote Request",
    name: "John Smith",
    email: "john@example.com",
    phone: "+675 7012 3456",
    message: "Looking for fleet tracking solutions for 10 vehicles",
    date: "2023-05-10T08:30:00",
    status: "New",
  },
  {
    id: 2,
    type: "Contact Form",
    name: "Sarah Williams",
    email: "sarah@company.com",
    phone: "+675 7098 7654",
    message: "Please send me more information about your tracking services",
    date: "2023-05-09T14:20:00",
    status: "Responded",
  },
  {
    id: 3,
    type: "Quote Request",
    name: "Michael Chen",
    email: "michael@business.org",
    phone: "+675 7023 4567",
    message: "Need tracking for delivery trucks across Port Moresby",
    date: "2023-05-08T11:15:00",
    status: "New",
  },
  {
    id: 4,
    type: "Contact Form",
    name: "Linda Johnson",
    email: "linda@mail.com",
    phone: "+675 7087 6543",
    message: "What's the installation process like?",
    date: "2023-05-07T09:45:00",
    status: "Responded",
  },
  {
    id: 5,
    type: "Quote Request",
    name: "Robert Brown",
    email: "robert@corp.com",
    phone: "+675 7045 6789",
    message: "Requesting quote for mining vehicle tracking",
    date: "2023-05-06T16:30:00",
    status: "New",
  },
];

const Submissions = () => {
  const [submissions, setSubmissions] = useState(mockSubmissions);
  const [activeTab, setActiveTab] = useState<"all" | "quotes" | "contacts">("all");
  
  const filteredSubmissions = submissions.filter(submission => {
    if (activeTab === "all") return true;
    if (activeTab === "quotes") return submission.type === "Quote Request";
    if (activeTab === "contacts") return submission.type === "Contact Form";
    return true;
  });
  
  const markAsResponded = (id: number) => {
    setSubmissions(
      submissions.map(submission => 
        submission.id === id 
          ? { ...submission, status: "Responded" } 
          : submission
      )
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Form Submissions</h1>
            <p className="text-muted-foreground">
              Manage quote requests and contact form submissions
            </p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant={activeTab === "all" ? "default" : "outline"} 
              onClick={() => setActiveTab("all")}
            >
              All
            </Button>
            <Button 
              variant={activeTab === "quotes" ? "default" : "outline"} 
              onClick={() => setActiveTab("quotes")}
            >
              Quote Requests
            </Button>
            <Button 
              variant={activeTab === "contacts" ? "default" : "outline"} 
              onClick={() => setActiveTab("contacts")}
            >
              Contact Forms
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-md shadow">
          <Table>
            <TableCaption>A list of recent form submissions from the website.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{submission.type}</TableCell>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.phone}</TableCell>
                  <TableCell>
                    {new Date(submission.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <span 
                      className={`px-2 py-1 text-xs rounded-full ${
                        submission.status === "New" 
                          ? "bg-smarttrack-red/10 text-smarttrack-red" 
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {submission.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => alert(`View message: ${submission.message}`)}
                      >
                        View
                      </Button>
                      {submission.status === "New" && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => markAsResponded(submission.id)}
                        >
                          Mark Responded
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Submissions;
