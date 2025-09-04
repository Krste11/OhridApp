import { Search, Filter, MapPin, Star, Clock } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigation } from "../../contexts/NavigationContext";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const allExploreItems = [
  {
    id: 1,
    title: "Saint Sofia Church",
    category: "Churches",
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
    title: "Antiko Restaurant",
    category: "Restaurants",
    location: "City Center",
    rating: 4.8,
    reviews: 456,
    duration: "2-3 hours",
    image: "https://images.unsplash.com/photo-1595185534067-3e2b101f085c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMHRyYWRpdGlvbmFsJTIwcmVzdGF1cmFudCUyMG1hY2Vkb25pYXxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$25-40",
    description: "Traditional Macedonian cuisine with lake views."
  },
  {
    id: 3,
    title: "Samuil's Fortress",
    category: "Museums",
    location: "Old Town",
    rating: 4.8,
    reviews: 623,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1618394969337-cc43d17c5a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGZvcnRyZXNzJTIwc2FtdWVsJTIwZ2FsaWNpY2ElMjBwYXJrfGVufDF8fHx8MTc1NzAxNjgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$15",
    description: "Medieval fortress with panoramic views of Lake Ohrid."
  },
  {
    id: 4,
    title: "Galicica National Park",
    category: "Nature",
    location: "Mountains",
    rating: 4.8,
    reviews: 234,
    duration: "4-8 hours",
    image: "https://images.unsplash.com/photo-1659364917288-2ff9bb306c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNlZG9uaWElMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBnYWxpY2ljYSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$10",
    description: "Stunning mountain views and hiking trails."
  },
  {
    id: 5,
    title: "Gradishte Beach",
    category: "Beach",
    location: "Southeast Shore",
    rating: 4.5,
    reviews: 187,
    duration: "3-6 hours",
    image: "https://images.unsplash.com/photo-1660800821474-9cc2f43a45c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGxha2UlMjBiZWFjaCUyMHN1bW1lciUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "Free",
    description: "Crystal clear waters and pebble beach."
  },
  {
    id: 6,
    title: "St. Naum Monastery",
    category: "Churches",
    location: "South Ohrid",
    rating: 4.9,
    reviews: 543,
    duration: "2-3 hours",
    image: "https://images.unsplash.com/photo-1687294087548-eeff52ddfb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$5",
    description: "Beautiful monastery complex with peacocks and springs."
  }
];

const categories = ["All", "Churches", "Restaurants", "Nature", "Beach", "Museums", "Culture"];

export function ExplorePage() {
  const { t } = useLanguage();
  const { setCurrentPage } = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = allExploreItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4 sticky top-0 z-50">
        <h1 className="text-xl font-semibold text-gray-900 mb-3">{t('nav.explore')}</h1>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder={t('search.placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-50 border-gray-200 h-10"
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">
            {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'} found
          </p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex">
                <div className="w-24 h-24 flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      
                      <div className="flex items-center gap-1 mb-2">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        <span className="text-sm text-gray-600">{item.location}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-blue-600 font-medium">{item.category}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{item.rating}</span>
                          <span className="text-sm text-gray-500">({item.reviews})</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-400" />
                          <span className="text-sm text-gray-600">{item.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900 mb-2">{item.price}</div>
                      <Button size="sm" className="text-xs">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No results found for your search.</p>
            <p className="text-sm text-gray-400">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}