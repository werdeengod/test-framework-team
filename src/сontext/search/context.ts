import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export interface SearchContextType {
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextType | null>(null);
