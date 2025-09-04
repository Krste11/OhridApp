import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CategoryGrid } from "./components/CategoryGrid";
import { FeaturedSection } from "./components/FeaturedSection";
import { QuickActions } from "./components/QuickActions";
import { BottomNav } from "./components/BottomNav";
import { LanguageProvider } from "./contexts/LanguageContext";
import { NavigationProvider, useNavigation } from "./contexts/NavigationContext";
import { CategoriesPage } from "./components/pages/CategoriesPage";
import { AttractionsPage } from "./components/pages/AttractionsPage";
import { CategoryDetailPage } from "./components/pages/CategoryDetailPage";
import { ExplorePage } from "./components/pages/ExplorePage";
import { FavoritesPage } from "./components/pages/FavoritesPage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { TouristInfoPage } from "./components/pages/TouristInfoPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pb-20">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Categories */}
        <CategoryGrid />
        
        {/* Featured Attractions */}
        <FeaturedSection />
        
        {/* Quick Actions */}
        <QuickActions />
      </main>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

function AppContent() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'explore':
        return (
          <div className="min-h-screen bg-gray-50">
            <ExplorePage />
            <BottomNav />
          </div>
        );
      case 'favorites':
        return (
          <div className="min-h-screen bg-gray-50">
            <FavoritesPage />
            <BottomNav />
          </div>
        );
      case 'profile':
        return (
          <div className="min-h-screen bg-gray-50">
            <ProfilePage />
            <BottomNav />
          </div>
        );
      case 'categories':
        return <CategoriesPage />;
      case 'attractions':
        return <AttractionsPage />;
      case 'touristInfo':
        return <TouristInfoPage />;
      case 'churches':
      case 'nature':
      case 'restaurants':
      case 'photography':
      case 'beach':
      case 'parks':
      case 'museums':
      case 'culture':
        return <CategoryDetailPage category={currentPage} />;
      default:
        return <HomePage />;
    }
  };

  return renderPage();
}

export default function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </LanguageProvider>
  );
}