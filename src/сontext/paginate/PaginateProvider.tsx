import type { PaginateContextType } from './context';
import React, { useMemo, useState } from 'react';
import { PaginateContext } from './context';

export function PaginateProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginateContextData: PaginateContextType = useMemo(() => {
    return { currentPage, setCurrentPage };
  }, [currentPage]);

  return (
    <PaginateContext.Provider value={paginateContextData}>{children}</PaginateContext.Provider>
  );
}
