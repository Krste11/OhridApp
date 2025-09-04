import { Search, Menu, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="bg-white shadow-sm px-4 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-blue-600" />
          <h1 className="text-lg font-semibold text-gray-900">Ohrid Guide</h1>
        </div>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          placeholder="Search attractions, restaurants..." 
          className="pl-10 bg-gray-50 border-gray-200 h-10"
        />
      </div>
    </header>
  );
}