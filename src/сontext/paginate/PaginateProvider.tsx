import type { PaginateContextType } from '@/types/contexts/PaginateContextType';
import React, { useMemo, useState } from 'react';

import { PAGINATE_LIMIT } from '@/consts';
import { PaginateContext } from './context';

export function PaginateProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginateContextData: PaginateContextType = useMemo(() => {
    return { currentPage, PAGINATE_LIMIT, setCurrentPage };
  }, [currentPage]);

  return (
    <PaginateContext.Provider value={paginateContextData}>{children}</PaginateContext.Provider>
  );
}
