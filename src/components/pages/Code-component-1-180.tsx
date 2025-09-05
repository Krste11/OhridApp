import { 
  User, 
  Settings, 
  Globe, 
  Bell, 
  Heart, 
  MapPin, 
  Info, 
  HelpCircle, 
  Star, 
  Share,
  Moon,
  Sun,
  ChevronRight,
  Download
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function ProfilePage() {
  const { t, language, setLanguage } = useLanguage();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

  const userStats = {
    visitedPlaces: 12,
    savedFavorites: 8,
    photosShared: 25,
    reviewsWritten: 5
  };

  const menuSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Personal Information", action: () => {} },
        { icon: Heart, label: "My Favorites", count: userStats.savedFavorites, action: () => {} },
        { icon: MapPin, label: "Visited Places", count: userStats.visitedPlaces, action: () => {} },
        { icon: Star, label: "My Reviews", count: userStats.reviewsWritten, action: () => {} }
      ]
    },
    {
      title: "Preferences",
      items: [
        { 
          icon: Globe, 
          label: "Language", 
          value: language.toUpperCase(),
          action: () => setLanguage(language === 'en' ? 'mk' : 'en')
        },
        { 
          icon: Bell, 
          label: "Notifications", 
          toggle: true,
          value: notifications,
          action: () => setNotifications(!notifications)
        },
        { 
          icon: darkMode ? Sun : Moon, 
          label: "Dark Mode", 
          toggle: true,
          value: darkMode,
          action: () => setDarkMode(!darkMode)
        },
        { 
          icon: Download, 
          label: "Offline Mode", 
          toggle: true,
          value: offlineMode,
          action: () => setOfflineMode(!offlineMode)
        }
      ]
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Help & FAQ", action: () => {} },
        { icon: Info, label: "About Ohrid Guide", action: () => {} },
        { icon: Share, label: "Share App", action: () => shareApp() },
        { icon: Star, label: "Rate App", action: () => rateApp() }
      ]
    }
  ];

  const shareApp = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ohrid Travel Guide',
        text: 'Discover the beauty of Ohrid with this amazing travel guide!',
        url: window.location.href
      });
    }
  };

  const rateApp = () => {
    // In a real app, this would open the app store
    alert('Thank you for wanting to rate our app!');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">{t('nav.profile')}</h1>
        
        {/* User Profile */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="h-16 w-16">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
              {t('profile.guestInitials')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900">{t('profile.guestUser')}</h2>
            <p className="text-sm text-gray-600">{t('profile.exploreOhrid')}</p>
            <Button variant="outline" size="sm" className="mt-2">
              {t('profile.signIn')}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="font-semibold text-lg text-gray-900">{userStats.visitedPlaces}</div>
            <div className="text-xs text-gray-600">Visited</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg text-gray-900">{userStats.savedFavorites}</div>
            <div className="text-xs text-gray-600">Saved</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg text-gray-900">{userStats.photosShared}</div>
            <div className="text-xs text-gray-600">Photos</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg text-gray-900">{userStats.reviewsWritten}</div>
            <div className="text-xs text-gray-600">Reviews</div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-4 py-6 space-y-6">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">{section.title}</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              {section.items.map((item, itemIndex) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={itemIndex}
                    onClick={item.action}
                    className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">{item.label}</span>
                      {item.count && (
                        <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {item.value && !item.toggle && (
                        <span className="text-sm text-gray-500">{item.value}</span>
                      )}
                      {item.toggle ? (
                        <Switch
                          checked={item.value}
                          onCheckedChange={() => item.action()}
                        />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* App Version */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-500">
            Ohrid Travel Guide v1.0.0
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Made with ❤️ for travelers
          </p>
        </div>
      </div>
    </div>
  );
}