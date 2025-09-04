import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'mk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'app.title': 'Ohrid Guide',
    'search.placeholder': 'Search attractions, restaurants...',
    
    // Hero Section
    'hero.location': 'Ohrid, North Macedonia',
    'hero.title': 'Discover Ohrid',
    'hero.description': 'UNESCO World Heritage site with pristine lakes and rich history',
    'hero.reviews': 'reviews',
    
    // Categories
    'categories.title': 'Explore Categories',
    'categories.seeAll': 'See all',
    'categories.churches': 'Churches',
    'categories.nature': 'Nature',
    'categories.restaurants': 'Restaurants',
    'categories.photography': 'Photography',
    'categories.beach': 'Beach',
    'categories.parks': 'Parks',
    'categories.museums': 'Museums',
    'categories.culture': 'Culture',
    
    // Featured
    'featured.title': 'Featured Attractions',
    'featured.seeAll': 'See all',
    
    // Attractions
    'attraction.sofia.title': 'Saint Sofia Church',
    'attraction.sofia.location': 'Old Town',
    'attraction.cuisine.title': 'Traditional Cuisine Tour',
    'attraction.cuisine.location': 'City Center',
    'attraction.hiking.title': 'Hiking & Nature Trail',
    'attraction.hiking.location': 'Galicica National Park',
    'attraction.samuil.title': 'Samuil\'s Fortress',
    'attraction.samuil.location': 'Old Town',
    'attraction.restaurant.title': 'Antiko Restaurant',
    'attraction.restaurant.location': 'City Center',
    
    // Duration
    'duration.hours': 'hours',
    'duration.1-2': '1-2 hours',
    'duration.2-3': '2-3 hours',
    'duration.3-4': '3-4 hours',
    'duration.4-6': '4-6 hours',
    
    // Quick Actions
    'quickActions.title': 'Quick Actions',
    'quickActions.emergency': 'Emergency',
    'quickActions.directions': 'Directions',
    'quickActions.touristInfo': 'Tourist Info',
    'quickActions.share': 'Share',
    
    // Bottom Navigation
    'nav.home': 'Home',
    'nav.explore': 'Explore',
    'nav.favorites': 'Favorites',
    'nav.profile': 'Profile',
    
    // Common
    'common.free': 'Free',
    
    // Profile
    'profile.guestUser': 'Guest User',
    'profile.guestInitials': 'GU',
    'profile.exploreOhrid': 'Exploring the beauty of Ohrid',
    'profile.signIn': 'Sign In',
    
    // Menu
    'menu.description': 'Explore Ohrid with our comprehensive travel guide',
  },
  mk: {
    // Header
    'app.title': 'Охридски Водич',
    'search.placeholder': 'Пребарај атракции, ресторани...',
    
    // Hero Section
    'hero.location': 'Охрид, Северна Македонија',
    'hero.title': 'Откријте Охрид',
    'hero.description': 'Локалитет под заштита на УНЕСКО со кристално чисто езеро и богата историја',
    'hero.reviews': 'рецензии',
    
    // Categories
    'categories.title': 'Истражувај Категории',
    'categories.seeAll': 'Види сè',
    'categories.churches': 'Цркви',
    'categories.nature': 'Природа',
    'categories.restaurants': 'Ресторани',
    'categories.photography': 'Фотографија',
    'categories.beach': 'Плажа',
    'categories.parks': 'Паркови',
    'categories.museums': 'Музеи',
    'categories.culture': 'Култура',
    
    // Featured
    'featured.title': 'Препорачани Атракции',
    'featured.seeAll': 'Види сè',
    
    // Attractions
    'attraction.sofia.title': 'Црква Света Софија',
    'attraction.sofia.location': 'Стар Град',
    'attraction.cuisine.title': 'Тур на Традиционална Кујна',
    'attraction.cuisine.location': 'Центар',
    'attraction.hiking.title': 'Планинарење и Природни Патеки',
    'attraction.hiking.location': 'Национален Парк Галичица',
    'attraction.samuil.title': 'Самуилова Тврдина',
    'attraction.samuil.location': 'Стар Град',
    'attraction.restaurant.title': 'Ресторан Антико',
    'attraction.restaurant.location': 'Центар',
    
    // Duration
    'duration.hours': 'часа',
    'duration.1-2': '1-2 часа',
    'duration.2-3': '2-3 часа',
    'duration.3-4': '3-4 часа',
    'duration.4-6': '4-6 часа',
    
    // Quick Actions
    'quickActions.title': 'Брзи Акции',
    'quickActions.emergency': 'Итност',
    'quickActions.directions': 'Насоки',
    'quickActions.touristInfo': 'Туристички Инфо',
    'quickActions.share': 'Сподели',
    
    // Bottom Navigation
    'nav.home': 'Дома',
    'nav.explore': 'Истражувај',
    'nav.favorites': 'Омилени',
    'nav.profile': 'Профил',
    
    // Common
    'common.free': 'Бесплатно',
    
    // Profile
    'profile.guestUser': 'Гостин Корисник',
    'profile.guestInitials': 'ГК',
    'profile.exploreOhrid': 'Истражувам убавината на Охрид',
    'profile.signIn': 'Најави се',
    
    // Menu
    'menu.description': 'Истражувајте ги убавините на Охрид со нашиот детален водич',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}