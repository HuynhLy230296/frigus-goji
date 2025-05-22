import React from 'react';
import { useDropzone } from 'react-dropzone';

import PhotoGrid from '@/components/layout/PhotoGrid';

const GojiDropZone = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    onDrop: (accepted) => setFiles((prev) => [...prev, ...accepted]),
  });

  return (
    <section className="goji-dropzone border-1 flex flex-col items-center justify-center rounded-lg border border-gray-300 p-2">
      {files.length > 0 ? (
        <div className="relative w-full cursor-pointer rounded-lg">
          <div className="absolute left-2 top-2 z-10 flex items-center space-x-2 ">
            {/* This button to edit all photos */}
            <button
              type="button"
              className="items-center space-x-2 rounded-md border-none bg-white p-2 text-md shadow hover:bg-gray-100 focus:outline-none"
            >
              <i className="fas fa-edit" />
              <span>{files.length > 1 ? 'Edit All' : 'Edit'}</span>
            </button>
            {/* This button is for adding more photos */}
            <button
              type="button"
              className="space-x-2 rounded-md border-none bg-white p-2 text-md shadow hover:bg-gray-100 focus:outline-none"
              onClick={() => {
                const input = document.getElementById(
                  'goji-dropzone-file-input',
                );
                if (input) (input as HTMLInputElement).click();
              }}
            >
              <i className="fas fa-plus" />
              <span>Add Photos</span>
              <input
                id="goji-dropzone-file-input"
                type="file"
                multiple
                hidden
                tabIndex={-1}
                style={{ display: 'none' }}
                onChange={(e) => {
                  const filesInput = e.target.files;
                  if (filesInput) {
                    const newFiles = Array.from(filesInput);
                    setFiles((prev) => [...prev, ...newFiles]);
                  }
                }}
              />
            </button>
          </div>
          {/* Clear all image */}
          <button
            type="button"
            className="btn-circle absolute right-2 top-2 z-10 size-8 bg-white p-1 text-sm text-gray-800"
            aria-label="Clear all image"
            onClick={() => setFiles([])}
          >
            <i className="fas fa-times text-xl" />
          </button>
          <PhotoGrid files={files} style={{ zIndex: 1 }} />
        </div>
      ) : (
        <div
          {...getRootProps({
            className:
              'relative h-[205px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded p-4 cursor-pointer hover:bg-gray-100 w-full',
          })}
        >
          <input {...getInputProps()} />
          <p className="text-md">Add photos/videos</p>
          <p className="text-sm text-gray-500"> or drag and drop</p>
        </div>
      )}
    </section>
  );
};
export default GojiDropZone;
