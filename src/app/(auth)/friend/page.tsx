'use client';

import React from 'react';

type Friend = {
  id: number;
  name: string;
  profilePicture: string;
};

const friends: Friend[] = [
  {
    id: 1,
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    profilePicture: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    profilePicture: 'https://via.placeholder.com/150',
  },
];

export default function FriendComponent() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Friends</h1>
      <ul className="space-y-4">
        {friends.map((friend) => (
          <li key={friend.id} className="flex items-center space-x-4">
            <div className="avatar">
              <div className="w-12 rounded-full">
                {/* <Image */}
                {/*  src={friend.profilePicture} */}
                {/*  alt={`${friend.name}'s profile`} */}
                {/*  fill */}
                {/*  style={{ objectFit: 'cover', borderRadius: '50%' }} */}
                {/* /> */}
              </div>
            </div>
            <span className="text-lg font-medium">{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
