'use client'
import React, { useState, useEffect } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { getOS } from '@/lib/detectOS.tsx'
import SearchModal from '../modals/SearchModal'

interface SearchProps {}

const Search = ({}: SearchProps) => {

  const [ show, setShow ] = useState<boolean>(false)
  const [ OS, setOS ] = useState<string | undefined>()
  const [ shortcut, setShortcut ] = useState<string>("Search")
  const [ isCtrlKPressed, setIsCtrlKPressed ] = useState<boolean>(false)

  useEffect(() => {
      const userAgent = window.navigator.userAgent
      const detectedOS = getOS(userAgent)
      setOS(detectedOS)
      onGetOS(detectedOS)

      const handleKeyDown = (event: KeyboardEvent) => {
          if (event.ctrlKey && event.key === 'k') {
              setShow(true)
          } else if (event.metaKey && event.key === 'k') {
              setShow(true)
          }
      };
    
      const handleKeyUp = (event: KeyboardEvent) => {
          if (event.key === 'k') {
              setIsCtrlKPressed(false)
          }
      };
    
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
    
      return () => {
          window.removeEventListener('keydown', handleKeyDown)
          window.removeEventListener('keyup', handleKeyUp)
      };

  }, []);
  
  const onGetOS = (OS: string | undefined) => {
      switch(OS) {
          case 'Mac OS':
              setShortcut("CMD + K")
              break
          case 'Windows':
              setShortcut("CTRL + K")
              break
          default:
              setShortcut("TAP")
              break
      }
  }

  return (
    <>
        <div onClick={() => setShow(!show)} className="group select-none cursor-pointer flex flex-row justify-center items-center gap-[10px] h-full w-max rounded-sm mx-[20px] my-[10px] pl-[10px] pr-[6px] py-[6px] border-[1px] hover:border-dark-500/40 border-dark-500/10 bg-dark-500/[.02] backdrop-blur-sm transition-all duration-300 ease-in-out">
            <RiSearch2Line className='text-dark'/>
            <span className='text-dark-500'>Search</span>
            <div className='bg-dark-500/5 group-hover:bg-dark-500/10 px-[8px] rounded-sm transition-all duration-300 ease-in-out'>
            <span className='flex flex-row justify-center whitespace-nowrap items-center'>{shortcut}</span>
            </div>
        </div>
        <SearchModal isOpen={show} onClose={() => setShow(false)}/>
    </>
  )
}

export default Search