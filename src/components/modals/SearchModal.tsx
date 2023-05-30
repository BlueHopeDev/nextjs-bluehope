import { Dialog, Transition } from '@headlessui/react'
import { RiSearch2Line, RiMicLine } from 'react-icons/ri'
import React, { Fragment } from 'react'
import Input from '../Input'

interface SearchProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal = ({
  isOpen = false,
  onClose
}: SearchProps) => {
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
              <Dialog.Panel className="panel-background">
                <form>
                  <label htmlFor='search' className='sr-only'>Search</label>
                  <div className='relative flex items-center'>
                    <span className='absolute flex items-center p-[12px] pointer-events-none select-none'><RiSearch2Line className='absolute'/></span>
                    <input type='text' placeholder='Search for ?' className='w-full bg-transparent pl-[36px] pr-[84px] py-[12px] outline-none'/>
                    <div className='absolute flex flex-row items-center right-0 gap-[10px] p-[10px]'>
                      <div onClick={onClose} className='bg-dark-500/5 hover:bg-dark-500/10 border-[1px] border-dark-500/20 hover:border-dark-500/30 px-[4px] py-[2px] rounded-sm text-xs select-none'>
                        <span>esc</span>
                      </div>
                      <span className='text-dark-500/70 hover:text-dark-500/100 p-[5px]'><RiMicLine/></span>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SearchModal