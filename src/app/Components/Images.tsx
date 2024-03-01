import { facebook, instagram, tikTok, amazon } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const width = 30;
const height = width


export function Images() {
    return (
        <>
            <Link href='https://www.facebook.com/s.t.c.sistematacticodecombate' target='_blank' rel='noreferrer' >
                <Image className='img-icons' src={facebook} alt='icono de facebook'
                    width={width}
                    height={height}
                />
            </Link>
            <Link href='https://www.instagram.com/stc_sistema_99/' target='_blank' rel='noreferrer' >
                <Image className='img-icons' src={instagram} alt='icono de instagram'
                    width={width}
                    height={height}
                />
            </Link>
            <Link href='https://www.tiktok.com/@guerreros_stc?is_from_webapp=1&sender_device=pc' target='_blank' rel='noreferrer' >
                <Image className='img-icons' src={tikTok} alt='icono de tiktok' width={width}
                    height={height} />
            </Link>
            <Link href='https://www.amazon.com/dp/B0C47NHQVD?ref_=pe_3052080_397514860' target='_blank' rel='noreferrer' >
                <Image className='img-icons' src={amazon} alt='icono de amazon' width={width}
                    height={height} />
            </Link>
        </>
    )
}
