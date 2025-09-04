import { Phone, Navigation, Info, Share } from "lucide-react";

const quickActions = [
  { id: 1, label: "Emergency", icon: Phone, color: "bg-red-100 text-red-600" },
  { id: 2, label: "Directions", icon: Navigation, color: "bg-blue-100 text-blue-600" },
  { id: 3, label: "Tourist Info", icon: Info, color: "bg-green-100 text-green-600" },
  { id: 4, label: "Share", icon: Share, color: "bg-purple-100 text-purple-600" }
];

export function QuickActions() {
  return (
    <div className="px-4 mt-6 mb-20">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <button
              key={action.id}
              className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`p-2 rounded-lg ${action.color}`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <span className="font-medium text-gray-900">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}