import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Download, MapPin, AlertCircle, FileText, Scale, Shield, Users } from "lucide-react";

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
                      variant="outline"
                      onClick={() => window.open(`tel:${helpline.number}`, '_self')}
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
                    <Button size="sm" variant="outline">
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
                <Button className="bg-gradient-accent hover:opacity-90">
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