import React from 'react';

import Header from '@/components/layout/Header';

const MasterTemplate = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="mx-auto">
        <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
          <Header />
        </header>
        <div className="mx-auto flex bg-base-200">{props.children}</div>
      </div>
    </div>
  );
};

export { MasterTemplate };
