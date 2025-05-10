import React from 'react';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  // Placeholder data - replace with actual data fetching
  const user = {
    name: 'HuynhLy230296',
    coverPhotoUrl: 'https://via.placeholder.com/1200x400?text=Cover+Photo', // Replace with actual URL
    profilePictureUrl: 'https://via.placeholder.com/168x168?text=Profile+Pic', // Replace with actual URL
  };

  return (
    <div className="mx-auto w-[1250px] bg-gray-100">
      {/* Cover Photo Section */}
      <div className="relative h-64 w-full md:h-96">
        {/* <Image */}
        {/*  src={user.coverPhotoUrl} */}
        {/*  alt="Cover photo" */}
        {/*  layout="fill" */}
        {/*  objectFit="cover" */}
        {/*  priority */}
        {/* /> */}
      </div>

      {/* Profile Header Section */}
      <div className="bg-white shadow">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="relative -mt-16 flex flex-col items-center pb-4 pt-2 md:-mt-24 md:flex-row md:items-end md:space-x-6">
            {/* Profile Picture */}
            <div className="relative size-32 rounded-full border-4 border-white md:size-44">
              {/* <Image */}
              {/*  src={user.profilePictureUrl} */}
              {/*  alt="Profile picture" */}
              {/*  layout="fill" */}
              {/*  objectFit="cover" */}
              {/*  className="rounded-full" */}
              {/* /> */}
            </div>

            {/* User Info & Actions */}
            <div className="mt-4 flex flex-col items-center md:mt-0 md:flex-1 md:items-start">
              <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
                {user.name}
              </h1>
              {/* You can add friend count, mutual friends, etc. here */}
              <p className="text-sm text-gray-500">1.2k Friends</p>
            </div>

            {/* Action Buttons (e.g., Add Friend, Message) */}
            <div className="mt-4 flex space-x-2 md:mt-0">
              <button
                type="button"
                className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
              >
                Add Friend
              </button>
              <button
                type="button"
                className="rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300"
              >
                Message
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="mt-2 border-t border-gray-200">
            <ul className="flex h-14 items-center space-x-6 text-sm font-medium text-gray-600">
              <li className="cursor-pointer border-b-2 border-blue-500 pb-3 pt-4 text-blue-500">
                Posts
              </li>
              <li className="cursor-pointer pb-3 pt-4 hover:text-gray-800">
                About
              </li>
              <li className="cursor-pointer pb-3 pt-4 hover:text-gray-800">
                Friends
              </li>
              <li className="cursor-pointer pb-3 pt-4 hover:text-gray-800">
                Photos
              </li>
              <li className="cursor-pointer pb-3 pt-4 hover:text-gray-800">
                Videos
              </li>
              {/* More tabs can be added here */}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="container mx-auto mt-4 max-w-5xl p-4">
        {/*
          The children prop will render the page content here.
          For example, if this layout is used for `src/app/(auth)/profile/page.tsx`,
          the content of that page will be displayed below.
        */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Left Sidebar (Intro, Photos, Friends) - Optional */}
          <div className="col-span-1 hidden md:block">
            <div className="rounded-lg bg-white p-4 shadow">
              <h2 className="mb-2 text-xl font-semibold">Intro</h2>
              <p className="text-sm text-gray-600">
                Bio, work, education, location...
              </p>
            </div>
            <div className="mt-4 rounded-lg bg-white p-4 shadow">
              <h2 className="mb-2 text-xl font-semibold">Photos</h2>
              {/* Placeholder for photo grid */}
              {/* <div className="grid grid-cols-3 gap-2"> */}
              {/*  {[...Array(9)].map((_, i) => ( */}
              {/*    <div key={i} className="aspect-square rounded bg-gray-200" /> */}
              {/*  ))} */}
              {/* </div> */}
            </div>
          </div>

          {/* Main Feed/Content */}
          <div className="col-span-1 md:col-span-2">
            {children} {/* Page content will be rendered here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileLayout;
