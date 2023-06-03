'use client'
import React, { Fragment, HTMLAttributes } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IconType } from 'react-icons'

interface ModalProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean,
  onClose: () => void,
  titleIcon?: IconType,
  title?: string,
}

const ModalBuilder: React.FC<ModalProps> = ({ children, isOpen, onClose, titleIcon: Icon, title: Title, ...props }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="modal-background" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel className="panel-background flex flex-col justify-center items-center p-[20px] gap-[10px]">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalBuilder