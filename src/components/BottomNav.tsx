import { Home, Map, Heart, User } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";
import type { Page } from "../contexts/NavigationContext";

const navItems = [
  { id: 'home' as Page, labelKey: 'nav.home', icon: Home },
  { id: 'explore' as Page, labelKey: 'nav.explore', icon: Map },
  { id: 'favorites' as Page, labelKey: 'nav.favorites', icon: Heart },
  { id: 'profile' as Page, labelKey: 'nav.profile', icon: User }
];

export function BottomNav() {
  const { t } = useLanguage();
  const { currentPage, setCurrentPage } = useNavigation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-bottom z-40">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <IconComponent className={`h-5 w-5 mb-1 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-xs font-medium">{t(item.labelKey)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}