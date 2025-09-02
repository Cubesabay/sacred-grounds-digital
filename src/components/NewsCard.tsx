import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ChevronRight, BookOpen, Heart } from 'lucide-react';

interface NewsCardProps {
  news: {
    slug: string;
    titleKh: string;
    titleEn: string;
    dateISO: string;
    category: string;
    image: string;
    excerptKh: string;
    excerptEn: string;
    featured?: boolean;
  };
  language: 'km' | 'en';
  index: number;
  t: any;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, language, index, t }) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'events': return Calendar;
      case 'community': return Heart;
      case 'teachings': return BookOpen;
      default: return Heart;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'events': return 'bg-temple-saffron/20 text-temple-saffron';
      case 'community': return 'bg-temple-red/20 text-temple-red';
      case 'teachings': return 'bg-temple-gold/20 text-temple-shadow';
      default: return 'bg-temple-stone/20 text-temple-shadow';
    }
  };

  return (
    <Card 
      className={`overflow-hidden hover:shadow-temple transition-all duration-300 ${
        news.featured && index === 0 ? 'lg:col-span-2' : ''
      }`}
      role="article"
      aria-labelledby={`news-title-${news.slug}`}
    >
      <div className={`grid ${news.featured && index === 0 ? 'md:grid-cols-2' : ''} gap-6`}>
        {/* Image */}
        <div className={`${news.featured && index === 0 ? 'h-64' : 'h-48'} bg-gradient-to-br from-temple-saffron/20 to-temple-red/20 flex items-center justify-center relative overflow-hidden`}>
          <img 
            src={news.image} 
            alt={language === 'km' ? news.titleKh : news.titleEn}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <CardHeader className="p-0 pb-4">
            <div className="flex items-center justify-between mb-2">
              <Badge className={getCategoryColor(news.category)}>
                {React.createElement(getCategoryIcon(news.category), { className: "w-3 h-3 mr-1" })}
                {news.category}
              </Badge>
              <time 
                className="flex items-center text-muted-foreground text-sm"
                dateTime={news.dateISO}
              >
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(news.dateISO).toLocaleDateString(language === 'km' ? 'km-KH' : 'en-US')}
              </time>
            </div>
            
            {/* Bilingual Title */}
            <CardTitle 
              id={`news-title-${news.slug}`}
              className={`${news.featured && index === 0 ? 'text-2xl' : 'text-xl'} leading-tight space-y-1`}
            >
              <div className="text-primary">{news.titleKh}</div>
              <div className="text-muted-foreground text-base font-medium">{news.titleEn}</div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            {/* Bilingual Excerpt */}
            <div className="mb-4 space-y-2">
              <p className="text-foreground leading-relaxed">{news.excerptKh}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{news.excerptEn}</p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="default" size="sm" className="gap-2">
                <Link to={`/news/${news.slug}`} aria-label={`Read full article: ${news.titleEn}`}>
                  {t.readMore}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="sm" className="gap-2">
                <Link to="/#dharma" aria-label="Learn more about Buddhist teachings">
                  <BookOpen className="w-4 h-4" />
                  {language === 'km' ? 'ព្រះធម៌' : 'Learn More'}
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="sm" className="gap-2">
                <Link to="/#donate" aria-label="Support the temple">
                  <Heart className="w-4 h-4" />
                  {language === 'km' ? 'បរិច្ចាគ' : 'Donate'}
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;