import { createContext, useContext } from 'react';

export interface PaginateContextType {
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const PaginateContext = createContext<PaginateContextType | null>(null);

export function usePaginate(): PaginateContextType {
  const context = useContext(PaginateContext);
  if (context === null) {
    throw new Error('Error with context search');
  }

  return context;
}
