
import { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from './SectionTitle';

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const jobs: Job[] = [
  {
    title: "Software Developer Specialist",
    company: "Devscope",
    period: "Jan 2025 – Present",
    location: "Porto, Portugal",
    responsibilities: [
      "Development of apps with Power Platform",
      "Process automation with Power Automate",
      "Creation of SharePoint pages with SPFX",
      "Scripting with PowerShell for system integration",
      "Speaker at Microsoft's \"App in a Day\" event"
    ]
  },
  {
    title: "Software Developer",
    company: "Devscope",
    period: "Mar 2022 – Jan 2025",
    location: "Porto, Portugal",
    responsibilities: [
      "Development of web and mobile apps with Power Apps, Power Automate, SharePoint, and Dataverse",
      "Creation of custom components in SharePoint with frontend technologies",
      "Trainer in Microsoft's \"App in a Day\" workshops"
    ]
  },
  {
    title: "Internship",
    company: "Devscope",
    period: "2022",
    location: "Porto, Portugal",
    responsibilities: [
      "Low-code solution for recruitment and candidate selection",
      "Improvement of data access for HR teams"
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="My career journey and accomplishments"
        />
        
        <div className="space-y-8 mt-12">
          {jobs.map((job, index) => (
            <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <Card className="hover-lift border-l-4 border-l-microsoft-blue">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl text-gray-900 flex items-center gap-2">
                        <Briefcase size={24} className="text-microsoft-blue" />
                        {job.title} | <span className="text-microsoft-blue">{job.company}</span>
                      </CardTitle>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={18} className="mr-2" />
                      <span className="text-sm">{job.period} | {job.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
