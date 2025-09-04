import { FeaturedCard } from "./FeaturedCard";

const featuredAttractions = [
  {
    id: 1,
    title: "Saint Sofia Church",
    location: "Old Town",
    rating: 4.7,
    reviews: 892,
    duration: "1-2 hours",
    image: "https://images.unsplash.com/photo-1603350563459-adf690ccc55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNodXJjaCUyMG1vbmFzdGVyeSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTcwMTY2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "Free"
  },
  {
    id: 2,
    title: "Traditional Cuisine Tour",
    location: "City Center",
    rating: 4.9,
    reviews: 456,
    duration: "3-4 hours",
    image: "https://images.unsplash.com/photo-1689245780587-a9a6725718b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhbGthbnMlMjByZXN0YXVyYW50JTIwZm9vZHxlbnwxfHx8fDE3NTcwMTY2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$45"
  },
  {
    id: 3,
    title: "Hiking & Nature Trail",
    location: "Galicica National Park",
    rating: 4.8,
    reviews: 623,
    duration: "4-6 hours",
    image: "https://images.unsplash.com/photo-1683044414176-0e0d42b6fddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMG5hdHVyZSUyMHRyYWlsfGVufDF8fHx8MTc1NzAxNjYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$25"
  }
];

export function FeaturedSection() {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4 px-4">
        <h3 className="text-lg font-semibold text-gray-900">Featured Attractions</h3>
        <button className="text-blue-600 text-sm font-medium">See all</button>
      </div>
      
      <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide">
        {featuredAttractions.map((attraction) => (
          <FeaturedCard
            key={attraction.id}
            title={attraction.title}
            location={attraction.location}
            rating={attraction.rating}
            reviews={attraction.reviews}
            duration={attraction.duration}
            image={attraction.image}
            price={attraction.price}
          />
        ))}
      </div>
    </div>
  );
}