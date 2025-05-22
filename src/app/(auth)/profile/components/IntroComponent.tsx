'use client';

import React, { useState } from 'react';

const IntroComponent = () => {
  const [profile] = useState({
    bio: 'This is a sample bio.',
    currentLocation: 'Ho Chi Minh City, Vietnam',
    createdAt: 'May 2025',
  });
  return (
    <div className="flex h-full flex-col justify-center">
      <h1 className="text-xl font-bold">Intro</h1>
      <p className="mx-auto mt-4 text-lg">{profile.bio}</p>
      <div className="mt-4 flex flex-col space-y-2">
        <button
          type="button"
          className="rounded-md bg-gray-200 px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-300"
        >
          Edit bio
        </button>
      </div>
      <p className="mt-4 text-lg">
        Lives in <b>{profile.currentLocation}</b>
      </p>
      <p className="mt-4 text-lg">Joined {profile.createdAt}</p>
    </div>
  );
};
export default IntroComponent;
