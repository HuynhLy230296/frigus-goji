'use client';

import React from 'react';

import CreateTourForm from '@/components/forms/CreateTourForm';

const CreateYourTour = () => {
  return (
    <>
      <div className="rounded-lg bg-white p-4 shadow">
        <h2 className="mb-2 text-xl font-semibold">Create Your Tour</h2>
        {/* Placeholder for create post component */}
        <div
          className="h-24 cursor-pointer rounded bg-gray-100 p-4 hover:bg-gray-200"
          onClick={() =>
            (
              document.getElementById('create_tour_modal') as HTMLDialogElement
            )?.showModal()
          }
        >
          Share your adventure...
        </div>
      </div>
      <dialog id="create_tour_modal" className="modal">
        <div className="modal-box w-[500px]">
          <div className="flex items-center justify-between border-b-2 border-gray-200">
            <h3 className=" mx-auto pb-2 text-lg font-bold">
              Create Your Journey
            </h3>
            <button
              type="button"
              className="btn-circle right-4 top-4 text-2xl text-gray-400 hover:text-gray-600"
              onClick={() =>
                (
                  document.getElementById(
                    'create_tour_modal',
                  ) as HTMLDialogElement
                )?.close()
              }
              aria-label="Close"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="modal-body py-4">
            <CreateTourForm />
          </div>

          <div className="modal-action">
            <button
              type="button"
              className="w-full rounded-md bg-blue-500 px-4 py-2 text-md text-white hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default CreateYourTour;
