'use client';

import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

export default function Sidebar() {
  const { user } = useUser();
  const menuItems = [
    { id: 2, name: 'Wish List', icon: 'fas fa-star', color: '#1877F2' },
    { id: 3, name: 'Favorite Places', icon: 'fas fa-heart', color: '#1877F2' },
    { id: 4, name: 'My Tours', icon: 'fas fa-map', color: '#1877F2' },
    { id: 5, name: 'Saved', icon: 'fas fa-bookmark', color: '#1877F2' },
  ];

  return (
    <div className="bg-base-200 p-2">
      <ul className="menu w-full">
        <li className="mb-2">
          <div className="flex items-center space-x-4 font-medium">
            <div className="avatar">
              <div className="w-8 rounded-full">
                {user?.imageUrl && (
                  <Image
                    alt="profile"
                    src={user.imageUrl}
                    width="12"
                    height="12"
                  />
                )}
              </div>
            </div>
            <span className="text-md">{`${user?.firstName} ${user?.lastName}`}</span>
          </div>
        </li>
        {menuItems.map((item) => (
          <li key={item.id} className="mb-2">
            <div className="flex items-center font-medium">
              <i
                className={`${item.icon} mr-3`}
                style={{
                  color: item.color,
                  fontSize: '1.5em',
                  width: '1.5em',
                }}
              />
              <span className="text-md">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
