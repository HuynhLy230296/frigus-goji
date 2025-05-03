import React from 'react';

import Sidebar from '@/components/layout/Category';
import Header from '@/components/layout/Header';

const MasterTemplate = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="mx-auto">
        <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
          <Header />
        </header>
        <div className="mx-auto flex pt-[var(--header-height)]">
          <aside className="fixed left-0 top-[var(--header-height)] h-screen w-1/5 bg-base-200 p-2">
            {/* Left Sidebar */}
            <Sidebar />
          </aside>
          <main className="mx-[25%] flex-1 overflow-y-auto p-4">
            {/* Main Content */}
            {props.children}
          </main>
          <aside className="fixed right-0 top-[var(--header-height)] h-screen w-1/5 bg-base-200 p-4">
            {/* Right Sidebar */}
            <div>Right Sidebar</div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export { MasterTemplate };
