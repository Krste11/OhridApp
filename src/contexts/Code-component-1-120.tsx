import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Page = 'home' | 'categories' | 'attractions' | 'restaurants' | 'churches' | 'nature' | 'photography' | 'beach' | 'parks' | 'museums' | 'culture';

interface NavigationContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  goBack: () => void;
  pageHistory: Page[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [currentPage, setCurrentPageState] = useState<Page>('home');
  const [pageHistory, setPageHistory] = useState<Page[]>(['home']);

  const setCurrentPage = (page: Page) => {
    setPageHistory(prev => [...prev, page]);
    setCurrentPageState(page);
  };

  const goBack = () => {
    if (pageHistory.length > 1) {
      const newHistory = pageHistory.slice(0, -1);
      setPageHistory(newHistory);
      setCurrentPageState(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <NavigationContext.Provider value={{ 
      currentPage, 
      setCurrentPage, 
      goBack, 
      pageHistory 
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}