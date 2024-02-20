import React from 'react'
import { libreBaskerville } from '../Components/fonts'

function NewsLetter() {
    return (
        <>
            <section className='block justify-center items-center text-start bg-[url(/jiuJitsu.png)] bg-no-repeat bg-center bg-cover scale-90 mx-12 my-0 h-full w-full p-12 md:bg-inherit'>
                <div className='max-w-[600px]'>
                    <h2 className='pb-8 justify-center text-start text-5xl text-[#cbb26acc] md:pb-[30px]'>
                        Manténgase al día con el Newsletter de STC
                    </h2>
                    <p
                        className={`pb-8 text-[#ffffff99] max-w-[500px] md:pb-20 ${libreBaskerville.className}`}
                    >
                        Suscríbase a nuestro boletín para recibir las últimas novedades
                        sobre STC y consejos de seguridad
                    </p>
                </div>
                <div className='form'>
                    <form
                        action='mailto:correo@ejemplo.com'
                        method='post'
                        encType='text/plain'
                    >
                        <input required type='text' name='text' className='input' />
                        <label className='label'>Email</label>
                        <button type='submit' className='send-btn'>
                            Enviar
                        </button>
                    </form>
                </div>
                <p
                    className={`px-0 py-5 text-xs text-[#ffffff99] ${libreBaskerville.className}`}
                >
                    Al suscibirte aceptas nuestro terminos y condiciones
                </p>
            </section>
        </>
    )
}

export default NewsLetter
