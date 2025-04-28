import React from 'react';

import Header from '@/components/layout/Header';

const MasterTemplate = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="mx-auto">
        <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
          <Header />
        </header>
        <main>{props.children}</main>
      </div>
      <footer className="border-t border-gray-300 py-8 text-center text-sm" />
    </div>
  );
};

export { MasterTemplate };
