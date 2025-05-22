'use client';

import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  const NAVIGATION_TABS = [
    { name: 'Tours', href: '/profile' },
    { name: 'About', href: '/profile/about' },
    { name: 'Photos', href: '/profile/photos' },
    { name: 'Videos', href: '/profile/videos' },
  ];

  return (
    <div className=" w-full bg-gray-100 pt-[var(--header-height)]">
      <div className="w-full bg-white shadow">
        <div className="mx-auto w-[1250px] ">
          {/* Cover Photo Section */}
          <div className="relative h-[467px] w-full">
            <Image
              src="/assets/images/cover-photo.jpg"
              alt="Cover photo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="container px-8">
            <div className="relative -mt-16 flex flex-col pb-4 pt-2 md:-mt-24 md:flex-row md:items-end md:space-x-6">
              {/* Profile Picture */}
              <div className="relative size-48 rounded-full border-4 border-white">
                {user?.imageUrl && (
                  <Image
                    src={user.imageUrl}
                    alt="Profile picture"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                )}
              </div>

              {/* User Info & Actions */}
              <div className="flex flex-col items-center md:-mt-8 md:flex-1 md:items-start">
                <h1 className="text-3xl font-bold text-gray-800">
                  {user?.firstName} {user?.lastName}
                </h1>
                {/* You can add friend count, mutual friends, etc. here */}
                <p className="text-md text-gray-500">1.2k Followers</p>
              </div>

              {/* Action Buttons (e.g., Add Friend, Message) */}
              <div className="mt-4 flex space-x-2 md:mt-0">
                <button
                  type="button"
                  className="rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-600"
                >
                  Follow
                </button>
                <button
                  type="button"
                  className="rounded-md bg-gray-200 px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-300"
                >
                  <i className="fas fa-edit mr-2" />
                  Edit profile
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="mt-2 border-t border-gray-200">
              <ul className="flex h-14 items-center space-x-6 text-lg text-gray-600">
                {NAVIGATION_TABS.map((tab) => (
                  <li key={tab.name} className="cursor-pointer">
                    <a
                      href={tab.href}
                      className="border-b-2 border-transparent pb-3 hover:border-blue-500 hover:text-blue-500"
                    >
                      {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[1250px]">
        {/* Main Content Area */}
        <main className="container p-4">{children}</main>
      </div>
    </div>
  );
};

export default ProfileLayout;
