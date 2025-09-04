import { ArrowLeft, Church, Mountain, UtensilsCrossed, Camera, Waves, TreePine, Building, Music } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigation } from "../../contexts/NavigationContext";
import type { Page } from "../../contexts/NavigationContext";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const allCategories = [
  { 
    id: 1, 
    key: "categories.churches", 
    icon: Church, 
    page: "churches" as Page,
    image: "https://images.unsplash.com/photo-1687294087548-eeff52ddfb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 12
  },
  { 
    id: 2, 
    key: "categories.nature", 
    icon: Mountain, 
    page: "nature" as Page,
    image: "https://images.unsplash.com/photo-1659364917288-2ff9bb306c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNlZG9uaWElMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBnYWxpY2ljYSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 8
  },
  { 
    id: 3, 
    key: "categories.restaurants", 
    icon: UtensilsCrossed, 
    page: "restaurants" as Page,
    image: "https://images.unsplash.com/photo-1707635569223-c759b3b0501b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMHJlc3RhdXJhbnQlMjB0cmFkaXRpb25hbCUyMGZvb2QlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1NzAxNzA2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 25
  },
  { 
    id: 4, 
    key: "categories.photography", 
    icon: Camera, 
    page: "photography" as Page,
    image: "https://images.unsplash.com/photo-1611845528017-75215e6d662c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG1hY2Vkb25pYSUyMGxha2UlMjBjaHVyY2glMjBtb25hc3Rlcnl8ZW58MXx8fHwxNzU3MDE2ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 15
  },
  { 
    id: 5, 
    key: "categories.beach", 
    icon: Waves, 
    page: "beach" as Page,
    image: "https://images.unsplash.com/photo-1660800821474-9cc2f43a45c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGxha2UlMjBiZWFjaCUyMHN1bW1lciUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 6
  },
  { 
    id: 6, 
    key: "categories.parks", 
    icon: TreePine, 
    page: "parks" as Page,
    image: "https://images.unsplash.com/photo-1659364917288-2ff9bb306c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNlZG9uaWElMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBnYWxpY2ljYSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 4
  },
  { 
    id: 7, 
    key: "categories.museums", 
    icon: Building, 
    page: "museums" as Page,
    image: "https://images.unsplash.com/photo-1618394969337-cc43d17c5a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGZvcnRyZXNzJTIwc2FtdWVsJTIwZ2FsaWNpY2ElMjBwYXJrfGVufDF8fHx8MTc1NzAxNjgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 7
  },
  { 
    id: 8, 
    key: "categories.culture", 
    icon: Music, 
    page: "culture" as Page,
    image: "https://images.unsplash.com/photo-1687294087548-eeff52ddfb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 9
  }
];

export function CategoriesPage() {
  const { t } = useLanguage();
  const { goBack, setCurrentPage } = useNavigation();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button 
            onClick={goBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">{t('categories.title')}</h1>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 gap-4">
          {allCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setCurrentPage(category.page)}
                className="relative h-24 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                {/* Background Image */}
                <ImageWithFallback
                  src={category.image}
                  alt={t(category.key)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content */}
                <div className="relative z-10 flex items-center justify-between h-full px-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">{t(category.key)}</h3>
                      <p className="text-sm opacity-90">{category.count} {category.count === 1 ? 'item' : 'items'}</p>
                    </div>
                  </div>
                  <ArrowLeft className="h-5 w-5 rotate-180" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}