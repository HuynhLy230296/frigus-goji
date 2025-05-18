import React from 'react';
import { useDropzone } from 'react-dropzone';

const GojiDropZone = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    onDrop: (accepted) => setFiles((prev) => [...prev, ...accepted]),
  });

  console.log(files);

  function gridLayout() {
    if (files.length === 0) return 'grid grid-cols-1 gap-2';
    if (files.length === 1) return 'grid grid-cols-1 gap-2';
    if (files.length === 2) return 'grid grid-cols-1 grid-rows-2 gap-2';
    if (files.length === 3)
      return 'grid grid-rows-2 grid-cols-2 [&>*:first-child]:col-span-2';
    if (files.length === 4)
      return 'grid grid-rows-2 grid-cols-3 [&>*:first-child]:col-span-3';
    return 'grid grid-cols-2 gap-2';
  }

  return (
    <section className="goji-dropzone border-1 flex flex-col items-center justify-center rounded-lg border border-gray-300 p-3">
      {files.length > 0 ? (
        <div className="relative w-full cursor-pointer rounded-lg">
          <div className={gridLayout()}>
            {files.map((file: File, i: number) => {
              const url = URL.createObjectURL(file);
              return (
                <div
                  key={file.name}
                  className="relative overflow-hidden rounded-lg"
                >
                  <img
                    alt={`uploaded-${i}`}
                    src={url}
                    className="size-full object-cover"
                  />
                  {i === 0 && (
                    <button
                      type="button"
                      className="absolute left-2 top-2 flex items-center space-x-2 rounded-md border-none bg-white p-2 text-md shadow hover:bg-gray-100 focus:outline-none"
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
                  )}
                </div>
              );
            })}
          </div>
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
