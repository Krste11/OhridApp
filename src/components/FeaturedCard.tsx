import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigation } from "../contexts/NavigationContext";

interface FeaturedCardProps {
  id?: number;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  duration: string;
  image: string;
  price?: string;
  category?: string;
}

export function FeaturedCard({ 
  id,
  title, 
  location, 
  rating, 
  reviews, 
  duration, 
  image, 
  price,
  category = "Attractions"
}: FeaturedCardProps) {
  const { setAttractionDetail, setCurrentPage } = useNavigation();

  const handleViewDetails = () => {
    const attractionData = {
      id: id || Math.floor(Math.random() * 1000),
      title,
      location,
      category,
      rating,
      reviews,
      duration,
      image,
      price
    };
    setAttractionDetail(attractionData);
    setCurrentPage('attractionDetail');
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden w-72 flex-shrink-0">
      <div className="relative h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {price && (
          <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-lg">
            <span className="text-sm font-semibold text-gray-900">{price}</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h4 className="font-semibold text-gray-900 mb-1 leading-tight">{title}</h4>
        
        <div className="flex items-center gap-1 mb-2">
          <MapPin className="h-3 w-3 text-gray-400" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-gray-400" />
            <span className="text-sm text-gray-600">{duration}</span>
          </div>
        </div>

        <Button 
          onClick={handleViewDetails}
          className="w-full h-8 text-sm"
          size="sm"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}