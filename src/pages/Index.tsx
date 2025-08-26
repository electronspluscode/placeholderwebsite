import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/1c182099-f5d5-4800-90d2-8b45491a518d.png')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="text-center max-w-2xl mx-auto">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Nathaniel Nichol
          </h1>
          
          {/* Coming Soon Text */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light tracking-wide">
            More Information Coming Soon
          </p>
          
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/nathanielnichol/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 group">
              <span>Connect on LinkedIn</span>
              <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
      
      {/* Subtle decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-12 bg-white/30 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default Index;