'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/app/Components/Button'
import Link from 'next/link'
import NavLinks from '../Components/NavLinks'

export function NavBar(): React.JSX.Element {
  const [isClick, setIsClick] = useState(false)

  const toggleNavbar = (): void => {
    setIsClick(!isClick)
  }

  return (
    <>
      <nav className='bg-black sticky top-0 z-50'>
        <div className='max-m--xl mx-auto px-8 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20 max-w-[960px] m-auto'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link href='/'>
                  <Image
                    src='/goldenshield.png'
                    alt='logo STC'
                    className='p-9'
                    width={100}
                    height={24}
                    priority
                  />
                </Link>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className={`ml-4 flex items-center space-x-4`}>
                <NavLinks />
                <Button classb='info-btn' text='Aprender Más' />
              </div>
            </div>
            <div className='md:hidden flex items-center'>
              <button
                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16m-7 6h7'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link
                href='/'
                className='text-white block hover:bg-[theme(colors.golden)] hover:text-black rounded-lg  p-2'
              >
                Home
              </Link>
              <Link
                href='/about'
                className='text-white block hover:bg-[theme(colors.golden)] hover:text-black rounded-lg  p-2'
              >
                ¿Quiénes Sómos?
              </Link>
              <Link
                href='/services'
                className='text-white block hover:bg-[theme(colors.golden)] hover:text-black rounded-lg  p-2'
              >
                Servicios
              </Link>
              <Link
                href='/blog'
                className='text-white block hover:bg-[theme(colors.golden)] hover:text-black rounded-lg  p-2'
              >
                Blog Táctico
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
