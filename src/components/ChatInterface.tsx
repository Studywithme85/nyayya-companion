import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'नमस्ते! Welcome to NyayyaGPT. I can help you with legal questions, rights information, and guide you through various legal procedures. What would you like to know today?',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(input.trim()),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('harassment') || input.includes('posh')) {
      return `Under the Prevention of Sexual Harassment (POSH) Act 2013, you have the right to:
      
• File a complaint with the Internal Committee (IC) within 3 months
• Seek interim relief during inquiry
• Maintain confidentiality throughout the process
• Get legal assistance if needed

Would you like me to help you draft a complaint or provide contact details for legal aid?`;
    }
    
    if (input.includes('fir') || input.includes('police')) {
      return `To file an FIR (First Information Report):

• Visit the nearest police station or use online portal
• Any cognizable offense can be reported
• Police cannot refuse to register FIR for cognizable offenses
• You have the right to get a copy of the FIR

Important numbers:
Police Emergency: 100
Women's Helpline: 1091
National Helpline: 181

Need help drafting a complaint?`;
    }
    
    if (input.includes('rti') || input.includes('information')) {
      return `Right to Information (RTI) Act 2005:

• Any citizen can seek information from public authorities
• Application fee: ₹10 (varies by state)
• Response within 30 days (48 hours for life/liberty matters)
• Appeal process available if denied

I can help you draft an RTI application. What information are you seeking?`;
    }
    
    return `I understand you're asking about "${userInput}". While I can provide general legal information, for specific cases, I recommend consulting with a qualified lawyer.

Here are some quick actions you can take:
• Check our Legal Toolkit for helpline numbers
• File a complaint draft through our system
• Search for specific laws and procedures

How else can I assist you today?`;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto h-[600px] flex flex-col shadow-elegant">
      <div className="flex items-center gap-3 p-4 bg-gradient-primary text-primary-foreground rounded-t-lg">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
          <MessageSquare className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold">NyayyaGPT Legal Assistant</h3>
          <p className="text-sm opacity-90">Ask me about your legal rights and procedures</p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.type === 'bot' && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-4 w-4" />
                </div>
              )}
              
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                  message.type === 'user'
                    ? 'bg-accent text-accent-foreground ml-auto'
                    : 'bg-muted'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs opacity-60 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>

              {message.type === 'user' && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-muted rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your legal rights, procedures, or any legal question..."
          className="flex-1"
          disabled={isTyping}
        />
        <Button 
          type="submit" 
          disabled={!input.trim() || isTyping}
          className="bg-gradient-accent hover:opacity-90"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  );
};