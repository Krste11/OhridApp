import { FeaturedCard } from "./FeaturedCard";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";

const featuredAttractions = [
  {
    id: 1,
    titleKey: "attraction.sofia.title",
    locationKey: "attraction.sofia.location",
    rating: 4.7,
    reviews: 892,
    durationKey: "duration.1-2",
    image: "https://images.unsplash.com/photo-1703356294065-e3d60f038a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG9sZCUyMHRvd24lMjBhcmNoaXRlY3R1cmUlMjBtZWRpZXZhbHxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    priceKey: "common.free"
  },
  {
    id: 2,
    titleKey: "attraction.restaurant.title",
    locationKey: "attraction.restaurant.location",
    rating: 4.9,
    reviews: 456,
    durationKey: "duration.2-3",
    image: "https://images.unsplash.com/photo-1595185534067-3e2b101f085c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMHRyYWRpdGlvbmFsJTIwcmVzdGF1cmFudCUyMG1hY2Vkb25pYXxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$45"
  },
  {
    id: 3,
    titleKey: "attraction.samuil.title",
    locationKey: "attraction.samuil.location",
    rating: 4.8,
    reviews: 623,
    durationKey: "duration.1-2",
    image: "https://images.unsplash.com/photo-1618394969337-cc43d17c5a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGZvcnRyZXNzJTIwc2FtdWVsJTIwZ2FsaWNpY2ElMjBwYXJrfGVufDF8fHx8MTc1NzAxNjgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$15"
  },
  {
    id: 4,
    titleKey: "attraction.cuisine.title",
    locationKey: "attraction.cuisine.location",
    rating: 4.6,
    reviews: 324,
    durationKey: "duration.3-4",
    image: "https://images.unsplash.com/photo-1635451458060-99382d5c443f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNlZG9uaWElMjB0cmFkaXRpb25hbCUyMGZvb2QlMjB0YXZlcm58ZW58MXx8fHwxNzU3MDE2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$35"
  }
];

export function FeaturedSection() {
  const { t } = useLanguage();
  const { setCurrentPage } = useNavigation();

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4 px-4">
        <h3 className="text-lg font-semibold text-gray-900">{t('featured.title')}</h3>
        <button 
          onClick={() => setCurrentPage('attractions')}
          className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
        >
          {t('featured.seeAll')}
        </button>
      </div>
      
      <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-scroll">
        {featuredAttractions.map((attraction) => (
          <div key={attraction.id} className="snap-start flex-shrink-0">
            <FeaturedCard
              id={attraction.id}
              title={t(attraction.titleKey)}
              location={t(attraction.locationKey)}
              rating={attraction.rating}
              reviews={attraction.reviews}
              duration={t(attraction.durationKey)}
              image={attraction.image}
              price={attraction.priceKey ? t(attraction.priceKey) : attraction.price}
              category="Featured Attractions"
            />
          </div>
        ))}
      </div>
    </div>
  );
}