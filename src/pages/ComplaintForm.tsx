import { useState } from "react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, Send, User, MapPin, Calendar } from "lucide-react";

interface ComplaintData {
  name: string;
  email: string;
  phone: string;
  address: string;
  complaintType: string;
  subject: string;
  description: string;
  dateOfIncident: string;
  location: string;
}

export default function ComplaintForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ComplaintData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    complaintType: '',
    subject: '',
    description: '',
    dateOfIncident: '',
    location: '',
  });

  const complaintTypes = [
    "Sexual Harassment (POSH)",
    "Workplace Discrimination", 
    "Consumer Complaint",
    "Cyber Crime",
    "Domestic Violence",
    "Property Dispute",
    "Police Misconduct",
    "Corruption",
    "Other"
  ];

  const handleInputChange = (field: keyof ComplaintData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateComplaintId = () => {
    const year = new Date().getFullYear();
    const randomNum = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    return `CMP-${year}-${randomNum}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const complaintId = generateComplaintId();
      
      // In real implementation, save to database here
      localStorage.setItem(`complaint-${complaintId}`, JSON.stringify({
        ...formData,
        id: complaintId,
        status: 'Draft',
        submittedAt: new Date().toISOString(),
      }));

      toast({
        title: "Complaint Draft Created Successfully!",
        description: `Your complaint ID is: ${complaintId}. Save this ID to track your complaint.`,
      });

      // Reset form
      setFormData({
        name: '', email: '', phone: '', address: '', complaintType: '',
        subject: '', description: '', dateOfIncident: '', location: '',
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit complaint. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">File a Legal Complaint</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create a complaint draft that you can download and submit to relevant authorities
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 shadow-elegant">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-semibold text-primary">Complaint Information</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="complaintType">Complaint Type *</Label>
                <Select value={formData.complaintType} onValueChange={(value) => handleInputChange('complaintType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select complaint type" />
                  </SelectTrigger>
                  <SelectContent>
                    {complaintTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter your complete address"
                  className="pl-9 min-h-[80px]"
                  required
                />
              </div>
            </div>

            {/* Complaint Details */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Complaint Details</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="dateOfIncident">Date of Incident *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="dateOfIncident"
                      type="date"
                      value={formData.dateOfIncident}
                      onChange={(e) => handleInputChange('dateOfIncident', e.target.value)}
                      className="pl-9"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location of Incident *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Where did the incident occur?"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <Label htmlFor="subject">Subject/Title *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Brief title of your complaint"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Provide detailed information about the incident, including what happened, when, where, and any witnesses or evidence..."
                  className="min-h-[120px]"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-accent hover:opacity-90 min-w-[150px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Create Complaint
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>

        <Card className="max-w-4xl mx-auto mt-8 p-4 bg-muted/50">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This system creates a complaint draft that you can download and submit to the relevant authorities. 
            Keep your complaint ID safe for tracking purposes. For urgent matters, contact the appropriate helplines directly.
          </p>
        </Card>
      </main>
    </div>
  );
}