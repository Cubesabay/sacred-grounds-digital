import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  MapPin, 
  Search, 
  ChevronRight, 
  BookOpen,
  Users,
  Heart,
  ArrowLeft 
} from 'lucide-react';
import dharmaWheel from '@/assets/dharma-wheel.jpg';

const DailyNews = () => {
  const [language, setLanguage] = useState('km');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  // Sample news data
  const newsData = [
    {
      id: 1,
      title: {
        km: 'បុណ្យវេសាខបូជាឆ្នាំ ២០២៤',
        en: 'Vesak Day Celebration 2024'
      },
      description: {
        km: 'ការប្រារព្ធបុណ្យវេសាខបូជាដ៏អស្ចារ្យ ជាមួយការចូលរួមពីសហគមន៍ និងការបង្រៀនព្រះធម៌',
        en: 'A wonderful Vesak Day celebration with community participation and dharma teachings'
      },
      date: '2024-05-22',
      category: 'events',
      image: dharmaWheel,
      featured: true
    },
    {
      id: 2,
      title: {
        km: 'កម្មវិធីកាត់បំបែកដើមឈើសម្រាប់ជនក្រីក្រ',
        en: 'Firewood Distribution Program for the Needy'
      },
      description: {
        km: 'វត្តសិរីមង្គលបានរៀបចំកម្មវិធីចែកដំណាក់ដើមឈើដល់គ្រួសារក្រីក្រក្នុងតំបន់',
        en: 'Wat Siri Mongkol organized a firewood distribution program for poor families in the area'
      },
      date: '2024-05-15',
      category: 'community',
      image: dharmaWheel
    },
    {
      id: 3,
      title: {
        km: 'វគ្គបង្រៀនសមាធិសម្រាប់យុវជន',
        en: 'Youth Meditation Training Program'
      },
      description: {
        km: 'ការបើកវគ្គបង្រៀនសមាធិថ្មីសម្រាប់យុវជន រៀងរាល់ថ្ងៃសៅរ៍',
        en: 'New meditation training program for youth, every Saturday'
      },
      date: '2024-05-08',
      category: 'teachings',
      image: dharmaWheel
    },
    {
      id: 4,
      title: {
        km: 'ការជួសជុលព្រះវិហារធំ',
        en: 'Main Temple Hall Renovation'
      },
      description: {
        km: 'ការចាប់ផ្តើមដំណាក់កាលទី២នៃការជួសជុលព្រះវិហារធំ ដើម្បីថែរក្សាស្ថាបត្យកម្មបុរាណ',
        en: 'Beginning of phase 2 renovation of the main temple hall to preserve ancient architecture'
      },
      date: '2024-04-30',
      category: 'events',
      image: dharmaWheel
    },
    {
      id: 5,
      title: {
        km: 'កម្មវិធីបរិច្ចាគសៀវភៅសម្រាប់សាលារៀន',
        en: 'Book Donation Program for Schools'
      },
      description: {
        km: 'វត្តបានបរិច្ចាគសៀវភៅចំនួន ៥០០ក្បាលដល់សាលាបឋមសិក្សាក្នុងតំបន់',
        en: 'The temple donated 500 books to primary schools in the region'
      },
      date: '2024-04-22',
      category: 'community',
      image: dharmaWheel
    },
    {
      id: 6,
      title: {
        km: 'ការបង្រៀនព្រះអភិធម៌',
        en: 'Abhidhamma Teaching Series'
      },
      description: {
        km: 'ការចាប់ផ្តើមវគ្គបង្រៀនព្រះអភិធម៌ដោយព្រះគ្រូជាន់ខ្ពស់',
        en: 'Beginning of Abhidhamma teaching series by senior monks'
      },
      date: '2024-04-15',
      category: 'teachings',
      image: dharmaWheel
    }
  ];

  const categories = ['all', 'events', 'community', 'teachings'];

  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      news.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'events': return Calendar;
      case 'community': return Users;
      case 'teachings': return BookOpen;
      default: return Heart;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'events': return 'bg-temple-saffron/20 text-temple-saffron';
      case 'community': return 'bg-temple-red/20 text-temple-red';
      case 'teachings': return 'bg-temple-gold/20 text-temple-shadow';
      default: return 'bg-temple-stone/20 text-temple-shadow';
    }
  };

  // Group news by month for archive
  const archiveData = newsData.reduce((acc, news) => {
    const date = new Date(news.date);
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
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToHome}</span>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <img src={dharmaWheel} alt="Dharma Wheel" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-primary">{t.title}</span>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={language === 'km' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('km')}
            >
              ខ្មែរ
            </Button>
            <Button
              variant={language === 'en' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('en')}
            >
              EN
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-sunset">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <img src={dharmaWheel} alt="Dharma Wheel" className="w-16 h-16 mx-auto mb-4 rounded-full shadow-sacred" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="gap-2"
                  >
                    {React.createElement(getCategoryIcon(category), { className: "w-4 h-4" })}
                    {t.categories[category as keyof typeof t.categories]}
                  </Button>
                ))}
              </div>
            </div>

            {/* News Grid */}
            {filteredNews.length > 0 ? (
              <div className="grid gap-6">
                {filteredNews.map((news, index) => (
                  <Card key={news.id} className={`overflow-hidden hover:shadow-temple transition-all duration-300 ${
                    news.featured && index === 0 ? 'lg:col-span-2' : ''
                  }`}>
                    <div className={`grid ${news.featured && index === 0 ? 'md:grid-cols-2' : ''} gap-6`}>
                      {/* Image */}
                      <div className={`${news.featured && index === 0 ? 'h-64' : 'h-48'} bg-gradient-to-br from-temple-saffron/20 to-temple-red/20 flex items-center justify-center`}>
                        <img 
                          src={news.image} 
                          alt={news.title[language]}
                          className="w-16 h-16 rounded-full opacity-50"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <CardHeader className="p-0 pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge className={getCategoryColor(news.category)}>
                              {React.createElement(getCategoryIcon(news.category), { className: "w-3 h-3 mr-1" })}
                              {t.categories[news.category as keyof typeof t.categories]}
                            </Badge>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(news.date).toLocaleDateString(language === 'km' ? 'km-KH' : 'en-US')}
                            </div>
                          </div>
                          <CardTitle className={`${news.featured && index === 0 ? 'text-2xl' : 'text-xl'} leading-tight`}>
                            {news.title[language]}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {news.description[language]}
                          </p>
                          <Button variant="outline" className="gap-2">
                            {t.readMore}
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">{t.noResults}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Archive */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {t.archive}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  {Object.entries(archiveData).map(([key, data]) => (
                    <div key={key} className="flex items-center justify-between py-2 hover:bg-muted/50 px-2 rounded cursor-pointer transition-colors">
                      <span className="text-sm">{data.name}</span>
                      <Badge variant="secondary" className="text-xs">{data.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>{language === 'km' ? 'តំណភ្ជាប់រហ័ស' : 'Quick Links'}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <Link to="/#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'km' ? 'អំពីវត្តអារាម' : 'About Temple'}
                </Link>
                <Link to="/#events" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'km' ? 'ព្រឹត្តិការណ៍' : 'Events'}
                </Link>
                <Link to="/#dharma" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'km' ? 'ព្រះធម៌' : 'Dharma'}
                </Link>
                <Link to="/#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'km' ? 'ទំនាក់ទំនង' : 'Contact'}
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyNews;