import { useState } from 'react';
import { Link } from 'react-router-dom';
import templeHero from '@/assets/temple-hero.jpg';
import dharmaWheel from '@/assets/dharma-wheel.jpg';
import meditationGarden from '@/assets/meditation-garden.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, Heart, BookOpen } from 'lucide-react';

const Index = () => {
  const [language, setLanguage] = useState('km');

  const content = {
    km: {
      title: 'វត្តសិរីមង្គល',
      subtitle: 'ហៅជ្រៃឧត្តម',
      location: 'ភូមិជ្រៃឧត្តម ឃុំក្រាំងតាយ៉ង ស្រុកពាមជរ ខេត្តព្រៃវែង',
      hero: 'ស្វាគមន៍មកកាន់ភពដីស្ងប់ស្ងាត់នៃព្រះពុទ្ធសាសនា',
      about: 'អំពីវត្តអារាម',
      gallery: 'ទេសចរណ៍វត្ត',
      dharma: 'ព្រះធម៌',
      events: 'ព្រឹត្តិការណ៍',
      schedule: 'កាលវិភាគ',
      contact: 'ព័ត៌មានទំនាក់ទំនង',
      donation: 'បរិច្ចាគ',
      dailyNews: 'ព័ត៌មានប្រចាំថ្ងៃ'
    },
    en: {
      title: 'Wat Siri Mongkol',
      subtitle: 'Chroy Uttom Temple',
      location: 'Chroy Uttom Village, Kraing Tayong Commune, Peam Chor District, Prey Veng Province',
      hero: 'Welcome to the Peaceful Realm of Buddhism',
      about: 'About Our Temple',
      gallery: 'Temple Gallery',
      dharma: 'Dharma Teachings',
      events: 'Events & Festivals',
      schedule: 'Daily Schedule',
      contact: 'Contact Information',
      donation: 'Donations',
      dailyNews: 'Daily News'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={dharmaWheel} alt="Dharma Wheel" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-primary">{t.title}</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">{t.about}</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">{t.gallery}</a>
            <a href="#dharma" className="text-foreground hover:text-primary transition-colors">{t.dharma}</a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors">{t.events}</a>
            <Link to="/daily-news" className="text-foreground hover:text-primary transition-colors">{t.dailyNews}</Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t.contact}</a>
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${templeHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-temple-shadow/50 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <img src={dharmaWheel} alt="Dharma Wheel" className="w-16 h-16 mx-auto mb-4 rounded-full shadow-sacred" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-white/90">
            {t.subtitle}
          </p>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            {t.hero}
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="w-4 h-4" />
            <span className="text-sm text-white/80">{t.location}</span>
          </div>
<Button
  size="lg"
  className="bg-temple-saffron hover:bg-temple-gold text-temple-shadow"
  asChild
>
  <a href="/daily-news" target="_blank" rel="noopener noreferrer">
    {language === 'km' ? 'ស្វែងយល់បន្ថែម' : 'Explore Temple'}
  </a>
</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t.about}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden shadow-temple">
                <div 
                  className="h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${meditationGarden})` }}
                ></div>
              </Card>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                {language === 'km' ? 'បេតិកភណ្ឌព្រះពុទ្ធសាសនាខ្មែរ' : 'Sacred Heritage of Khmer Buddhism'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'km' 
                  ? 'វត្តសិរីមង្គលជាកន្លែងសក្ការៈបូជាប្រកបដោយប្រវត្តិសាស្រ្តដ៏យូរលង់នៅភូមិជ្រៃឧត្តម។ វត្តនេះបានបម្រើជាមជ្ឈមណ្ឌលខាងវិញ្ញាណសម្រាប់សហគមន៍ក្នុងតំបន់រាប់សតវត្សរ៍មកហើយ។'
                  : 'Wat Siri Mongkol stands as a sacred sanctuary with deep historical roots in Chroy Uttom village. This temple has served as the spiritual center for the local community for centuries, preserving the ancient traditions of Khmer Buddhism.'
                }
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'km'
                  ? 'វត្តនេះជាកន្លែងដែលព្រះសង្ឃបង្រៀនព្រះធម៌ និងជាកន្លែងដែលប្រជាពលរដ្ឋមកធ្វើបុណ្យកុសល និងស្វែងរកភាពស្ងប់ស្ងាត់នៃចិត្ត។'
                  : 'Here, monks teach the Dharma and the faithful come to make merit, finding peace and tranquility in the sacred grounds surrounded by lotus ponds and ancient stupas.'
                }
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-temple-stone text-foreground">
                  {language === 'km' ? 'ប្រវត្តិសាស្រ្ត' : 'Historical'}
                </Badge>
                <Badge variant="secondary" className="bg-temple-stone text-foreground">
                  {language === 'km' ? 'ពុទ្ធសាសនា' : 'Buddhist'}
                </Badge>
                <Badge variant="secondary" className="bg-temple-stone text-foreground">
                  {language === 'km' ? 'សហគមន៍' : 'Community'}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t.gallery}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'km' 
                ? 'រកឃើញភាពស្រស់ស្អាតនៃបរិវេណវត្ត និងស្ថាបត្យកម្មខ្មែរបុរាណ'
                : 'Discover the beauty of our temple grounds and ancient Khmer architecture'
              }
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-temple transition-shadow duration-300">
                <div 
                  className="h-64 bg-gradient-to-br from-temple-saffron/20 to-temple-red/20 flex items-center justify-center"
                >
                  <div className="text-center">
                    <img src={dharmaWheel} alt="Temple" className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm text-muted-foreground">
                      {language === 'km' ? 'រូបភាពវត្ត' : 'Temple Photo'}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dharma Section */}
      <section id="dharma" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t.dharma}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-temple transition-shadow">
              <CardContent className="p-0">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'km' ? 'ការបង្រៀនព្រះធម៌' : 'Dharma Teachings'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'km' 
                    ? 'ការបង្រៀនព្រះធម៌ប្រចាំសប្ដាហ៍ដោយព្រះសង្ឃ'
                    : 'Weekly Dharma teachings by resident monks'
                  }
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-temple transition-shadow">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'km' ? 'ការធ្វើសមាធិ' : 'Meditation Sessions'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'km' 
                    ? 'វគ្គសមាធិសម្រាប់អ្នកចាប់ផ្តើម និងអ្នកមានបទពិសោធន៍'
                    : 'Guided meditation for beginners and experienced practitioners'
                  }
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-temple transition-shadow">
              <CardContent className="p-0">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'km' ? 'សេវាកម្មសហគមន៍' : 'Community Service'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'km' 
                    ? 'កម្មវិធីជួយដល់សហគមន៍ និងការអប់រំ'
                    : 'Community outreach programs and education'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t.events}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <Calendar className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === 'km' ? 'បុណ្យវេសាខបូជា' : 'Vesak Day Celebration'}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {language === 'km' ? 'ពេញបូណ៌មីខែវិសាខ' : 'Full Moon of Vesak Month'}
                    </p>
                    <p className="text-muted-foreground">
                      {language === 'km' 
                        ? 'ការប្រារព្ធបុណ្យកំណើតព្រះពុទ្ធ ការជ្រាស និងការបរិនិព្វាន'
                        : 'Celebrating the birth, enlightenment, and passing of the Buddha'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === 'km' ? 'ការធ្វើសមាធិប្រចាំថ្ងៃ' : 'Daily Meditation'}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {language === 'km' ? 'រាល់ថ្ងៃ ម៉ោង ៥:៣០ ព្រឹក' : 'Daily at 5:30 AM'}
                    </p>
                    <p className="text-muted-foreground">
                      {language === 'km' 
                        ? 'ការធ្វើសមាធិជាមួយព្រះសង្ឃ នៅព្រះវិហារ'
                        : 'Morning meditation with monks in the main hall'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t.contact}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {language === 'km' ? 'មកលេងវត្ត' : 'Visit Our Temple'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">{language === 'km' ? 'អាសយដ្ឋាន' : 'Address'}</p>
                    <p className="text-muted-foreground">{t.location}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">{language === 'km' ? 'ម៉ោងបើកទ្វារ' : 'Opening Hours'}</p>
                    <p className="text-muted-foreground">
                      {language === 'km' ? 'រាល់ថ្ងៃ ៥:០០ព្រឹក - ៨:០០យប់' : 'Daily: 5:00 AM - 8:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {language === 'km' ? 'ការបរិច្ចាគ' : 'Support Our Temple'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'km' 
                  ? 'ការបរិច្ចាគរបស់អ្នកជួយថែរក្សាវត្ត និងទ្រទ្រង់សកម្មភាពសហគមន៍'
                  : 'Your donations help maintain our temple and support community activities'
                }
              </p>
              <Button className="w-full bg-temple-saffron hover:bg-temple-gold text-temple-shadow">
                <Heart className="w-4 h-4 mr-2" />
                {language === 'km' ? 'ធ្វើបរិច្ចាគ' : 'Make a Donation'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-temple-shadow text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <img src={dharmaWheel} alt="Dharma Wheel" className="w-8 h-8 rounded-full" />
            <h3 className="text-xl font-bold">{t.title}</h3>
          </div>
          <p className="text-white/80 mb-4">{t.subtitle}</p>
          <p className="text-white/60 text-sm">
            {language === 'km' 
              ? 'សាធុ សាធុ សាធុ - សូមឲ្យគ្រប់គ្នាមានសុខភាពល្អ និងសុភមង្គល'
              : 'Sadhu Sadhu Sadhu - May all beings be happy and peaceful'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
