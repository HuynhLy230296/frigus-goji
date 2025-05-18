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
        <div />
      </form>
      <div className="mt-2">
        <GojiDropZone />
      </div>
    </div>
  );
};
export default CreateTourForm;
