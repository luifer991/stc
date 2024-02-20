import React from 'react'
import Image from 'next/image'
import Button from './Button'

type CardProps = {
    icon: string
    alt: string
    body: string
    sect: string
    img: string
    div?: string
    p: string
}

function Card({
    icon,
    alt,
    body,
    sect,
    img,
    div,
    p
}: CardProps) {
    return (
        <>
            <section className={sect}>
                <Image className={img} src={icon} alt={alt} width={80} height={80} />
                <div className={div}>
                    <p className={p}>{body}</p>
                    <Button classb='card-button' text='Aprender Más' />
                </div>
            </section>
        </>
    )
}

export default Card
