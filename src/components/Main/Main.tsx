import React from 'react';

import Paintings from '@/components/Paintings/Paintings';
import SearchPainting from '@/components/Search/Search';
import { PaginateProvider, SearchProvider } from '@/сontext';

const Main: React.FC = (): React.ReactNode => {
  return (
    <>
      <main>
        <PaginateProvider>
          <SearchProvider>
            <SearchPainting />
            <Paintings />
          </SearchProvider>
        </PaginateProvider>
      </main>
    </>
  );
};

export default Main;
