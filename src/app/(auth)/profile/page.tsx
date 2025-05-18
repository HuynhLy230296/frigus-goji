import React from 'react';

import CheckInLocation from '@/app/(auth)/profile/components/CheckInLocation';
import CreateYourTour from '@/app/(auth)/profile/components/CreateYourTour';
import IntroComponent from '@/app/(auth)/profile/components/IntroComponent';

const Profile = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Left Column (Sidebar) */}
        <div className="col-span-1 md:col-span-1">
          {/* You can place components like Intro, Photos, Friends summary here */}
          <div className="rounded-lg bg-white p-4 shadow">
            <IntroComponent />
          </div>
          <div className="mt-4 rounded-lg bg-white p-4 shadow">
            <CheckInLocation />
          </div>
          <div className="mt-4 rounded-lg bg-white p-4 shadow">
            <h2 className="mb-2 text-xl font-semibold">Photos</h2>
            {/* Placeholder for photo grid */}
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} className="aspect-square rounded bg-gray-200">
                  {/* You can use Next/Image here for actual photos */}
                </div>
              ))}
            </div>
          </div>
          {/* Add more sidebar components as needed */}
        </div>

        {/* Right Column (Main Content Feed) */}
        <div className="col-span-1 md:col-span-2">
          {/* This is where posts, activity feed, etc., would go */}
          <CreateYourTour />
          <div className="mt-4 rounded-lg bg-white p-4 shadow">
            <h2 className="mb-2 text-xl font-semibold">Posts</h2>
            {/* Placeholder for posts feed */}
            <div className="space-y-4">
              <div className="rounded bg-gray-200 p-4">Post 1</div>
              <div className="rounded bg-gray-200 p-4">Post 2</div>
            </div>
          </div>
          {/* Add more feed components as needed */}
        </div>
      </div>
    </div>
  );
};
export default Profile;
