import { ArrowLeft, Phone, MapPin, Clock, Globe, Wifi, CreditCard, Camera, Shield } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigation } from "../../contexts/NavigationContext";
import { Button } from "../ui/button";

const infoSections = [
  {
    title: "Emergency Contacts",
    icon: Phone,
    items: [
      { label: "Police", value: "192", type: "phone" },
      { label: "Fire Department", value: "193", type: "phone" },
      { label: "Medical Emergency", value: "194", type: "phone" },
      { label: "Tourist Police", value: "+389 46 252 875", type: "phone" }
    ]
  },
  {
    title: "Tourist Information Centers",
    icon: MapPin,
    items: [
      { label: "Main Tourist Center", value: "Car Samoil Street 42", type: "address" },
      { label: "Old Bazaar Info Point", value: "Kej Makedonija", type: "address" },
      { label: "Airport Info Desk", value: "St. Paul the Apostle Airport", type: "address" }
    ]
  },
  {
    title: "Opening Hours",
    icon: Clock,
    items: [
      { label: "Tourist Centers", value: "9:00 - 18:00 (Mon-Sun)" },
      { label: "Churches & Museums", value: "9:00 - 17:00" },
      { label: "Restaurants", value: "11:00 - 23:00" },
      { label: "Shops", value: "9:00 - 20:00" }
    ]
  },
  {
    title: "Useful Information",
    icon: Globe,
    items: [
      { label: "Currency", value: "Macedonian Denar (MKD)" },
      { label: "Language", value: "Macedonian, Albanian" },
      { label: "Time Zone", value: "CET (UTC+1)" },
      { label: "Country Code", value: "+389" }
    ]
  },
  {
    title: "Services",
    icon: Wifi,
    items: [
      { label: "Free WiFi", value: "Available in most cafes and restaurants" },
      { label: "ATMs", value: "Widely available in city center" },
      { label: "Card Payments", value: "Accepted in most establishments" },
      { label: "Taxi Services", value: "Available 24/7" }
    ]
  },
  {
    title: "Important Tips",
    icon: Shield,
    items: [
      { label: "Photography", value: "Ask permission before photographing people" },
      { label: "Dress Code", value: "Modest dress required in churches" },
      { label: "Tipping", value: "10% is standard in restaurants" },
      { label: "Water", value: "Tap water is safe to drink" }
    ]
  }
];

export function TouristInfoPage() {
  const { t } = useLanguage();
  const { goBack } = useNavigation();

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleAddress = (address: string) => {
    const encodedAddress = encodeURIComponent(`${address}, Ohrid, North Macedonia`);
    window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank');
  };

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
          <h1 className="text-lg font-semibold text-gray-900">Tourist Information</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {infoSections.map((section, sectionIndex) => {
          const IconComponent = section.icon;
          return (
            <div key={sectionIndex} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2">
                  <IconComponent className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">{section.title}</h3>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 mb-1">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.value}</div>
                      </div>
                      
                      {item.type === 'phone' && (
                        <Button
                          size="sm"
                          onClick={() => handleCall(item.value)}
                          className="ml-3"
                        >
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                      )}
                      
                      {item.type === 'address' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAddress(item.value)}
                          className="ml-3"
                        >
                          <MapPin className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Weather Widget */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Current Weather</h3>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">22°C</div>
              <div className="text-sm text-gray-600">Sunny</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Wind: 5 km/h</div>
              <div className="text-sm text-gray-600">Humidity: 65%</div>
            </div>
          </div>
        </div>

        {/* Download Offline Maps */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <h3 className="font-semibold text-blue-900 mb-2">Offline Maps Available</h3>
          <p className="text-sm text-blue-700 mb-3">
            Download offline maps to navigate Ohrid without internet connection.
          </p>
          <Button variant="outline" size="sm" className="border-blue-200 text-blue-700 hover:bg-blue-100">
            Download Maps
          </Button>
        </div>
      </div>
    </div>
  );
}