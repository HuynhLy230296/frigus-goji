import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import GojiDropZone from '@/components/input/Dropzone';

const CreateTourForm = () => {
  const { user } = useUser();
  const router = useRouter();

  const redirectToURL = (url: string) => () => {
    router.push(url);
  };
  return (
    <div>
      <div
        className="flex items-start space-x-4 font-medium"
        onClick={redirectToURL('profile')}
      >
        <div className="avatar">
          <div className="w-10 rounded-full">
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
        <b className="text-md">{`${user?.firstName} ${user?.lastName}`}</b>
      </div>
      <form>
        <textarea
          className="focus:none textarea textarea-ghost mt-1 w-full resize-none px-0 text-sm leading-normal focus:border-none focus:outline-none"
          placeholder="Share your tour"
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = `${target.scrollHeight}px`;
          }}
          style={{ minHeight: '3rem', overflow: 'hidden' }}
        />
        <div className="mt-2">
          <div className="mt-2 flex items-center justify-between rounded-lg bg-gray-100 p-3">
            <span>Add to your post</span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="flex items-center space-x-1 rounded px-2 py-1 text-red-600"
                aria-label="Check in"
              >
                <i
                  className="fa-solid fa-location-dot text-xl"
                  title="Check in"
                />
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 rounded px-2 py-1 text-green-600"
                aria-label="Duration"
              >
                <i className="fa-solid fa-clock text-xl" title="Duration" />
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 rounded px-2 py-1 text-blue-600"
                aria-label="Tag Friends"
              >
                <i className="fa-solid fa-tags text-xl" title="Tag Friends" />
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 rounded px-2 py-1 text-yellow-600"
                aria-label="Feeling/Activity"
              >
                <i
                  className="fa-solid fa-face-smile text-xl"
                  title="Feeling/Activity"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <GojiDropZone />
        </div>
      </form>
    </div>
  );
};
export default CreateTourForm;
