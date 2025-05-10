'use client';

import { useParams } from 'next/navigation';

const UserPageClientComponent = () => {
  const params = useParams();
  const username = params?.username;

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-3xl font-bold">Username: {username}</h1>
    </div>
  );
};

export default UserPageClientComponent;
