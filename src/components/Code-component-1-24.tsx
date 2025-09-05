import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Star } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative h-64 overflow-hidden rounded-xl mx-4 mt-4">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1718995992970-753fb2b2b472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGxha2UlMjBtYWNlZG9uaWElMjBiZWF1dGlmdWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU3MDE2NjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Beautiful view of Ohrid Lake"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="flex items-center gap-1 mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm opacity-90">Ohrid, North Macedonia</span>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">Discover Ohrid</h2>
        <p className="text-sm opacity-90 mb-3">
          UNESCO World Heritage site with pristine lakes and rich history
        </p>
        
        <div className="flex items-center gap-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm ml-1">4.8 (2.1k reviews)</span>
        </div>
      </div>
    </div>
  );
}