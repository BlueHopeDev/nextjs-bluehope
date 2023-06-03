import { Component, InputHTMLAttributes, useEffect, useState } from 'react'
import { RiEyeLine, RiEyeOffLine, RiCheckboxCircleLine, RiCloseCircleLine, RiErrorWarningLine } from 'react-icons/ri'
import { IconType } from 'react-icons'
import { getStrengthValue } from '@/lib/strengthChecker'
import { Icon } from 'next/dist/lib/metadata/types/metadata-types'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType,
  correctIcon?: IconType,
  wrongIcon?: IconType,
  visibleIcon?: IconType,
  invisibleIcon?: IconType,
  minLength?: number,
  maxLength?: number,
  isPassword?: boolean,
}

const Input: React.FC<InputProps> = ({
  children,
  icon: Icon,
  correctIcon: CorrectIcon,
  wrongIcon: WrongIcon,
  visibleIcon: VisibleIcon,
  invisibleIcon: InvisibleIcon,
  isPassword = false,
  ...props
}) => {

  const [ showPassword, setShowPassword ] = useState<string>('hide')

  useEffect(() => {
    if (showPassword === null) {
      setShowPassword('hide')
    }
  }, [showPassword])

  const onShowPasswordChange = () => {
    switch(showPassword) {
      case 'show':
        setShowPassword('hide')
        break
      default:
        setShowPassword('show')
        break
    }
  }

  return (
    <>
      <label htmlFor='search' className='sr-only'>Search</label>
      <div className={`relative flex items-center bg-dark-500/5 w-full transition-all duration-300 ease-in-out`}>
        { Icon !== undefined && (
          <span className='absolute flex items-center p-[12px] pointer-events-none select-none'><Icon className='absolute'/></span>
        )}
        <input type={ isPassword ? (showPassword === 'hide' ? 'password' : 'text') : (props.type) } className={`w-full bg-transparent placeholder:text-dark-500 ${Icon !== undefined && ('pl-[40px]')} pr-[10px] py-[8px] outline-none`} {...props}/>
        { isPassword && (
          <div className='flex flex-center items-center relative h-[40px] w-auto transition-all duration-300 ease-in-out'>
            <span className='pr-[8px] py-[8px]'>
              <label className='absolute'>
                <input
                    type="checkbox"
                    value={'show'}
                    checked={showPassword === 'hide'}
                    onChange={() => onShowPasswordChange()}
                    name="pass"
                    className='hidden peer/show'
                />
              { VisibleIcon !== undefined ? (
                <VisibleIcon className='opacity-100 peer-checked/show:opacity-0 scale-100 peer-checked/show:scale-0 visible peer-checked/show:invisible transition-all duration-300 ease-in-out text-[20px]'/>
              ) : (
                <RiEyeLine className='opacity-100 peer-checked/show:opacity-0 scale-100 peer-checked/show:scale-0 visible peer-checked/show:invisible transition-all duration-300 ease-in-out text-[20px]'/>
              ) }
              </label>
              <label>
                <input
                    type="checkbox"
                    value={'hide'}
                    checked={showPassword === 'show'}
                    onChange={() => onShowPasswordChange()}
                    name="pass"
                    className='hidden peer/hidden'
                />
              { InvisibleIcon !== undefined ? (
                <InvisibleIcon className='opacity-100 peer-checked/hidden:opacity-0 scale-100 peer-checked/hidden:scale-0 visible peer-checked/hidden:invisible transition-all duration-300 ease-in-out text-[20px]'/>
              ) : (
                <RiEyeOffLine className='opacity-100 peer-checked/hidden:opacity-0 scale-100 peer-checked/hidden:scale-0 visible peer-checked/hidden:invisible transition-all duration-300 ease-in-out text-[20px]'/>
              ) }
              </label>
            </span>
          </div>
        )}
      </div>
    </>
  )
}

export default Input