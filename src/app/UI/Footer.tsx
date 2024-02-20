import Link from 'next/link';
import { Images } from '../Components/Images';
import Image from 'next/image';
import styles from '@/Home.module.css'

function Footer() {
  return (
    <>
      <section className='w-11/12 h-1/2 pt-12 flex items-center text-white justify-between ml-16 border-b-2 border-solid border-[#cbb26a] border-collapse'>
        <div className="block">
          <Image
          src="/wholelogogold.png" alt="logo STC es un escudo dorado con las letras STC a un lado" 
          width={150}
          height={150}
          priority
          />
          <div className="w-full h-full pt-7 block">
            <h4 className='text-xs pb-2.5 text-white'>
              Dirección
            </h4> 
            <p className='pb-8 font-["Libre_baskerville] text-[10px] text-xs text-white'>
              calle 36B # 42 - 25
            </p> 
            <h4 className='text-xs pb-2.5 text-white'>
              Contacto
            </h4> 
            <Link className='text-xs text-white block font-["Libre_baskerville]'
            href="mailto: luifer991@gmail.com" target='_blank' rel='noreferrer'>
              luifer991@gmail.com
            </Link>
            <Link className='block text-xs text-white font-["Libre_baskerville]'
            href="https://wa.me/573186922713" 
            target='_blank' rel='noreferrer'>
              +573186922713
            </Link>
            <div className={styles.rrss}>
                <Images />
            </div> 
          </div>               
        </div>
          <div className='grid grid-rows-[repeat(5,40px)] gap-2 pr-10 links-2'>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                  Programas de Prevención
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                  Tips de Seguridad
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Recursos de Apoyo
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                Contactanos
              </Link>
              <Link  href="#" target="_blank" rel="noopener noreferrer">
                FAQs
              </Link>            
          </div>
      </section>
      <footer className='p-16 flex items-start justify-between'>
        <p className='text-xs  text-white font-["Libre_baskerville]'>© 2023 STC. All rights reserved.</p> 
        <div className="foot-right">
          <Link className='pr-4 text-xs' href="#">Privacy Policy</Link>
          <Link className='pr-4 text-xs' href="#">Terms and Conditions</Link>
          <Link className='pr-4 text-xs' href="#">Cockies Policy</Link>
        </div>
      </footer>
    </>
  )
}

export default Footer