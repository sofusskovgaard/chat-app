import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='grid grid-cols-6 max-h-screen min-h-screen'>
      <div className='max-h-screen overflow-scroll bg-gray-100 items-start'>
        <div className='flex justify-around border-b-2 border-gray-200 p-4 sticky top-0 h-fit'>
          <h2 className='text-lg hover:font-semibold bg-gray-100'>rooms</h2>
          <h2 className='text-lg hover:font-semibold bg-gray-100'>direct messages</h2>
        </div>

        <div className='grid grid-cols-1'>
          {Array.from(Array(3)).map(() => (
            <div key="ass" className='bg-gray-100 hover:bg-white px-4 py-2'>
              <h3>John Doe</h3>
              <small>status</small>
            </div>
          ))}
        </div>

        {/* <div>
          <div className='grid grid-cols-1'>
            {Array.from(Array(12)).map(() => (
              <div key="ass" className='flex  items-center gap-3 bg-gray-100 hover:bg-white px-4 py-2'>
                <div className='flex items-center'>
                  <Image className='rounded-full' src="/img.jpeg" width={48} height={48} alt="bruh" />
                </div>
                <h3 className='font-medium'>The chat</h3>
              </div>
            ))}
          </div>
        </div> */}

      </div>
      <div className='flex flex-col col-span-5 max-h-screen bg-gray-50'>
        <h2 className='text-xl font-semibold border-b-2 bg-white border-gray-100 p-4'>John Doe</h2>

        <div className='flex-1 overflow-scroll grid grid-cols-1 gap-4'>
          {Array.from(Array(24)).map(() => (
            <div key="ass" className='flex items-start gap-4 hover:bg-gray-100 px-4 py-2'>
              <div className='flex items-center'>
                <Image className='rounded-full' src="/img.jpeg" width={48} height={48} alt="bruh" />
              </div>
              <div className='flex-1'>
                <div className='flex gap-2 text-xs font-light items-center'>
                  <h3 className='text-sm font-medium'>John Doe</h3>
                  <small className='text-gray-700'>Today at 7:58 PM</small>
                </div>
                <p>Quis id velit labore velit et culpa cillum eu.</p>
                <p>Quis id velit labore velit et culpa cillum eu.</p>
                <p>Quis id velit labore velit et culpa cillum eu.</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex gap-1 border-t-2 bg-white border-gray-100'>
          <textarea className='flex-1 p-4 focus:outline-none' rows={1} />
          <button className='p-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
