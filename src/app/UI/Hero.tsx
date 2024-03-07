import React from 'react'
import Button from '../Components/Button'
import Title from '../Components/Title'
import { bevan, libreBaskerville } from '../Components/fonts'

function Hero() {
  return (
    <>
      <div className="bg-[url(/pocketforce.jpeg)] bg-cover bg-center h-[830px] w-full text-white md:bg-[url(/darkpocket.png)]">
        <article className='pl-[240px]'>
          <Title first='Promoviendo el '
            spanOne='bienestar '
            w='y '
            SpanTwo='previniendo '
            second='la violencia'
            third='STC es un programa dedicado a promover soluciones adaptables que ayuden a sus usuarios a prevenir la violencia en cualquier situación.'
          />
          <div className="pl-8 pt-0 mt-0 w-[700px]">
            <Button classb="l-btn" text="¡Empezar Ya!" />
          </div>
        </article>
      </div>
    </>
  )
}

export default Hero