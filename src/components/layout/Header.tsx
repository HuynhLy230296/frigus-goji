'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Header() {
  const router = useRouter();
  const { user } = useUser();
  return (
    <div
      className="mx-8 flex items-center justify-between py-2"
      style={{ height: 'var(--header-height)' }}
    >
      {/* Left */}
      <div className=" w-[258px] rounded-full bg-gray-200">
        <label
          className="input input-sm input-ghost flex items-center justify-between"
          aria-label="Tìm kiếm"
          htmlFor="search"
        >
          <svg
            className="mr-3 h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>
          <input
            id="searcg"
            type="search"
            className=" grow"
            placeholder="Tìm kiếm"
          />
        </label>
      </div>

      {/* Center */}
      <div className="flex items-center space-x-4">
        <button
          type="button"
          className="btn btn-ghost"
          aria-label="Trang chủ"
          onClick={() => router.push('/')}
        >
          <i className="fas fa-home text-xl" />
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          aria-label="Bạn bè"
          onClick={() => router.push('/friend')}
        >
          <i className="fas fa-user-friends text-xl" />
        </button>
      </div>

      {/* Right */}
      {/* Profile */}
      <div className="flex items-center space-x-2">
        <button type="button" className="btn btn-ghost" aria-label="Tin nhắn">
          <i className="fas fa-comment-dots  text-xl" />
        </button>
        <button type="button" className="btn btn-ghost" aria-label="Tài khoản">
          <i className="fas fa-bell text-xl" />
        </button>
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img alt="profile" src={user?.imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
