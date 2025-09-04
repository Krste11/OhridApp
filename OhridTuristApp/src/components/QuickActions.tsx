import { Phone, Navigation, Info, Share } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";

const quickActions = [
  { 
    id: 1, 
    labelKey: "quickActions.emergency", 
    icon: Phone, 
    color: "bg-red-100 text-red-600",
    action: "emergency" as const
  },
  { 
    id: 2, 
    labelKey: "quickActions.directions", 
    icon: Navigation, 
    color: "bg-blue-100 text-blue-600",
    action: "directions" as const
  },
  { 
    id: 3, 
    labelKey: "quickActions.touristInfo", 
    icon: Info, 
    color: "bg-green-100 text-green-600",
    action: "touristInfo" as const
  },
  { 
    id: 4, 
    labelKey: "quickActions.share", 
    icon: Share, 
    color: "bg-purple-100 text-purple-600",
    action: "share" as const
  }
];

export function QuickActions() {
  const { t } = useLanguage();
  const { setCurrentPage } = useNavigation();

  const handleAction = (action: string) => {
    switch (action) {
      case 'emergency':
        // In a real app, this would show emergency contacts
        alert('Emergency contacts:\n\nPolice: 192\nFire: 193\nMedical: 194\nTourist Police: +389 46 252 875');
        break;
      case 'directions':
        // Open native maps app
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const url = `https://www.google.com/maps/dir/${latitude},${longitude}/Ohrid,+North+Macedonia`;
            window.open(url, '_blank');
          });
        } else {
          window.open('https://www.google.com/maps/place/Ohrid,+North+Macedonia', '_blank');
        }
        break;
      case 'touristInfo':
        setCurrentPage('touristInfo');
        break;
      case 'share':
        if (navigator.share) {
          navigator.share({
            title: 'Ohrid Travel Guide',
            text: 'Discover the beauty of Ohrid with this amazing travel guide!',
            url: window.location.href
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        }
        break;
    }
  };

  return (
    <div className="px-4 mt-6 mb-20">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('quickActions.title')}</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => handleAction(action.action)}
              className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`p-2 rounded-lg ${action.color}`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <span className="font-medium text-gray-900">{t(action.labelKey)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}