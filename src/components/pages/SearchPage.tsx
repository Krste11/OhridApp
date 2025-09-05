import { useState, useEffect } from 'react';
import { ArrowLeft, Search, MapPin, Star, Clock, Filter } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface SearchResult {
  id: number;
  title: string;
  location: string;
  category: string;
  rating: number;
  reviews: number;
  duration: string;
  image: string;
  price?: string;
}

const mockSearchData: SearchResult[] = [
  {
    id: 1,
    title: "Saint Sofia Church",
    location: "Old Town, Ohrid",
    category: "Churches",
    rating: 4.7,
    reviews: 892,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1703356294065-e3d60f038a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG9sZCUyMHRvd24lMjBhcmNoaXRlY3R1cmUlMjBtZWRpZXZhbHxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Samuel's Fortress",
    location: "Ohrid Hill",
    category: "Museums",
    rating: 4.8,
    reviews: 623,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1618394969337-cc43d17c5a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGZvcnRyZXNzJTIwc2FtdWVsJTIwZ2FsaWNpY2ElMjBwYXJrfGVufDF8fHx8MTc1NzAxNjgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$15"
  },
  {
    id: 3,
    title: "Ohrid Lake Viewpoint",
    location: "Galicica National Park",
    category: "Photography",
    rating: 4.9,
    reviews: 1024,
    duration: "30 mins",
    image: "https://images.unsplash.com/photo-1611845528017-75215e6d662c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG1hY2Vkb25pYSUyMGxha2UlMjBjaHVyY2glMjBtb25hc3Rlcnl8ZW58MXx8fHwxNzU3MDE2ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "Antique Theatre",
    location: "Old Town, Ohrid",
    category: "Culture",
    rating: 4.6,
    reviews: 456,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1687294087548-eeff52ddfb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    title: "Villa Rustica Restaurant",
    location: "Ohrid Center",
    category: "Restaurants",
    rating: 4.9,
    reviews: 456,
    duration: "2-3 hours",
    image: "https://images.unsplash.com/photo-1595185534067-3e2b101f085c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMHRyYWRpdGlvbmFsJTIwcmVzdGF1cmFudCUyMG1hY2Vkb25pYXxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$45"
  },
  {
    id: 6,
    title: "Galicica National Park",
    location: "Galicica Mountains",
    category: "Nature",
    rating: 4.8,
    reviews: 721,
    duration: "4+ hours",
    image: "https://images.unsplash.com/photo-1659364917288-2ff9bb306c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNlZG9uaWElMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBnYWxpY2ljYSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  }
];

interface SearchPageProps {
  initialQuery?: string;
}

export function SearchPage({ initialQuery = '' }: SearchPageProps) {
  const { setCurrentPage, setAttractionDetail } = useNavigation();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = mockSearchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (selectedCategory !== 'all') {
        setFilteredResults(results.filter(item => 
          item.category.toLowerCase() === selectedCategory.toLowerCase()
        ));
      } else {
        setFilteredResults(results);
      }
    } else {
      setFilteredResults([]);
    }
  }, [searchQuery, selectedCategory]);

  const handleResultClick = (result: SearchResult) => {
    setAttractionDetail(result);
    setCurrentPage('attractionDetail');
  };

  const categories = ['All', 'Churches', 'Museums', 'Photography', 'Culture', 'Restaurants', 'Nature', 'Parks', 'Beach'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-3 sticky top-0 z-50 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage('home')}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-900">Search</h1>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search attractions, restaurants, places..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white border-gray-200 h-10 shadow-sm"
            autoFocus
          />
        </div>
      </header>

      <main className="pb-20">
        {/* Category Filter */}
        {searchQuery.trim() && (
          <div className="px-4 py-3 border-b border-gray-200 bg-white">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category.toLowerCase() || (category === 'All' && selectedCategory === 'all') ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category === 'All' ? 'all' : category.toLowerCase())}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        <div className="px-4">
          {searchQuery.trim() === '' && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-lg font-medium text-gray-900 mb-2">Search for places</h2>
              <p className="text-gray-600 text-sm">
                Find attractions, restaurants, and activities in Ohrid
              </p>
            </div>
          )}

          {searchQuery.trim() && filteredResults.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-lg font-medium text-gray-900 mb-2">No results found</h2>
              <p className="text-gray-600 text-sm">
                Try searching with different keywords
              </p>
            </div>
          )}

          {filteredResults.length > 0 && (
            <div className="space-y-4 mt-4">
              <p className="text-sm text-gray-600">
                Found {filteredResults.length} result{filteredResults.length > 1 ? 's' : ''}
              </p>
              
              {filteredResults.map((result) => (
                <div
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                          {result.title}
                        </h3>
                        {result.price && (
                          <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded">
                            {result.price}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1 mb-2">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-600">{result.location}</span>
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded ml-2">
                          {result.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium text-gray-900">{result.rating}</span>
                          <span className="text-xs text-gray-600">({result.reviews})</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-600">{result.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}