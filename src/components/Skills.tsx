
import { useEffect, useRef, useState } from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 0-100
}

const skillCategories: SkillCategory[] = [
  {
    name: "Microsoft & Low-Code",
    skills: [
      { name: "Power Platform", level: 95 },
      { name: "Power Apps", level: 95 },
      { name: "Power Automate", level: 90 },
      { name: "SharePoint", level: 90 },
      { name: "Dataverse", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Canvas Apps", level: 95 },
      { name: "Model-Driven Apps", level: 90 },
      { name: "Office 365", level: 85 }
    ]
  },
  {
    name: "Frontend & UI",
    skills: [
      { name: "HTML(5)", level: 90 },
      { name: "CSS(3)", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "React", level: 75 },
      { name: "Adobe XD", level: 70 }
    ]
  },
  {
    name: "Backend & DB",
    skills: [
      { name: "PHP", level: 70 },
      { name: "SQL Server", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Postgres", level: 65 },
      { name: "MongoDB", level: 60 }
    ]
  },
  {
    name: "Others",
    skills: [
      { name: "SharePoint Framework", level: 85 },
      { name: "PacketTracer", level: 65 },
      { name: "Virtual Box", level: 70 },
      { name: "Wireshark", level: 60 },
      { name: "PowerShell", level: 80 }
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My expertise and technological proficiency"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-on-scroll" style={{ transitionDelay: `${categoryIndex * 100}ms` }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6 text-microsoft-blue">{category.name}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
