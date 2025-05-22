import React from 'react';

import Category from '@/components/layout/Category';

const NewFeeds = () => (
  <div className="flex w-full overflow-y-auto">
    <aside className="fixed left-0 top-[var(--header-height)] h-screen w-1/5 bg-base-200 p-2">
      {/* Left Sidebar */}
      <Category />
    </aside>
    <main className="mx-[25%] flex-1 bg-white pt-[var(--header-height)]">
      <div className="p-8">
        <div style={{ height: '3000px' }}>New Feeds</div>
      </div>
    </main>
    <aside className="fixed right-0 top-[var(--header-height)] h-screen w-1/5 bg-base-200 p-4">
      {/* Right Sidebar */}
    </aside>
  </div>
);

export default NewFeeds;
