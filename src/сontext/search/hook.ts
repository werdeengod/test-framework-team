import type { SearchContextType } from './context';
import { useContext } from 'react';
import { SearchContext } from './context';

export function useSearch(): SearchContextType {
  const context = useContext(SearchContext);
  if (context === null) {
    throw new Error('Error with context search');
  }

  return context;
}
