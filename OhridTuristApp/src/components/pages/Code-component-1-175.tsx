import { Heart, Star, Clock, MapPin, Trash2, Share } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";

// Mock favorites data - in a real app, this would come from local storage or backend
const initialFavorites = [
  {
    id: 1,
    title: "Saint Sofia Church",
    location: "Old Town",
    rating: 4.7,
    reviews: 892,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1703356294065-e3d60f038a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG9sZCUyMHRvd24lMjBhcmNoaXRlY3R1cmUlMjBtZWRpZXZhbHxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "Free",
    category: "Churches",
    savedDate: "2 days ago"
  },
  {
    id: 2,
    title: "Antiko Restaurant",
    location: "City Center",
    rating: 4.8,
    reviews: 456,
    duration: "2-3 hours",
    image: "https://images.unsplash.com/photo-1595185534067-3e2b101f085c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMHRyYWRpdGlvbmFsJTIwcmVzdGF1cmFudCUyMG1hY2Vkb25pYXxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$25-40",
    category: "Restaurants",
    savedDate: "1 week ago"
  },
  {
    id: 3,
    title: "Galicica National Park",
    location: "Mountains",
    rating: 4.8,
    reviews: 234,
    duration: "4-8 hours",
    image: "https://images.unsplash.com/photo-1659364917288-2ff9bb306c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNlZG9uaWElMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBnYWxpY2ljYSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$10",
    category: "Nature",
    savedDate: "3 days ago"
  }
];

export function FavoritesPage() {
  const { t } = useLanguage();
  const [favorites, setFavorites] = useState(initialFavorites);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const shareItem = (item: any) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: `Check out ${item.title} in Ohrid!`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${item.title} - ${window.location.href}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">{t('nav.favorites')}</h1>
          <div className="flex items-center gap-1">
            <Heart className="h-5 w-5 text-red-500 fill-current" />
            <span className="text-sm text-gray-600">{favorites.length}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {favorites.length > 0 ? (
          <>
            <p className="text-sm text-gray-600 mb-6">
              You have {favorites.length} saved {favorites.length === 1 ? 'attraction' : 'attractions'}
            </p>

            <div className="space-y-4">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium">
                      {item.price}
                    </div>
                    <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => shareItem(item)}
                          className="p-2 h-8 w-8"
                        >
                          <Share className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFavorite(item.id)}
                          className="p-2 h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      <span className="text-sm text-gray-600">{item.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{item.rating}</span>
                          <span className="text-sm text-gray-500">({item.reviews})</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{item.duration}</span>
                        </div>
                      </div>
                      
                      <span className="text-xs text-gray-500">Saved {item.savedDate}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No favorites yet</h3>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">
              Start exploring and tap the heart icon to save your favorite attractions, restaurants, and places.
            </p>
            <Button className="px-6">
              Explore Ohrid
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}