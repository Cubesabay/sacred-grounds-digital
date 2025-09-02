import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Home, Calendar, BookOpen, Users, Heart } from 'lucide-react';
import dharmaWheel from '@/assets/dharma-wheel.jpg';

interface MobileNavDrawerProps {
  language: 'km' | 'en';
  setLanguage: (lang: 'km' | 'en') => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({ 
  language, 
  setLanguage, 
  isOpen, 
  setIsOpen 
}) => {
  const content = {
    km: {
      menu: 'ម៉ឺនុយ',
      home: 'ទំព័រដើម',
      about: 'អំពីវត្ត',
      events: 'ព្រឹត្តិការណ៍',
      dharma: 'ព្រះធម៌',
      contact: 'ទំនាក់ទំនង',
      donate: 'បរិច្ចាគ',
      close: 'បិទ'
    },
    en: {
      menu: 'Menu',
      home: 'Home',
      about: 'About Temple',
      events: 'Events',
      dharma: 'Dharma',
      contact: 'Contact',
      donate: 'Donate',
      close: 'Close'
    }
  };

  const t = content[language];

  const navItems = [
    { key: 'home', label: t.home, href: '/', icon: Home },
    { key: 'about', label: t.about, href: '/#about', icon: BookOpen },
    { key: 'events', label: t.events, href: '/#events', icon: Calendar },
    { key: 'dharma', label: t.dharma, href: '/#dharma', icon: Users },
    { key: 'contact', label: t.contact, href: '/#contact', icon: Heart },
    { key: 'donate', label: t.donate, href: '/#donate', icon: Heart }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setIsOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="md:hidden"
          aria-label={t.menu}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
        >
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        side="left" 
        className="w-80 bg-background border-border"
        id="mobile-nav-menu"
        aria-label="Main navigation"
        onKeyDown={handleKeyDown}
      >
        <SheetHeader className="border-b border-border pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <img 
              src={dharmaWheel} 
              alt="Dharma Wheel" 
              className="w-8 h-8 rounded-full" 
            />
            <SheetTitle className="text-primary">
              {language === 'km' ? 'វត្តសិរីមង្គល' : 'Wat Siri Mongkol'}
            </SheetTitle>
          </div>
        </SheetHeader>

        <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              onClick={handleLinkClick}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors text-foreground hover:text-primary"
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Language Toggle */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="border-t border-border pt-4">
            <p className="text-sm text-muted-foreground mb-3">
              {language === 'km' ? 'ភាសា' : 'Language'}
            </p>
            <div className="flex space-x-2">
              <Button
                variant={language === 'km' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('km')}
                className="flex-1"
                aria-pressed={language === 'km'}
              >
                ខ្មែរ
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="flex-1"
                aria-pressed={language === 'en'}
              >
                EN
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavDrawer;