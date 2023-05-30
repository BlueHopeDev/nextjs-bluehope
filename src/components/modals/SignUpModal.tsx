'use client'
import { Dialog, Transition } from '@headlessui/react'
import { RiUser3Line, RiLock2Line, RiGithubFill, RiTerminalLine, RiCheckFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import React, { Fragment, useState } from 'react'
import Input from '../Input'
import Button from '../Button'

interface SignUpProps {
  isOpen: boolean,
  onClose: () => void,
}

const SignUpModal = ({
  isOpen = false,
  onClose,
}: SignUpProps) => {

  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const [ confirmpassword, setConfirmPassword ] = useState<string>('')
  const [ acceptedTerms, setAcceptedTerms ] = useState<boolean>(false)

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Registered!")
    onClose()
  }

  const handleCheckData = () => {

  }

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
              <Dialog.Panel className="panel-background flex flex-col justify-center items-center p-[50px] gap-[10px]">
                <form onSubmit={(e) => handleRegister(e)} className='flex flex-col justify-center w-full gap-[10px]'>
                  <Input onChange={(e) => setEmail(e.currentTarget.value)} icon={RiUser3Line} placeholder='E-mail'/>
                  <Input onChange={(e) => setPassword(e.currentTarget.value)} icon={RiLock2Line} placeholder='Password' isPassword={true}/>
                  <Input onChange={(e) => setConfirmPassword(e.currentTarget.value)} icon={RiLock2Line} placeholder='Confirm Password' isPassword={true}/>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full pr-[10px]"
                      htmlFor="tos"
                      data-ripple-dark="true"
                    >
                      <input
                        id="tos"
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.currentTarget.checked)}
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border-[2px] transition-all border-dark-500 checked:bg-dark-500"
                      />
                      <div className="pointer-events-none absolute flex flex-auto items-center justify-center text-light-500 opacity-0 transition-opacity peer-checked:opacity-100">
                        <RiCheckFill/>
                      </div>
                    </label>
                    <label
                      className="mt-px cursor-pointer select-none font-light text-dark-500"
                      htmlFor="tos"
                    >
                      Term of Services
                    </label>
                  </div>
                  <Button type='submit' icon={RiTerminalLine} styleType='primary'>Submit</Button>
                </form>
                <span className='h-[2px] w-full rounded-sm bg-dark-200/30 m-[10px]'></span>
                <Button icon={FcGoogle} styleType='secondary'>Google+</Button>
                <Button icon={RiGithubFill} styleType='secondary'>Github</Button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SignUpModal