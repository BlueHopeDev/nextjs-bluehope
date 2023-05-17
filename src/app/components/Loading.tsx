'use client'
import React, { useEffect, useState } from 'react'

interface Props {}

const Loading = (props: Props) => {
  
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })
  
  return (
    <>
      { isLoading && (
        <div>Loading...</div>
      )}
    </>
  )
}

export default Loading