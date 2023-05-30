import { Component, InputHTMLAttributes, useEffect, useState } from 'react'
import { RiEyeLine, RiEyeOffLine, RiCheckboxCircleLine, RiCloseCircleLine, RiErrorWarningLine } from 'react-icons/ri'
import { IconType } from 'react-icons'
import { getStrengthColor } from '@/lib/strengthChecker'
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
  const [ background, setBackground ] = useState<string>('transparent')
  const [ strengthType, setStrengthType ] = useState<string>()

  useEffect(() => {
    if (showPassword === null) {
      setShowPassword('hide')
    }
    if (background === null) {
      setBackground('transparent')
    }
  }, [showPassword, background])

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

  const onGetStrength = (value: string) => {
    setBackground(getStrengthColor(value))
  }

  return (
    <>
      <label htmlFor='search' className='sr-only'>Search</label>
      <div className={`relative flex items-center ${background !== 'transparent' ? (`bg-${background}/50 border-${background}`) : (`bg-${background} border-dark-500`)} border-[2px] w-full transition-all duration-300 ease-in-out`}>
        { Icon !== undefined && (
          <span className='absolute flex items-center p-[12px] pointer-events-none select-none'><Icon className='absolute'/></span>
        )}
        <input type={ isPassword ? (showPassword === 'hide' ? 'password' : 'text') : (props.type) } onChange={ isPassword ? (e) => onGetStrength(e.currentTarget.value) : () => {}} className={`w-full bg-transparent placeholder:text-dark-500 ${Icon !== undefined && ('pl-[40px]')} pr-[12px] py-[8px] outline-none`} {...props}/>
        { isPassword && (
          <div className='flex flex-center items-center relative h-[40px] w-[40px] transition-all duration-300 ease-in-out'>
            <span className='p-[8px]'>
              <label className='absolute'>
                <input
                    type="checkbox"
                    value={'show'}
                    checked={showPassword === 'hide'}
                    onChange={() => onShowPasswordChange()}
                    id="0"
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
                    id="1"
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