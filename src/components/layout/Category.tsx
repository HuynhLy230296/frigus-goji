'use client';

import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Category() {
  const { user } = useUser();
  const router = useRouter();
  const menuItems = [
    {
      id: 2,
      name: 'Wish List',
      icon: 'fas fa-star',
      color: '#1877F2',
      url: '/wish-list',
    },
    {
      id: 3,
      name: 'Favorite Places',
      icon: 'fas fa-heart',
      color: '#1877F2',
      url: '/favorite-places',
    },
    {
      id: 4,
      name: 'My Tours',
      icon: 'fas fa-map',
      color: '#1877F2',
      url: '/my-tours',
    },
    {
      id: 5,
      name: 'Saved',
      icon: 'fas fa-bookmark',
      color: '#1877F2',
      url: '/saved',
    },
  ];

  const redirectToURL = (url: string) => () => {
    router.push(url);
  };

  return (
    <div className="bg-base-200 p-2">
      <ul className="menu w-full">
        <li className="mb-2">
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            className="flex items-center space-x-4 font-medium"
            onClick={redirectToURL('profile')}
          >
            <div className="avatar">
              <div className="w-8 rounded-full">
                {user?.imageUrl && (
                  <Image
                    alt="profile"
                    src={user.imageUrl}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                  />
                )}
              </div>
            </div>
            <span className="text-md">{`${user?.firstName} ${user?.lastName}`}</span>
          </div>
        </li>
        {menuItems.map((item) => (
          <li key={item.id} className="mb-2">
            <div
              className="flex items-center font-medium"
              onClick={redirectToURL(item.url)}
            >
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
