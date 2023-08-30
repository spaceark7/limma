import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-20 h-20 bg-gray-200 rounded-full animate-pulse'></div>
        <div className='mt-4 w-20 h-4 bg-gray-200 rounded-full animate-pulse'></div>
        <div className='mt-4 w-20 h-4 bg-gray-200 rounded-full animate-pulse'></div>
        <div className='mt-4 w-20 h-4 bg-gray-200 rounded-full animate-pulse'></div>
        <div className='mt-4 w-20 h-4 bg-gray-200 rounded-full animate-pulse'></div>
      </div>
    </div>
  )
}

export default LoadingSkeleton
