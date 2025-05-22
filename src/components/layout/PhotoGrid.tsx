'use client';

import Image from 'next/image';
import React from 'react';

interface PhotoGridProps {
  files: File[];
  // eslint-disable-next-line react/no-unused-prop-types
  style?: React.CSSProperties;
}

const PhotoGrid = ({ files }: PhotoGridProps) => {
  const visibleFiles = files.slice(0, 4); // limit max 4
  const extraCount = files.length - 4;

  return (
    <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
      {visibleFiles.map((file, index) => {
        const isFirst = index === 0;
        const isOverlay = index === 3 && extraCount > 0;
        const url = URL.createObjectURL(file);
        // Layout rule
        if (files.length === 1 || files.length === 2) {
          return (
            <div
              key={file.name || index}
              className="relative col-span-2 aspect-video overflow-hidden rounded"
            >
              <Image
                src={url}
                alt=""
                fill
                className="block size-full object-cover"
              />
            </div>
          );
        }

        if (files.length === 3 && isFirst) {
          return (
            <div
              key={file.name || index}
              className="relative col-span-2 aspect-video overflow-hidden rounded"
            >
              <Image
                src={url}
                alt=""
                fill
                className="block size-full object-cover"
              />
            </div>
          );
        }

        return (
          <div
            key={file.name || index}
            className="relative aspect-video overflow-hidden rounded"
          >
            <Image
              src={url}
              fill
              alt=""
              className="block size-full object-cover"
            />

            {/* +N overlay if this is the 4th image and extra images exist */}
            {isOverlay && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-xl font-semibold text-white">
                +{extraCount}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default PhotoGrid;
