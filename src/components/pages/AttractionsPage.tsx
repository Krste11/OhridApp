import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigation } from "../../contexts/NavigationContext";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const allAttractions = [
  {
    id: 1,
    titleKey: "attraction.sofia.title",
    locationKey: "attraction.sofia.location",
    rating: 4.7,
    reviews: 892,
    durationKey: "duration.1-2",
    image:
      "https://images.unsplash.com/photo-1703356294065-e3d60f038a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMG9sZCUyMHRvd24lMjBhcmNoaXRlY3R1cmUlMjBtZWRpZXZhbHxlbnwxfHx8fDE3NTcwMTY4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    priceKey: "common.free",
    description:
      "Historic 11th-century church with Byzantine architecture and ancient frescoes.",
  },
  {
    id: 2,
    titleKey: "attraction.samuil.title",
    locationKey: "attraction.samuil.location",
    rating: 4.8,
    reviews: 623,
    durationKey: "duration.1-2",
    image:
      "https://images.unsplash.com/photo-1618394969337-cc43d17c5a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGZvcnRyZXNzJTIwc2FtdWVsJTIwZ2FsaWNpY2ElMjBwYXJrfGVufDF8fHx8MTc1NzAxNjgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$15",
    description:
      "Medieval fortress with panoramic views of Lake Ohrid and the old town.",
  },
  {
    id: 3,
    titleKey: "attraction.hiking.title",
    locationKey: "attraction.hiking.location",
    rating: 4.6,
    reviews: 324,
    durationKey: "duration.4-6",
    image:
      "https://images.unsplash.com/photo-1659364917288-2ff9bb306c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNlZG9uaWElMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBnYWxpY2ljYSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$25",
    description:
      "Scenic hiking trails through Galicica National Park with breathtaking mountain views.",
  },
  {
    id: 4,
    title: "Bay of Bones Museum",
    location: "Lake Ohrid",
    rating: 4.5,
    reviews: 267,
    duration: "1-2 hours",
    image:
      "https://images.unsplash.com/photo-1660800821474-9cc2f43a45c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGxha2UlMjBiZWFjaCUyMHN1bW1lciUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$8",
    description:
      "Prehistoric pile-dwelling settlement reconstruction on the lake.",
  },
  {
    id: 5,
    title: "St. Naum Monastery",
    location: "South Ohrid",
    rating: 4.9,
    reviews: 543,
    duration: "2-3 hours",
    image:
      "https://images.unsplash.com/photo-1687294087548-eeff52ddfb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU3MDE3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$5",
    description:
      "Beautiful monastery complex with peacocks and crystal-clear springs.",
  },
  {
    id: 6,
    title: "Old Bazaar",
    location: "City Center",
    rating: 4.4,
    reviews: 412,
    duration: "2-3 hours",
    image:
      "https://images.unsplash.com/photo-1707635569223-c759b3b0501b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaHJpZCUyMHJlc3RhdXJhbnQlMjB0cmFkaXRpb25hbCUyMGZvb2QlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1NzAxNzA2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    priceKey: "common.free",
    description:
      "Historic marketplace with traditional crafts and local products.",
  },
];

export function AttractionsPage() {
  const { t } = useLanguage();
  const { goBack } = useNavigation();

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
          <h1 className="text-lg font-semibold text-gray-900">
            {t("featured.title")}
          </h1>
        </div>
      </div>

      {/* Attractions List */}
      <div className="px-4 py-6">
        <div className="space-y-4 relative overflow-x-auto">
          {allAttractions.map((attraction) => (
            <div
              key={attraction.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={attraction.image}
                  alt={
                    attraction.titleKey
                      ? t(attraction.titleKey)
                      : attraction.title!
                  }
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium">
                  {attraction.priceKey
                    ? t(attraction.priceKey)
                    : attraction.price}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {attraction.titleKey
                    ? t(attraction.titleKey)
                    : attraction.title}
                </h3>

                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="h-3 w-3 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {attraction.locationKey
                      ? t(attraction.locationKey)
                      : attraction.location}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {attraction.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {attraction.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({attraction.reviews})
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {attraction.durationKey
                          ? t(attraction.durationKey)
                          : attraction.duration}
                      </span>
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
      </div>
    </div>
  );
}