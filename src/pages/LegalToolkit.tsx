import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Download, MapPin, AlertCircle, FileText, Scale, Shield, Users } from "lucide-react";

// Helper function to generate template content
const generateTemplate = (templateName: string): string => {
  const templates = {
    "FIR Draft Template": `FIR DRAFT TEMPLATE
================

TO: The Officer-in-Charge
Police Station: ___________________
Date: ${new Date().toLocaleDateString()}

Subject: First Information Report under Section _____ of IPC

Sir/Madam,

I, ______________________ (Name), son/daughter of ______________________, 
aged _____ years, residing at _________________________________, 
hereby lodge this complaint regarding the following incident:

Date of Incident: _______________
Time: _______________
Place of Incident: _________________________________

Details of the Incident:
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

Witness Details (if any):
1. Name: _________________ Contact: _________________
2. Name: _________________ Contact: _________________

I request you to register this FIR and take necessary legal action.

Yours faithfully,
____________________
(Signature of Complainant)
Contact: _______________`,

    "RTI Application": `RTI APPLICATION TEMPLATE
====================

To: The Public Information Officer
______________________ (Department/Office)
Date: ${new Date().toLocaleDateString()}

Subject: Application under Right to Information Act, 2005

Sir/Madam,

Under the Right to Information Act, 2005, I request the following information:

1. _________________________________________________________________
2. _________________________________________________________________
3. _________________________________________________________________

I am a citizen of India and the information is required for personal use.

I am willing to pay the prescribed fee. Please provide the information within 30 days as mandated under the RTI Act.

In case the information is not available with you, please transfer this application to the concerned department under Section 6(3) of the RTI Act.

Yours faithfully,
____________________
Name: _______________
Address: _________________________________
Mobile: _______________
Email: _______________

Fee Paid: Rs. 10/-`,

    "POSH Complaint": `POSH COMPLAINT TEMPLATE
=====================

To: The Internal Complaints Committee (ICC)
______________________ (Organization Name)
Date: ${new Date().toLocaleDateString()}

Subject: Complaint of Sexual Harassment under POSH Act 2013

Madam/Sir,

I, ______________________ (Name), working as ______________________ 
in ______________________ department, hereby file this complaint of sexual harassment 
against ______________________ (Name of accused) working as ______________________.

Details of the Incident(s):
Date(s): _______________
Place: _______________
Time: _______________

Detailed Description of Incident:
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

Witnesses (if any):
1. ______________________ (Name and Designation)
2. ______________________ (Name and Designation)

Evidence/Supporting Documents: (Attach if available)
- _______________
- _______________

Relief Sought:
_________________________________________________________________

I request the ICC to take immediate action as per the POSH Act 2013.

Yours sincerely,
____________________
(Signature of Complainant)
Employee ID: _______________
Contact: _______________`,

    "Consumer Complaint": `CONSUMER COMPLAINT TEMPLATE
=========================

To: The President
Consumer Disputes Redressal Forum
______________________ (Location)
Date: ${new Date().toLocaleDateString()}

Subject: Consumer Complaint against ______________________ (Company Name)

Sir/Madam,

COMPLAINT UNDER CONSUMER PROTECTION ACT

1. Name and Address of Complainant:
   Name: ______________________
   Address: ___________________________________
   Mobile: _______________

2. Name and Address of Opposite Party:
   ______________________
   ______________________

3. Facts of the Case:
   Date of Purchase: _______________
   Product/Service: _______________
   Bill/Receipt No.: _______________
   Amount Paid: Rs. _______________

4. Details of Complaint:
   _________________________________________________________________
   _________________________________________________________________

5. Relief Sought:
   - Refund of Rs. _______________
   - Compensation of Rs. _______________
   - Other: _______________

6. Documents Enclosed:
   - Purchase receipt
   - Warranty card
   - Correspondence with company

I request the honorable forum to provide justice as per Consumer Protection Act.

Yours faithfully,
______________________
(Signature of Complainant)`,

    "Legal Notice": `LEGAL NOTICE TEMPLATE
==================

LEGAL NOTICE

TO: ______________________ (Name)
Address: _________________________________

TAKE NOTICE that my client ______________________ (Client Name) has 
instructed me to address you as follows:

1. My client states that _________________________________
   _________________________________________________________________
   _________________________________________________________________

2. Despite several requests and reminders, you have failed to 
   _________________________________________________________________

3. Your acts/omissions have caused loss and damages to my client 
   amounting to Rs. _______________

4. My client calls upon you to _________________________________ 
   within 15 days from the receipt of this notice, failing which 
   my client shall be constrained to take appropriate legal action 
   against you including recovery of damages, costs and interest.

5. This notice is issued without prejudice to any other rights and 
   remedies available to my client in law or equity.

Date: ${new Date().toLocaleDateString()}

____________________
Advocate for the Notice Sender
Bar Council Registration No.: _______________`
  };

  return templates[templateName as keyof typeof templates] || `${templateName} Template\n\nThis is a placeholder template for ${templateName}. Please consult with a legal professional for the appropriate format.`;
};

export default function LegalToolkit() {
  const helplines = [
    { name: "Emergency Police", number: "100", available: "24/7", type: "emergency" },
    { name: "Women's Helpline", number: "1091", available: "24/7", type: "women" },
    { name: "National Commission for Women", number: "181", available: "24/7", type: "women" },
    { name: "Child Helpline", number: "1098", available: "24/7", type: "child" },
    { name: "Cyber Crime", number: "1930", available: "24/7", type: "cyber" },
    { name: "Senior Citizens Helpline", number: "14567", available: "24/7", type: "senior" },
    { name: "Legal Aid", number: "15100", available: "9 AM - 6 PM", type: "legal" },
  ];

  const templates = [
    {
      name: "FIR Draft Template",
      description: "Template for filing First Information Report",
      icon: <AlertCircle className="h-5 w-5" />,
      category: "Police"
    },
    {
      name: "RTI Application",
      description: "Right to Information application format",
      icon: <FileText className="h-5 w-5" />,
      category: "Government"
    },
    {
      name: "POSH Complaint",
      description: "Workplace harassment complaint template",
      icon: <Shield className="h-5 w-5" />,
      category: "Workplace"
    },
    {
      name: "Consumer Complaint",
      description: "Consumer court complaint format",
      icon: <Users className="h-5 w-5" />,
      category: "Consumer"
    },
    {
      name: "Legal Notice",
      description: "General legal notice template",
      icon: <Scale className="h-5 w-5" />,
      category: "Legal"
    },
  ];

  const getHelplineColor = (type: string) => {
    switch (type) {
      case 'emergency': return 'bg-destructive text-destructive-foreground';
      case 'women': return 'bg-accent text-accent-foreground';
      case 'child': return 'bg-success-green text-white';
      case 'cyber': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Legal Awareness Toolkit</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential resources, helpline numbers, and complaint templates to help you navigate legal processes
          </p>
        </div>

        <div className="grid gap-8">
          {/* Emergency Helplines */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Phone className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold text-primary">Emergency Helplines</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {helplines.map((helpline) => (
                <Card key={helpline.number} className="p-4 hover:shadow-glow transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary">{helpline.name}</h3>
                      <p className="text-sm text-muted-foreground">{helpline.available}</p>
                    </div>
                    <Badge className={getHelplineColor(helpline.type)}>
                      {helpline.type}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{helpline.number}</span>
                    <Button
                      size="sm"
                      variant="default"
                      className="bg-accent hover:bg-accent-light text-accent-foreground"
                      onClick={() => {
                        // For mobile devices, use tel: protocol
                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                          window.location.href = `tel:${helpline.number}`;
                        } else {
                          // For desktop, copy number and show notification
                          navigator.clipboard.writeText(helpline.number);
                          // You could add a toast notification here
                          alert(`Number ${helpline.number} copied to clipboard!`);
                        }
                      }}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Document Templates */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold text-primary">Legal Document Templates</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {templates.map((template) => (
                <Card key={template.name} className="p-4 hover:shadow-glow transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {template.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{template.category}</Badge>
                    <Button 
                      size="sm" 
                      variant="default"
                      className="bg-primary hover:bg-primary-light text-primary-foreground"
                      onClick={() => {
                        // Generate a sample template content
                        const templateContent = generateTemplate(template.name);
                        const blob = new Blob([templateContent], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `${template.name.toLowerCase().replace(/\s+/g, '-')}-template.txt`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                      }}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Legal Aid Centers */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold text-primary">Find Legal Aid Centers</h2>
            </div>
            
            <Card className="p-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Locate Nearby Legal Aid</h3>
                <p className="text-muted-foreground mb-6">
                  Find free legal aid centers, courts, and legal assistance programs in your area
                </p>
                <Button 
                  className="bg-gradient-accent hover:opacity-90"
                  onClick={() => {
                    // Get user's location and show nearby legal aid centers
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(
                        (position) => {
                          const { latitude, longitude } = position.coords;
                          // Open Google Maps with legal aid centers search
                          const query = `legal aid centers near me`;
                          const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}/@${latitude},${longitude},15z`;
                          window.open(mapsUrl, '_blank');
                        },
                        (error) => {
                          // Fallback to general search
                          const mapsUrl = `https://www.google.com/maps/search/legal+aid+centers`;
                          window.open(mapsUrl, '_blank');
                        }
                      );
                    } else {
                      // Geolocation not supported, open general search
                      const mapsUrl = `https://www.google.com/maps/search/legal+aid+centers`;
                      window.open(mapsUrl, '_blank');
                    }
                  }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Centers Near Me
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}