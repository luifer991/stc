import Title from "../Components/Title"
import { libreBaskerville } from "../Components/fonts"

export function Head(){
    return(
        <div className="bg-[url(/pocketforce.jpeg)] bg-cover bg-center h-[830px] w-full text-white md:bg-[url(/darkpocket.png)] pl-[240px]">
            <Title first="Sómos "
            spanOne="STC"
            w="y somos tu mejor "
            SpanTwo="aliado"
            second="para proteger tu vida"
            third="STC es un sistema de defensa personal que se adapta a cada tipo de usuario sin importar su condición física."
            />
        </div>
    )
}