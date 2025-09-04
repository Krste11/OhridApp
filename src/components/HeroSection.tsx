import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="relative h-64 overflow-hidden rounded-xl mx-4 mt-4">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1611845528017-75215e6d662c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG1hY2Vkb25pYSUyMGxha2UlMjBjaHVyY2glMjBtb25hc3Rlcnl8ZW58MXx8fHwxNzU3MDE2ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Beautiful view of Ohrid Lake with churches"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="flex items-center gap-1 mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm opacity-90">{t('hero.location')}</span>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">{t('hero.title')}</h2>
        <p className="text-sm opacity-90 mb-3">
          {t('hero.description')}
        </p>
        
        <div className="flex items-center gap-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm ml-1">4.8 (2.1k {t('hero.reviews')})</span>
        </div>
      </div>
    </div>
  );
}