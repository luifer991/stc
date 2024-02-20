import Title from "../Components/Title"
import { libreBaskerville } from "../Components/fonts"

export function Head(){
    return(
        <div className="bg-[url(/pocketforce.jpeg)] bg-cover bg-center h-screen w-full text-white md:bg-[url(/darkpocket.png)]">
            <Title>
                <h1 className='text-left text-9xl pt-32 pb-[1rem] txt-[#ffffffcc] md:text-8xl'>
                        Sómos <span className='txt-[#d8c690]'>
                        STC
                        </span> 
                </h1>
                <p className={`text-left max-w-lg txt-sm pb-[5rem] md:pb-20 ${libreBaskerville.className}`}>
                    STC es un sistema de defensa personal que se adapta a cada tipo de usuario sin importar su condición física.
                </p>
            </Title>
        </div>
    )
}