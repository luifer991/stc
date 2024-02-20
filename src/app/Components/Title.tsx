import React from 'react'


/*            <h1 className='text-left text-5xl pt-28 pb-[1rem] txt-[#ffffffcc] txt-[50px]
            '>
                 <span className='txt-[#d8c690]'>bienestar</span> y <span className='txt-[#d8c690]'>previniendo</span> la violencia
            </h1>*/

            /*                 STC es un programa dedicado a promover soluciones adaptables que ayuden a sus usuarios
                a prevenir la violencia en cualquier situacion. 
                Nuestra misión es empoderar a los individuos a tomar el contol de su seguridad
                y crear un mundo más seguro para todos */

type TitleProps = {
  children: React.ReactNode
}


function Title({ children }: TitleProps ): React.JSX.Element {
  return (
    <>  
        <div className='w-[90%] block items-center justify-center ml-[3rem] md:w-[700px]'>
            {children}
        </div>
           
    </>
  )
}

export default Title