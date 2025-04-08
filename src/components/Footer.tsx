
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Gonçalo Branco</h3>
            <p className="text-gray-400 mt-1">Software Developer Specialist</p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400">
              &copy; {currentYear} Made with <Heart size={16} className="inline text-red-500 mx-1" /> All rights reserved
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Specialist in Microsoft technologies and low-code solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
