import React from 'react'
import { bevan, libreBaskerville } from './fonts'
import { TitleProps } from '@/lib/definitions'

function Title({ 
  first, spanOne, SpanTwo, second, third, w 
}: TitleProps): React.JSX.Element {
  return (
    <>
      <header className='w-[90%] block items-center justify-center ml-[3rem] md:w-[700px]'>
        <h1 className={`text-left text-[68px] pt-12 pb-12 txt-[#ffffffcc]${bevan.className}`}>
          {first} <span className='txt-[#d8c690]'> {spanOne}</span> {w}<span className='txt-[#d8c690]'> {SpanTwo} </span> {second}
        </h1>
        <p className={`text-left max-w-lg txt-sm pb-[80px] md:pb-20 ${libreBaskerville.className}`}>
          {third}
        </p>
      </header>
    </>
  )
}

export default Title