"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 animate-in fade-in zoom-in-95 duration-200">
          <div className="relative bg-gray-900 rounded-xl border border-gray-700 shadow-2xl">
            <Dialog.Close className="absolute right-4 top-4 z-10 rounded-md bg-gray-800/80 p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-gray-200">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
            
            {title && (
              <Dialog.Title className="sr-only">
                {title}
              </Dialog.Title>
            )}
            {!title && (
              <VisuallyHidden.Root asChild>
                <Dialog.Title>Modal</Dialog.Title>
              </VisuallyHidden.Root>
            )}
            
            <div className="p-6">
              {children}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
