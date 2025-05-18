import type { Dispatch, SetStateAction } from 'react';

export interface PaginateContextType {
  PAGINATE_LIMIT: number
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}
