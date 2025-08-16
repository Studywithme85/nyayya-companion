import { Header } from "@/components/Header";
import { ChatInterface } from "@/components/ChatInterface";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Scale, 
  MessageSquare, 
  FileText, 
  Search, 
  Shield, 
  Phone, 
  Download,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/legal-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Smart Legal Q&A",
      description: "Get instant answers about your rights, laws, and legal procedures from our AI assistant",
      link: "#chat"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Law Search Engine",
      description: "Search trusted legal sources including India Kanoon and government portals",
      link: "/toolkit"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Complaint Drafting",
      description: "Create and track legal complaints with our guided form system",
      link: "/complaint"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Emergency Helplines",
      description: "Access critical helpline numbers for police, women's safety, and legal aid",
      link: "/toolkit"
    }
  ];

  const benefits = [
    "Free legal guidance and information",
    "Multi-language support (English & Hindi)",
    "Complaint tracking system",
    "Document templates and forms",
    "24/7 AI legal assistant",
    "Trusted legal resources"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="bg-accent text-accent-foreground">
                  न्याय GPT - Justice for All
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Your Legal Rights,
                  <span className="text-accent"> Simplified</span>
                </h1>
              </div>
              
              <p className="text-xl opacity-90 max-w-md">
                Get instant legal guidance, file complaints, and access your rights with India's first AI-powered legal assistant.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-light text-accent-foreground"
                  onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Ask Legal Question
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link to="/toolkit">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency Help
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Legal justice scales and law books representing legal assistance" 
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface Section */}
      <section id="chat" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Ask Your Legal Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant guidance on rights, procedures, and legal processes. Our AI is trained on Indian laws and regulations.
            </p>
          </div>
          <ChatInterface />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Complete Legal Assistance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From legal Q&A to complaint filing, we provide comprehensive support for your legal needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-glow transition-shadow group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group-hover:bg-accent/10"
                  asChild={feature.link.startsWith('/')}
                  onClick={feature.link.startsWith('#') ? () => document.querySelector(feature.link)?.scrollIntoView({ behavior: 'smooth' }) : undefined}
                >
                  {feature.link.startsWith('/') ? (
                    <Link to={feature.link}>
                      Learn More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  ) : (
                    <>
                      Learn More <ArrowRight className="ml-1 h-3 w-3" />
                    </>
                  )}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose NyayyaGPT?</h2>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-6 bg-gradient-primary text-primary-foreground">
              <div className="text-center space-y-4">
                <Scale className="h-16 w-16 mx-auto opacity-80" />
                <h3 className="text-xl font-semibold">Justice Made Accessible</h3>
                <p className="opacity-90">
                  Breaking down legal barriers with technology. Get the legal help you need, when you need it.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <Button 
                    variant="secondary" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <Link to="/complaint">
                      <FileText className="mr-2 h-4 w-4" />
                      File Complaint
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    asChild
                  >
                    <Link to="/track">
                      <Search className="mr-2 h-4 w-4" />
                      Track Status  
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Legal Help?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Start your legal journey today. Ask questions, get guidance, and access your rights with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
              onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Chatting Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              asChild
            >
              <Link to="/toolkit">
                <Download className="mr-2 h-5 w-5" />
                Access Toolkit
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Scale className="h-6 w-6" />
              <span className="text-lg font-semibold">NyayyaGPT</span>
            </div>
            <p className="text-sm opacity-75 text-center md:text-right">
              © 2025 NyayyaGPT. For awareness purposes only. Not a substitute for professional legal advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
