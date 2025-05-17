import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext } from 'react';

export interface SearchContextType {
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextType | null>(null);

export function useSearch(): SearchContextType {
  const context = useContext(SearchContext);
  if (context === null) {
    throw new Error('Error with context search');
  }

  return context;
}
