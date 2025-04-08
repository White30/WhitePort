
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact Information" 
          subtitle="Let's connect and discuss opportunities"
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-microsoft-blue p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  <p className="mb-6">
                    Feel free to reach out for collaborations, opportunities, or just to say hello!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm opacity-75">Location</p>
                        <p className="font-medium">Aveiro, Portugal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm opacity-75">Email</p>
                        <a href="mailto:brancopt2001@gmail.com" className="font-medium hover:underline">
                          brancopt2001@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm opacity-75">Phone</p>
                        <a href="tel:+351915046448" className="font-medium hover:underline">
                          +351 915 046 448
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Linkedin size={20} />
                      </div>
                      <div>
                        <p className="text-sm opacity-75">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/goncalo-branco-b93a14152" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium hover:underline"
                        >
                          goncalo-branco-b93a14152
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-microsoft-blue/50"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-microsoft-blue/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-microsoft-blue/50"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-microsoft-blue hover:bg-microsoft-blue/90">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
