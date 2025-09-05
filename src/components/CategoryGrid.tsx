import { 
  Church, 
  Mountain, 
  UtensilsCrossed, 
  Camera, 
  Waves, 
  TreePine,
  Building,
  Music
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";
import type { Page } from "../contexts/NavigationContext";

const categories = [
  { 
    id: 1, 
    key: "categories.churches", 
    icon: Church, 
    page: "churches" as Page,
    image: "https://images.unsplash.com/photo-1687294087548-eeff52ddfb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    id: 2, 
    key: "categories.nature", 
    icon: Mountain, 
    page: "nature" as Page,
    image: "https://images.unsplash.com/photo-1659364917288-2ff9bb306c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNlZG9uaWElMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBnYWxpY2ljYSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    id: 3, 
    key: "categories.restaurants", 
    icon: UtensilsCrossed, 
    page: "restaurants" as Page,
    image: "https://images.unsplash.com/photo-1707635569223-c759b3b0501b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMHJlc3RhdXJhbnQlMjB0cmFkaXRpb25hbCUyMGZvb2QlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1NzAxNzA2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    id: 4, 
    key: "categories.photography", 
    icon: Camera, 
    page: "photography" as Page,
    image: "https://images.unsplash.com/photo-1664785155830-8717951028dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMHBob3RvZ3JhcGh5JTIwdmlld3BvaW50JTIwbWFjZWRvbmlhJTIwbGFrZXxlbnwxfHx8fDE3NTcwNzgzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    id: 5, 
    key: "categories.beach", 
    icon: Waves, 
    page: "beach" as Page,
    image: "https://images.unsplash.com/photo-1660800821474-9cc2f43a45c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGxha2UlMjBiZWFjaCUyMHN1bW1lciUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    id: 6, 
    key: "categories.parks", 
    icon: TreePine, 
    page: "parks" as Page,
    image: "https://images.unsplash.com/photo-1606301713224-62a26d378ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNlZG9uaWElMjBuYXRpb25hbCUyMHBhcmslMjBnYWxpY2ljYSUyMG5hdHVyZXxlbnwxfHx8fDE3NTcwNzgzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    id: 7, 
    key: "categories.museums", 
    icon: Building, 
    page: "museums" as Page,
    image: "https://images.unsplash.com/photo-1650268166826-7ab05eda40bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG11c2V1bSUyMGFyY2hhZW9sb2d5JTIwYW5jaWVudCUyMG1hY2Vkb25pYXxlbnwxfHx8fDE3NTcwNzgzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    id: 8, 
    key: "categories.culture", 
    icon: Music, 
    page: "culture" as Page,
    image: "https://images.unsplash.com/photo-1687294087548-eeff52ddfb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function CategoryGrid() {
  const { t } = useLanguage();
  const { setCurrentPage } = useNavigation();

  return (
    <div className="px-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{t('categories.title')}</h3>
        <button 
          onClick={() => setCurrentPage('categories')}
          className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
        >
          {t('categories.seeAll')}
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setCurrentPage(category.page)}
              className="relative flex flex-col items-center p-3 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 transform hover:scale-105"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-white/70" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-2 rounded-lg bg-white/80 backdrop-blur-sm mb-2 shadow-sm">
                  <IconComponent className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-xs text-gray-800 text-center leading-tight font-medium">
                  {t(category.key)}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}