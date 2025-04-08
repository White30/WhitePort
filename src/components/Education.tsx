
import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from './SectionTitle';

interface Education {
  degree: string;
  institution: string;
  period: string;
  location?: string;
}

const educationList: Education[] = [
  {
    degree: "Master's Degree in Computer Engineering - Information and Knowledge Technologies",
    institution: "ISEP – Instituto Superior de Engenharia do Porto",
    period: "Sep 2023 – Present"
  },
  {
    degree: "Bachelor's Degree in Computer Engineering",
    institution: "Escola Superior de Tecnologia e Gestão de Viseu",
    period: "Sep 2019 – Sep 2022"
  },
  {
    degree: "High School Diploma in Science and Technology",
    institution: "Colégio de Albergaria",
    period: "2004 – 2019"
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and qualifications"
        />
        
        <div className="space-y-6 mt-12">
          {educationList.map((edu, index) => (
            <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <Card className="hover-lift border-l-4 border-l-microsoft-lightblue">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <CardTitle className="text-xl md:text-2xl text-gray-900 flex items-center gap-2">
                      <GraduationCap size={24} className="text-microsoft-blue" />
                      <div>
                        <div>{edu.degree}</div>
                        <div className="text-base font-normal text-microsoft-blue mt-1">{edu.institution}</div>
                      </div>
                    </CardTitle>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={18} className="mr-2" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.location && <p className="text-gray-600">{edu.location}</p>}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
