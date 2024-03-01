import React from 'react'

type TitleProps = {
  children: React.ReactNode
}

function Title({ children }: TitleProps): React.JSX.Element {
  return (
    <>
      <header className='w-[90%] block items-center justify-center ml-[3rem] md:w-[700px]'>
        {children}
      </header>
    </>
  )
}

export default Title