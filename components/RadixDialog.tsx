import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';

export function RadixDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed top-1/2 left-1/2 max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="text-xl font-bold text-gray-900">
            Radix UI Dialog
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600">
            This is a sample dialog component using Radix UI and Tailwind CSS.
          </Dialog.Description>
          <Dialog.Close className="mt-4 rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
