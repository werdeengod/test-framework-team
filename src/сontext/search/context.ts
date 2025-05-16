import type { SearchContextType } from '@/types/SearchType';
import { createContext } from 'react';

export const SearchContext = createContext<SearchContextType | null>(null);
