import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/lib/definitions';

function Button({ classb, text }: ButtonProps) {
  return (
    <>
      <Link
        className={classb}
        href="#"
        target='_blank'
        rel='noreferrer'>
        {text}
      </Link>
    </>
  )
}

export default Button