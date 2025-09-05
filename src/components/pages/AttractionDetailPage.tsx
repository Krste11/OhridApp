import { ArrowLeft, Star, MapPin, Clock, Heart, Share2, Phone, Globe, Camera, Navigation } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useState } from 'react';

interface AttractionDetail {
  id: number;
  title: string;
  location: string;
  category: string;
  rating: number;
  reviews: number;
  duration: string;
  image: string;
  price?: string;
  description?: string;
  phone?: string;
  website?: string;
  openingHours?: string;
  gallery?: string[];
}

const mockAttractionDetails = {
  1: {
    id: 1,
    title: "Saint Sofia Church",
    location: "Old Town, Ohrid",
    category: "Churches",
    rating: 4.7,
    reviews: 892,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1703356294065-e3d60f038a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG9sZCUyMHRvd24lMjBhcmNoaXRlY3R1cmUlMjBtZWRpZXZhbHxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Saint Sofia Church is one of the most important medieval churches in North Macedonia. Built in the 11th century, this architectural masterpiece showcases Byzantine art and contains remarkable frescoes that have been preserved for nearly a thousand years. The church served as the seat of the Bulgarian patriarchate and later became a mosque during Ottoman rule.",
    openingHours: "8:00 AM - 6:00 PM",
    phone: "+389 46 262 998",
    website: "www.ohrid-tourism.com",
    gallery: [
      "https://images.unsplash.com/photo-1687294087548-eeff52ddfb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1618394969337-cc43d17c5a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGZvcnRyZXNzJTIwc2FtdWVsJTIwZ2FsaWNpY2ElMjBwYXJrfGVufDF8fHx8MTc1NzAxNjgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  2: {
    id: 2,
    title: "Samuel's Fortress",
    location: "Ohrid Hill",
    category: "Museums",
    rating: 4.8,
    reviews: 623,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1618394969337-cc43d17c5a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGZvcnRyZXNzJTIwc2FtdWVsJTIwZ2FsaWNpY2ElMjBwYXJrfGVufDF8fHx8MTc1NzAxNjgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$15",
    description: "Samuel's Fortress is a fortress in the old town of Ohrid. It was the capital of the First Bulgarian Empire and the stronghold of the medieval Bulgarian state from 997 to 1018. The fortress offers spectacular panoramic views of Lake Ohrid and the surrounding mountains. The archaeological site contains ruins dating back to the 4th century BC.",
    openingHours: "8:00 AM - 8:00 PM",
    phone: "+389 46 262 875",
    website: "www.samuels-fortress.mk",
    gallery: [
      "https://images.unsplash.com/photo-1703356294065-e3d60f038a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG9sZCUyMHRvd24lMjBhcmNoaXRlY3R1cmUlMjBtZWRpZXZhbHxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1611845528017-75215e6d662c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG1hY2Vkb25pYSUyMGxha2UlMjBjaHVyY2glMjBtb25hc3Rlcnl8ZW58MXx8fHwxNzU3MDE2ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  }
};

export function AttractionDetailPage() {
  const { setCurrentPage, attractionDetail } = useNavigation();
  const { t } = useLanguage();
  const [isFavorited, setIsFavorited] = useState(false);

  if (!attractionDetail) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Attraction not found</h2>
          <Button onClick={() => setCurrentPage('home')} variant="outline">
            Go back to home
          </Button>
        </div>
      </div>
    );
  }

  // Get detailed info or use basic info
  const detailedInfo = mockAttractionDetails[attractionDetail.id as keyof typeof mockAttractionDetails] || attractionDetail;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: detailedInfo.title,
          text: `Check out ${detailedInfo.title} in Ohrid!`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Image */}
      <div className="relative">
        <div className="h-64 relative">
          <img
            src={detailedInfo.image}
            alt={detailedInfo.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Header Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setCurrentPage('home')}
              className="h-10 w-10 bg-white/90 backdrop-blur-sm hover:bg-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setIsFavorited(!isFavorited)}
                className="h-10 w-10 bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                <Heart className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              
              <Button
                variant="secondary"
                size="icon"
                onClick={handleShare}
                className="h-10 w-10 bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Quick Info Overlay */}
        <div className="absolute -bottom-6 left-4 right-4">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h1 className="text-xl font-semibold text-gray-900 mb-1">{detailedInfo.title}</h1>
                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{detailedInfo.location}</span>
                </div>
              </div>
              {detailedInfo.price && (
                <div className="bg-blue-600 text-white px-3 py-1 rounded-lg">
                  <span className="font-semibold">{detailedInfo.price}</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-gray-900">{detailedInfo.rating}</span>
                  <span className="text-sm text-gray-600">({detailedInfo.reviews})</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{detailedInfo.duration}</span>
                </div>
              </div>
              
              <Badge variant="secondary">{detailedInfo.category}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="pt-12 pb-20">
        <div className="px-4 space-y-6">
          {/* Description */}
          {detailedInfo.description && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
              <p className="text-gray-600 leading-relaxed">{detailedInfo.description}</p>
            </div>
          )}

          {/* Gallery */}
          {detailedInfo.gallery && detailedInfo.gallery.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Gallery</h2>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                {detailedInfo.gallery.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${detailedInfo.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Information</h2>
            <div className="space-y-3">
              {detailedInfo.openingHours && (
                <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                  <Clock className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Opening Hours</div>
                    <div className="text-sm text-gray-600">{detailedInfo.openingHours}</div>
                  </div>
                </div>
              )}
              
              {detailedInfo.phone && (
                <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                  <Phone className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-sm text-gray-600">{detailedInfo.phone}</div>
                  </div>
                </div>
              )}
              
              {detailedInfo.website && (
                <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                  <Globe className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Website</div>
                    <div className="text-sm text-blue-600">{detailedInfo.website}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 safe-area-bottom">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            <Navigation className="h-4 w-4 mr-2" />
            Directions
          </Button>
          <Button className="flex-1">
            <Camera className="h-4 w-4 mr-2" />
            Visit Now
          </Button>
        </div>
      </div>
    </div>
  );
}