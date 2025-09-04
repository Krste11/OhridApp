import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigation } from "../../contexts/NavigationContext";
import { ImageWithFallback } from "../figma/ImageWithFallback";

// Sample data for different categories
const categoryData: Record<string, any[]> = {
  churches: [
    {
      id: 1,
      title: "Saint Sofia Church",
      location: "Old Town",
      rating: 4.7,
      reviews: 892,
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1703356294065-e3d60f038a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG9sZCUyMHRvd24lMjBhcmNoaXRlY3R1cmUlMjBtZWRpZXZhbHxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "Free",
      description: "Historic 11th-century church with Byzantine architecture."
    },
    {
      id: 2,
      title: "St. Naum Monastery",
      location: "South Ohrid",
      rating: 4.9,
      reviews: 543,
      duration: "2-3 hours",
      image: "https://images.unsplash.com/photo-1687294087548-eeff52ddfb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$5",
      description: "Beautiful monastery complex with peacocks and springs."
    },
    {
      id: 3,
      title: "St. Clement Church",
      location: "Old Town",
      rating: 4.6,
      reviews: 324,
      duration: "1 hour",
      image: "https://images.unsplash.com/photo-1687294087548-eeff52ddfb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "Free",
      description: "13th-century church built on ancient foundations."
    }
  ],
  restaurants: [
    {
      id: 1,
      title: "Antiko Restaurant",
      location: "City Center",
      rating: 4.8,
      reviews: 456,
      duration: "2-3 hours",
      image: "https://images.unsplash.com/photo-1595185534067-3e2b101f085c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMHRyYWRpdGlvbmFsJTIwcmVzdGF1cmFudCUyMG1hY2Vkb25pYXxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$25-40",
      description: "Traditional Macedonian cuisine with lake views."
    },
    {
      id: 2,
      title: "Kaj Kanevche Restaurant",
      location: "Lakefront",
      rating: 4.7,
      reviews: 623,
      duration: "2-3 hours",
      image: "https://images.unsplash.com/photo-1707635569223-c759b3b0501b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMHJlc3RhdXJhbnQlMjB0cmFkaXRpb25hbCUyMGZvb2QlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1NzAxNzA2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$20-35",
      description: "Fresh fish and traditional dishes by the lake."
    }
  ],
  nature: [
    {
      id: 1,
      title: "Galicica National Park",
      location: "Mountains",
      rating: 4.8,
      reviews: 234,
      duration: "4-8 hours",
      image: "https://images.unsplash.com/photo-1659364917288-2ff9bb306c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNlZG9uaWElMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBnYWxpY2ljYSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$10",
      description: "Stunning mountain views and hiking trails."
    }
  ],
  beach: [
    {
      id: 1,
      title: "Gradishte Beach",
      location: "Southeast Shore",
      rating: 4.5,
      reviews: 187,
      duration: "3-6 hours",
      image: "https://images.unsplash.com/photo-1660800821474-9cc2f43a45c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGxha2UlMjBiZWFjaCUyMHN1bW1lciUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "Free",
      description: "Crystal clear waters and pebble beach."
    }
  ]
};

interface CategoryDetailPageProps {
  category: string;
}

export function CategoryDetailPage({ category }: CategoryDetailPageProps) {
  const { t } = useLanguage();
  const { goBack } = useNavigation();
  
  const items = categoryData[category] || [];
  const categoryTitle = t(`categories.${category}`);

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
          <h1 className="text-lg font-semibold text-gray-900">{categoryTitle}</h1>
        </div>
      </div>

      {/* Items List */}
      <div className="px-4 py-6">
        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
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
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-3 w-3 text-gray-400" />
                    <span className="text-sm text-gray-600">{item.location}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
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
                    
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}