import React from 'react';

import Paintings from '@/components/Paintings/Paintings';
import SearchPainting from '@/components/Search/Search';
import { PaginateProvider } from '@/сontext/paginate';
import { SearchProvider } from '@/сontext/search';

const Main: React.FC = (): React.ReactNode => {
  return (
    <>
      <main>
        <SearchProvider>
          <PaginateProvider>
            <SearchPainting />
            <Paintings />
          </PaginateProvider>
        </SearchProvider>
      </main>
    </>
  );
};

export default Main;
