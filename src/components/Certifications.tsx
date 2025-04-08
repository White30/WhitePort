
import { Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from './SectionTitle';
import { Badge } from '@/components/ui/badge';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "PL-100: Microsoft Certified: Power Platform App Maker Associate",
    issuer: "Microsoft",
    date: "2021",
    description: "Power Platform App Maker Associate"
  },
  {
    title: "Microsoft Applied Skills: Create and manage model-driven apps with Power Apps and Dataverse",
    issuer: "Microsoft",
    date: "2024",
    description: "Certification for creating and managing model-driven apps with Power Apps and Dataverse"
  },
  {
    title: "Microsoft Applied Skills: Create and manage canvas apps with Power Apps",
    issuer: "Microsoft",
    date: "2024",
    description: "Certification for creating and managing canvas apps with Power Apps"
  },
  {
    title: "Microsoft Applied Skills: Implement AI models with Microsoft Power Platform AI Builder",
    issuer: "Microsoft",
    date: "2024",
    description: "Certification for implementing AI models with Power Platform AI Builder"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Certifications" 
          subtitle="My professional certifications and achievements"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <Card className="hover-lift h-full border-t-4 border-t-microsoft-blue hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3">
                    <Award size={24} className="text-microsoft-blue mt-1" />
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">{cert.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className="bg-microsoft-blue/10 text-microsoft-blue border-microsoft-blue/30">
                          {cert.issuer}
                        </Badge>
                        <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
                          <Calendar size={14} className="mr-1" />
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
