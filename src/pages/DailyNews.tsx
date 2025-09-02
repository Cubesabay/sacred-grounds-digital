import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Search, 
  ChevronRight, 
  BookOpen,
  Users,
  Heart,
  ArrowLeft 
} from 'lucide-react';
import dharmaWheel from '@/assets/dharma-wheel.jpg';
import NewsCard from '@/components/NewsCard';
import MobileNavDrawer from '@/components/MobileNavDrawer';

const DailyNews = () => {
  const [language, setLanguage] = useState<'km' | 'en'>('km');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const content = {
    km: {
      title: 'ព័ត៌មានប្រចាំថ្ងៃ',
      subtitle: 'ព័ត៌មាន និងសកម្មភាពចុងក្រោយនៃវត្តសិរីមង្គល',
      backToHome: 'ត្រលប់ទៅទំព័រដើម',
      searchPlaceholder: 'ស្វែងរកព័ត៌មាន...',
      categories: {
        all: 'ទាំងអស់',
        events: 'ព្រឹត្តិការណ៍',
        community: 'សកម្មភាពសហគមន៍',
        teachings: 'ការបង្រៀន'
      },
      readMore: 'អានបន្ថែម',
      archive: 'ប័ណ្ណសារ',
      noResults: 'រកមិនឃើញលទ្ធផល'
    },
    en: {
      title: 'Daily News',
      subtitle: 'Latest news and activities from Wat Siri Mongkol',
      backToHome: 'Back to Home',
      searchPlaceholder: 'Search news...',
      categories: {
        all: 'All',
        events: 'Events',
        community: 'Community Activities', 
        teachings: 'Teachings'
      },
      readMore: 'Read More',
      archive: 'Archive',
      noResults: 'No results found'
    }
  };

  const t = content[language];

  // Sample news data with improved structure
  const newsData = [
    {
      slug: "vesak-day-2024",
      titleKh: "បុណ្យវេសាខបូជាឆ្នាំ ២០២៤",
      titleEn: "Vesak Day Celebration 2024",
      dateISO: "2024-05-22",
      category: "Events",
      image: dharmaWheel,
      excerptKh: "ការប្រារព្ធបុណ្យវេសាខបូជាដ៏អស្ចារ្យ ជាមួយការចូលរួមពីសហគមន៍ និងការបង្រៀនព្រះធម៌",
      excerptEn: "A wonderful Vesak Day celebration with community participation and dharma teachings",
      featured: true
    },
    {
      slug: "visakha-bucha-morning-ceremony",
      titleKh: "ពិធីសូត្រធម៌ព្រឹកបុណ្យវិសាខបូជា",
      titleEn: "Visakha Bucha Morning Ceremony",
      dateISO: "2025-05-12",
      category: "Events",
      image: dharmaWheel,
      excerptKh: "ពិធីសូត្រធម៌ និងអធិស្ឋាននៅវិហារ ក្នុងបរិយាកាសស្ងប់ស្ងាត់។",
      excerptEn: "Morning chanting and meditation in the vihara with serene ambiance."
    },
    {
      slug: "community-cleanup-aug-2025",
      titleKh: "សកម្មភាពសម្អាតជុំវិញវិហារ",
      titleEn: "Community Cleanup Around the Vihara",
      dateISO: "2025-08-20",
      category: "Community",
      image: dharmaWheel,
      excerptKh: "ពុទ្ធបរិស័ទចូលរួមសម្អាតប្រកបដោយសុភមង្គល។",
      excerptEn: "Lay community joined a joyful temple grounds cleanup."
    },
    {
      slug: "dharma-talk-loving-kindness",
      titleKh: "ធម៌បកស្រាយ៖ មេត្តាករុណា",
      titleEn: "Dharma Talk: Loving-Kindness",
      dateISO: "2025-09-01",
      category: "Teachings",
      image: dharmaWheel,
      excerptKh: "សិក្សាអំពីមេត្តា និងការអនុវត្តក្នុងជីវិតប្រចាំថ្ងៃ។",
      excerptEn: "Understanding mettā and practical daily application."
    },
    {
      slug: "firewood-distribution",
      titleKh: "កម្មវិធីកាត់បំបែកដើមឈើសម្រាប់ជនក្រីក្រ",
      titleEn: "Firewood Distribution Program for the Needy",
      dateISO: "2024-05-15",
      category: "Community",
      image: dharmaWheel,
      excerptKh: "វត្តសិរីមង្គលបានរៀបចំកម្មវិធីចែកដំណាក់ដើមឈើដល់គ្រួសារក្រីក្រក្នុងតំបន់",
      excerptEn: "Wat Siri Mongkol organized a firewood distribution program for poor families in the area"
    },
    {
      slug: "youth-meditation-training",
      titleKh: "វគ្គបង្រៀនសមាធិសម្រាប់យុវជន",
      titleEn: "Youth Meditation Training Program",
      dateISO: "2024-05-08",
      category: "Teachings",
      image: dharmaWheel,
      excerptKh: "ការបើកវគ្គបង្រៀនសមាធិថ្មីសម្រាប់យុវជន រៀងរាល់ថ្ងៃសៅរ៍",
      excerptEn: "New meditation training program for youth, every Saturday"
    }
  ];

  const categories = ['all', 'Events', 'Community', 'Teachings'];

  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = searchTerm === '' || 
      news.titleKh.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerptKh.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerptEn.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'events': return Calendar;
      case 'community': return Users;
      case 'teachings': return BookOpen;
      default: return Heart;
    }
  };

  const getCategoryLabel = (category: string) => {
    if (category === 'all') return t.categories.all;
    switch (category.toLowerCase()) {
      case 'events': return t.categories.events;
      case 'community': return t.categories.community;
      case 'teachings': return t.categories.teachings;
      default: return category;
    }
  };

  // Group news by month for archive
  const archiveData = newsData.reduce((acc, news) => {
    const date = new Date(news.dateISO);
    const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const monthName = date.toLocaleDateString(language === 'km' ? 'km-KH' : 'en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
    
    if (!acc[monthYear]) {
      acc[monthYear] = { name: monthName, count: 0 };
    }
    acc[monthYear].count++;
    return acc;
  }, {} as Record<string, { name: string; count: number }>);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={t.backToHome}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{t.backToHome}</span>
            </Link>
            
            {/* Mobile Navigation */}
            <MobileNavDrawer 
              language={language}
              setLanguage={setLanguage}
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <img src={dharmaWheel} alt="Dharma Wheel" className="w-8 h-8 rounded-full" />
            <h1 className="text-xl font-bold text-primary">{t.title}</h1>
          </div>
          
          {/* Desktop Language Toggle */}
          <div className="hidden md:flex space-x-2">
            <Button
              variant={language === 'km' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('km')}
              aria-pressed={language === 'km'}
            >
              ខ្មែរ
            </Button>
            <Button
              variant={language === 'en' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-sunset" role="banner">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <img src={dharmaWheel} alt="Dharma Wheel" className="w-16 h-16 mx-auto mb-4 rounded-full shadow-sacred" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              {t.title}
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground">
              Daily News
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            {t.subtitle}
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-8 space-y-4" role="search" aria-label="News search and filters">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" aria-hidden="true" />
                <Input
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  aria-label={t.searchPlaceholder}
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2" role="group" aria-label="Category filters">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="gap-2"
                    aria-pressed={selectedCategory === category}
                    aria-label={`Filter by ${getCategoryLabel(category)}`}
                  >
                    {React.createElement(getCategoryIcon(category), { className: "w-4 h-4", "aria-hidden": true })}
                    {getCategoryLabel(category)}
                  </Button>
                ))}
              </div>
            </div>

            {/* News Grid */}
            <section aria-label="News articles">
              {filteredNews.length > 0 ? (
                <div className="grid gap-6" role="list">
                  {filteredNews.map((news, index) => (
                    <div key={news.slug} role="listitem">
                      <NewsCard 
                        news={news}
                        language={language}
                        index={index}
                        t={t}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12" role="status" aria-live="polite">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
                  <p className="text-muted-foreground">{t.noResults}</p>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6" aria-label="Sidebar navigation">
            {/* Archive */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  {t.archive}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <nav className="space-y-2" aria-label="Archive navigation">
                  {Object.entries(archiveData)
                    .sort(([a], [b]) => b.localeCompare(a))
                    .map(([key, data]) => (
                    <button 
                      key={key} 
                      className="flex items-center justify-between py-2 hover:bg-muted/50 px-2 rounded cursor-pointer transition-colors w-full text-left focus:outline-none focus:ring-2 focus:ring-primary"
                      aria-label={`View ${data.count} articles from ${data.name}`}
                    >
                      <span className="text-sm">{data.name}</span>
                      <Badge variant="secondary" className="text-xs">{data.count}</Badge>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>{language === 'km' ? 'តំណភ្ជាប់រហ័ស' : 'Quick Links'}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <nav className="space-y-2" aria-label="Quick navigation links">
                  <Link 
                    to="/#about" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                  >
                    {language === 'km' ? 'អំពីវត្តអារាម' : 'About Temple'}
                  </Link>
                  <Link 
                    to="/#events" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                  >
                    {language === 'km' ? 'ព្រឹត្តិការណ៍' : 'Events'}
                  </Link>
                  <Link 
                    to="/#dharma" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                  >
                    {language === 'km' ? 'ព្រះធម៌' : 'Dharma'}
                  </Link>
                  <Link 
                    to="/#contact" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                  >
                    {language === 'km' ? 'ទំនាក់ទំនង' : 'Contact'}
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default DailyNews;