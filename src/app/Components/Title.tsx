import React from 'react'
import { bevan, libreBaskerville } from './fonts'
import { TitleProps } from '@/lib/definitions'

function Title({ 
  first, spanOne, SpanTwo, second, third, w 
}: TitleProps): React.JSX.Element {
  return (
    <>
      <header className='w-[60%] ml-2 block items-center justify-center lg:w-[90%]  lg:ml-[3rem] md:w-[700px]'>
        <h1 className={`text-left txt-[#ffffffcc]${bevan.className} text-[42px] lg:text-[68px] pt-12 pb-12`}>
          {first} <span className='text-clear-gold'> {spanOne}</span> {w}<span className='text-clear-gold'> {SpanTwo} </span> {second}
        </h1>
        <p className={`text-left lg:max-w-lg txt-sm pb-[80px] md:pb-20 ${libreBaskerville.className}`}>
          {third}
        </p>
      </header>
    </>
  )
}

export default Title