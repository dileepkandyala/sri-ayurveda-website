import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Leaf className="h-10 w-10 text-green-700" />
            <div>
              <h1 className="text-xl font-bold text-green-900">SRI AYURVEDA CLINIC</h1>
              <p className="text-xs text-green-700">& PANCHAKARMA CENTER</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-700 font-medium transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-700 font-medium transition">
              About
            </button>
            <button onClick={() => scrollToSection('panchakarma')} className="text-gray-700 hover:text-green-700 font-medium transition">
              Panchakarma
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-700 font-medium transition">
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-green-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('panchakarma')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md"
            >
              Panchakarma
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
