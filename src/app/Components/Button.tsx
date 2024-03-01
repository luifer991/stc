import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/lib/definitions';


function Button({ classb, text }: ButtonProps) {
  return (
    <>
        <Link href="#" 
            target='_blank' 
            rel='noreferrer'>
            <button className={classb}>
                    {text}
            </button>
        </Link>
    </>
  )
}

export default Button