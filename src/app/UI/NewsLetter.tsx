
import React, { useEffect, useRef, useState } from 'react'
import { libreBaskerville } from '../Components/fonts'
import supabase from '@/lib/api'
import { revalidatePath } from 'next/cache'

// function useQuery() {
//     const [query, setQuery] = useState('')
//     const [error, setError] = useState('')
//     const isFirstInput = useRef(true)
    
//     useEffect(() => {
//         if (isFirstInput.current) {
//             isFirstInput.current = query === ''
//             return
//         }
//         if (query === '') {
//             setError('No puedes dejar este campo vacío')
//             return
//         }
//         if (!query.match(/@/)) {
//             setError('el email debe tener un @')
//         }
//         if (query.length < 8) {
//             setError('El email debe tener al menos 8 caracteres')
//         }
//     }, [query])
//     return { query, setQuery, error }
// }


function NewsLetter() {
    //const { query, setQuery, error } = useQuery()

    const addEmail = async (formData: FormData) => {
        "use server"
        const email = formData.get('email')
        const { error } = await supabase.from('newsletter').insert({ email:  email as String })

    }


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
                        action={addEmail}
                        method='post'
                        encType='text/plain'
                    >
                        <input  required type='email' name='email' className={`input`} />
                        <label className='label'>Email</label>
                        <button type='submit' className='send-btn'>
                            Enviar
                        </button>
                        {/*error && <p style={{ color: 'red' }}>{error}</p>*/}
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
