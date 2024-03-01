import React from 'react'
import Button from '../Components/Button'
import Title from '../Components/Title'
import { bevan, libreBaskerville } from '../Components/fonts'

function Hero() {
  return (
    <>
      <div className="bg-[url(/pocketforce.jpeg)] bg-cover bg-center h-[830px] w-full text-white md:bg-[url(/darkpocket.png)]">
        <article className='pl-[240px]'>
          <Title>
            <h1 className={`text-left text-[68px] pt-12 pb-12 txt-[#ffffffcc]${bevan.className}`}>
              Promoviendo el <span className='txt-[#d8c690]'> bienestar</span> y<span className='txt-[#d8c690]'> previniendo</span> la violencia
            </h1>
            <p className={`text-left max-w-lg txt-sm pb-[80px] md:pb-20 ${libreBaskerville.className}`}>
              STC es un programa dedicado a promover soluciones adaptables que ayuden a sus usuarios a prevenir la violencia en cualquier situación.
            </p>
          </Title>
          <div className="pl-8 pt-0 mt-0 w-[700px]">
            <Button classb="l-btn" text="Aprender Más" />
            <Button classb="s-btn" text="Suscribete" />
          </div>
        </article>
      </div>
    </>
  )
}

export default Hero