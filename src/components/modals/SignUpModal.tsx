'use client'
import { RiUser3Line, RiLock2Line, RiGithubFill, RiTerminalLine, RiCloseLine, RiUser4Line } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { Ubuntu_Mono } from 'next/font/google'
import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import ModalBuilder from './ModalTemplate'
import Link from 'next/link'

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin-ext'] })

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
  const [ confirmPassword, setConfirmPassword ] = useState<string>('')
  const [ acceptedTerms, setAcceptedTerms ] = useState<boolean>(false)

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Registered!")
    console.log(email)
    console.log(password)
    console.log(confirmPassword)
    console.log(acceptedTerms)
    onClose()
  }

  return (
    <ModalBuilder isOpen={isOpen} onClose={onClose}>
      <section className='w-full flex flex-row justify-start items-center uppercase gap-[10px]'>
        <RiUser4Line/>
        <span className={ubuntuMono.className}>Sign Up</span>
      </section>
      <form onSubmit={(e) => handleRegister(e)} className='flex flex-col justify-center w-full gap-[10px]'>
        <Input onChange={(e) => setEmail(e.currentTarget.value)} icon={RiUser3Line} placeholder='E-mail'/>
        <Input onChange={(e) => setPassword(e.currentTarget.value)} icon={RiLock2Line} placeholder='Password' isPassword={true}/>
        <Input onChange={(e) => setConfirmPassword(e.currentTarget.value)} icon={RiLock2Line} placeholder='Confirm Password' isPassword={true}/>
        <div className="inline-flex items-center group">
          <label
            className="relative flex justify-center cursor-pointer items-center rounded-full pr-[10px]"
            htmlFor="tos"
            data-ripple-dark="true"
          >
            <input
              id="tos"
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.currentTarget.checked)}
              className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm transition-all bg-dark-500/5 group-hover:bg-dark-500/10 group-hover:checked:bg-dark-500/80 checked:bg-dark-500"
            />
            <div className="pointer-events-none absolute flex flex-auto items-center text-light-500 opacity-0 transition-opacity peer-checked:opacity-100">
              <RiCloseLine/>
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
      <Link href={"https://google.co.th/"} prefetch={true} target='_blank' id='google' className='w-full'>
        <Button icon={FcGoogle} styleType='secondary'>Google+</Button>
      </Link>
      <Link href={"https://github.com/"} prefetch={true} target='_blank' id='github' className='w-full'>
        <Button icon={RiGithubFill} styleType='secondary'>Github</Button>
      </Link>
    </ModalBuilder>
  )
}

export default SignUpModal