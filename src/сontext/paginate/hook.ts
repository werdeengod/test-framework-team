import type { PaginateContextType } from './context';
import { useContext } from 'react';
import { PaginateContext } from './context';

export function usePaginate(): PaginateContextType {
  const context = useContext(PaginateContext);
  if (context === null) {
    throw new Error('Error with context search');
  }

  return context;
}
