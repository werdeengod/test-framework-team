import React from 'react';

import Paintings from '@/components/Paintings/Paintings';
import SearchPainting from '@/components/Search/Search';
import { SearchProvider } from '@/сontext/search';

const Main: React.FC = (): React.ReactNode => {
  return (
    <>
      <main>
        <SearchProvider>
          <SearchPainting />
          <Paintings />
        </SearchProvider>
      </main>
    </>
  );
};

export default Main;
