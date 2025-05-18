import type { SearchContextType } from '@/types/contexts/SearchContextType';
import { createContext, useContext } from 'react';

export const SearchContext = createContext<SearchContextType | null>(null);

export function useSearch(): SearchContextType {
  const context = useContext(SearchContext);
  if (context === null) {
    throw new Error('Error with context search');
  }

  return context;
}
