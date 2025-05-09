import React from 'react';

import Category from '@/components/layout/Category';
import { MasterTemplate } from '@/templates/MasterTemplate';

const NewFeeds = () => (
  <MasterTemplate>
    <aside className="fixed left-0 top-[var(--header-height)] h-screen w-1/5 bg-base-200 p-2">
      {/* Left Sidebar */}
      <Category />
    </aside>
    <main className="mx-[25%] flex-1 overflow-y-auto p-4">
      <div style={{ height: '3000px' }}>New Feeds</div>
    </main>
    <aside className="fixed right-0 top-[var(--header-height)] h-screen w-1/5 bg-base-200 p-4">
      {/* Right Sidebar */}
    </aside>
  </MasterTemplate>
);

export default NewFeeds;
