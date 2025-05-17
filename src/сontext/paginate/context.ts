import { createContext } from 'react';

export interface PaginateContextType {
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const PaginateContext = createContext<PaginateContextType | null>(null);
