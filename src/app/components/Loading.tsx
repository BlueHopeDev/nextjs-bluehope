'use client'
import React, { useEffect, useState } from 'react'
import LightHeartbeat from '@/app/assets/json/loading-dark.json'
import Lottie from 'lottie-react'

interface Props {
  duration?: number,
}

const Loading = ( {
  duration = 2
}: Props ) => {
  
  const [ timerCount, setTimerCount ] = useState<number>(duration);
  const [ fadeDown, setFadeDown ] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (timerCount > 0) {
      timer = setTimeout(() => {
        setTimerCount((prevCount) => prevCount - 1);
      }, 1000);
    } else {
      // Timer has stopped
      setFadeDown(true);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timerCount]);
  
  const containerStyle = `fixed z-[9999] bg-light dark:bg-dark top-0 left-0 right-0 bottom-0 flex justify-center items-center transition-opacity duration-500 ${ fadeDown ? 'opacity-0' : 'opacity-100' }`

  return (
    <>
      <div className={containerStyle}>
        <Lottie animationData={LightHeartbeat} autoPlay loop className='h-[15%] w-[15%]'/>
      </div>
    </>
  )
}

export default Loading