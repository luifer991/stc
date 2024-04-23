import React from 'react'
import Button from '../Components/Button'
import Title from '../Components/Title'

function Hero() {
  return (
    <>
      <div className="bg-[url(/pocketforce.jpeg)] bg-cover lg:bg-center lg:h-[830px] lg:w-full text-white 
      lg:bg-[url(/darkpocket.png)]">
        <article className='pl-12 lg:pl-[240px]'>
          <Title first='Promoviendo el '
            spanOne='bienestar '
            w='y '
            SpanTwo='previniendo '
            second='la violencia'
            third='STC es un programa dedicado a promover soluciones adaptables que ayuden a sus usuarios a prevenir la violencia en cualquier situación.'
          />
          <div className="lg:pl-12 pt-0 mt-0 w-[700px]">
            <Button classb="l-btn" text="¡Empezar Ya!" />
          </div>
        </article>
      </div>
    </>
  )
}

export default Hero