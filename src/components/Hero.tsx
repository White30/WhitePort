
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100 z-0"></div>
      
      {/* Abstract shapes for background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-microsoft-blue/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-microsoft-lightblue/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <Avatar className="w-48 h-48 border-4 border-white shadow-lg">
              <AvatarImage 
                src="/lovable-uploads/3529c970-5410-42c5-a7be-35730c930278.png" 
                alt="Gonçalo Branco" 
                className="object-cover object-top"
              />
              <AvatarFallback className="bg-microsoft-blue text-white text-xl">GB</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Gonçalo Branco
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-microsoft-blue mb-6">
            Software Developer Specialist
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experienced Software Developer with expertise in Microsoft technologies, 
            Power Platform, and SharePoint. Specialized in creating web and mobile 
            applications with low-code solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-microsoft-blue hover:bg-microsoft-blue/90 text-white">
              <a href="#experience">View Experience</a>
            </Button>
            <Button variant="outline" className="border-microsoft-blue text-microsoft-blue hover:bg-microsoft-blue/10">
              <a href="/resume.pdf" download="Goncalo_Branco_Resume.pdf" className="flex items-center gap-2">
                <Download size={18} /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

