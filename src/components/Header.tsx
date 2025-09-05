import {
  Search,
  Menu,
  MapPin,
  Globe,
  Settings,
  Info,
  HelpCircle,
  Share,
  Download,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { setCurrentPage, setSearchQuery } = useNavigation();
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mk" : "en");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearchQuery.trim()) {
      setSearchQuery(localSearchQuery.trim());
      setCurrentPage("search");
    }
  };

  const handleMenuAction = (action: string) => {
    setIsMenuOpen(false); // Close menu after action
    switch (action) {
      case "settings":
        setCurrentPage("profile");
        break;
      case "help":
        alert("Help & FAQ coming soon!");
        break;
      case "about":
        alert(
          "Ohrid Travel Guide v1.0.0\nMade with ❤️ for travelers",
        );
        break;
      case "share":
        if (navigator.share) {
          navigator.share({
            title: "Ohrid Travel Guide",
            text: "Discover the beauty of Ohrid!",
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
        }
        break;

      case "offline":
        alert("Offline maps feature coming soon!");
        break;
    }
  };

  return (
    <header className="bg-white shadow-sm px-4 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-blue-600" />
          <h1 className="text-lg font-semibold text-gray-900">
            {t("app.title")}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="px-2 py-1 h-8 text-xs font-medium"
          >
            <Globe className="h-3 w-3 mr-1" />
            {language.toUpperCase()}
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="mt-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  {t("app.title")}
                </SheetTitle>
                <SheetDescription>
                  {t("menu.description")}
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-1">
                <button
                  onClick={() => handleMenuAction("settings")}
                  className="flex items-center gap-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Settings className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">Settings</span>
                </button>

                <button
                  onClick={() => handleMenuAction("offline")}
                  className="flex items-center gap-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Download className="h-5 w-5 text-gray-600" />
                  <div>
                    <div className="font-medium">
                      Offline Maps
                    </div>
                    <div className="text-sm text-gray-500">
                      Download for offline use
                    </div>
                  </div>
                </button>

                <div className="border-t border-gray-200 my-4"></div>

                <button
                  onClick={() => handleMenuAction("help")}
                  className="flex items-center gap-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <HelpCircle className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">
                    Help & FAQ
                  </span>
                </button>

                <button
                  onClick={() => handleMenuAction("about")}
                  className="flex items-center gap-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Info className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">About</span>
                </button>

                <button
                  onClick={() => handleMenuAction("share")}
                  className="flex items-center gap-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Share className="h-5 w-5 text-gray-600" />
                  <div>
                    <div className="font-medium">Share App</div>
                    <div className="text-sm text-gray-500">
                      Tell friends about Ohrid
                    </div>
                  </div>
                </button>

                <div className="border-t border-gray-200 my-4"></div>

                {/* <div className="px-3 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Language</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={toggleLanguage}
                      className="px-3 py-1 h-8 text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100"
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      {language === 'en' ? 'English' : 'Македонски'}
                    </Button>
                  </div>
                </div> */}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-center text-xs text-gray-500">
                  Ohrid Travel Guide v1.0.0
                  <br />
                  Made with ❤️ for travelers
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder={t("search.placeholder")}
          value={localSearchQuery}
          onChange={(e) => setLocalSearchQuery(e.target.value)}
          className="pl-10 bg-white border-gray-200 h-10 shadow-sm"
        />
      </form>
    </header>
  );
}