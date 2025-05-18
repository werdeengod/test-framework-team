import type { Dispatch, SetStateAction } from 'react';

export interface SearchContextType {
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}
