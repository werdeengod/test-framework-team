import type { SearchContextType } from '@/types/SearchType';
import React, { useMemo, useState } from 'react';
import { SearchContext } from './context';

export function SearchProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchContextData: SearchContextType = useMemo(() => {
    return { searchQuery, setSearchQuery };
  }, [searchQuery]);

  return <SearchContext.Provider value={searchContextData}>{children}</SearchContext.Provider>;
}
