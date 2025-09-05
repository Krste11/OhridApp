import { 
  Church, 
  Mountain, 
  UtensilsCrossed, 
  Camera, 
  Waves, 
  TreePine,
  Building,
  Music
} from "lucide-react";

const categories = [
  { id: 1, name: "Churches", icon: Church, color: "bg-blue-100 text-blue-600" },
  { id: 2, name: "Nature", icon: Mountain, color: "bg-green-100 text-green-600" },
  { id: 3, name: "Restaurants", icon: UtensilsCrossed, color: "bg-orange-100 text-orange-600" },
  { id: 4, name: "Photography", icon: Camera, color: "bg-purple-100 text-purple-600" },
  { id: 5, name: "Beach", icon: Waves, color: "bg-cyan-100 text-cyan-600" },
  { id: 6, name: "Parks", icon: TreePine, color: "bg-emerald-100 text-emerald-600" },
  { id: 7, name: "Museums", icon: Building, color: "bg-red-100 text-red-600" },
  { id: 8, name: "Culture", icon: Music, color: "bg-pink-100 text-pink-600" }
];

export function CategoryGrid() {
  return (
    <div className="px-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Explore Categories</h3>
        <button className="text-blue-600 text-sm font-medium">See all</button>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              className="flex flex-col items-center p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`p-2 rounded-lg ${category.color} mb-2`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <span className="text-xs text-gray-700 text-center leading-tight">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}