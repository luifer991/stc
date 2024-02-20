import Hero from "./UI/Hero";
import Section from "./UI/Section";
import NewsLetter from "./UI/NewsLetter";
import Cta from "./UI/CTA";
import Contacts from "./UI/Contacts";
import { StickyScrollRevealDemo } from "./UI/StickyScroll";


export default function Home() {
  return (
    <>
      <Hero />
          {/* Explained section about STC's System */}
          <Section 
          text='Simple'
          title='Fácil de aprender para todos los usuarios'
          body='Nuestro programa ofrece una solución rápida y adaptable para prevenir situaciones de violencia.'
          image='/boxing.jpeg'
          alt='dos hombre practicando brasilian jiu jitsu'
          icon='/safe.jpeg'
          altTwo='icono de un escudo'
          bodyTwo='Toma el control de tu seguridad con las caracteristicas de STC'
          iconTwo='/fuerzaFisica.jpeg'
          altThree='icono de musculos'
          bodyThree='Te sentirás mas preparado para cualquier situación'
          imageTop="/jiujistsu.jpeg"
          altThreeTop="un ocmbate de jiujitsu brasilero"
          />
              <StickyScrollRevealDemo />
              {/* Section explaining STC 
      <Section1
          text='Mantente a salvo con STC'
          title='Experimenta el Poder de STC por Ti Mismo'
          body='Descubre cómo STC puede revolucionar tu seguridad personal. ¡Regístrate hoy y toma el control de tu seguridad!'
          icon='/adapt.jpeg'
          alt='icono de personalizable'
          subTitle='STC es Personalizable'
          bodyTwo='STC está diseñado para adaptarse a cada usuario, asegurando una experiencia personalizada.'
          iconTwo='/judo.jpeg'
          altTwo='icono de judo'
          subTitleTwo='Mantente Protegido en Cualquier Momento'
          bodyThree='STC proporciona una variedad de características de vanguardia para mejorar su seguridad'
          iconThree='/seguridad.jpeg'
          altThree='icono de prioridad'
          subTitleThree='STC: Tu Seguridad, Nuestra Prioridad'
          bodyFour='STC garantiza tu seguridad con sus medidas de seguridad sólidas y confiables'
          imageTop=""
          altThreeTop=""
      /> */}
          {/* Seccion 2 */}
          <Section 
          text='Flexibilidad'
          title='Manténgase seguro y protegido con STC'
          body='STC te proporciona una mayor seguridad y tranquilidad. Nuestro programa está diseñado para adaptarse a las necesidades de cada usuario, independientemente de su condición física.'
          image='/serious.jpeg'
          alt='un hombre caminando despues de haberse librado de sus asaltantes'
          icon='/beneficio.jpeg'
          altTwo='icono de mejora'
          bodyTwo='STC garantiza su seguridad aportando soluciones adaptables'
          iconTwo='/aprender.jpeg'
          altThree='icono de algo facil'
          bodyThree='Te sentirás más preparado para cualquier situación'
          imageTop="/walkingAtNight.jpeg"
          altThreeTop="un hombre caminando en la noche"
          />
          {/*<Section1
          text='Previene la Violencia'
          title='Utiliza STC en cualquier escenario'
          body='STC es un programa que te ayuda a prevenir situaciones de violencia, independientemente de tu condición física.'
          icon='/mejora.jpeg'
          alt='icono de crecimiento'
          subTitle='Mejora tu Seguridad con STC'
          bodyTwo='STC puede adaptarse a diferentes situaciones, asegurandote que puedas prevenir la violencia'
          iconTwo='/poder.jpeg'
          altTwo='icono de confianza'
          subTitleTwo='Empodérate con STC'
          bodyThree='STC asegura una solución segura para cualquier persona en cualquier escenario'
          iconThree='/comunidad.jpeg'
          altThree='algo'
          subTitleThree='Únete a nuestra comunidad'
          bodyFour='STC empodéra a sus usuarios con las herramientas para prevenir la violencia y librarse de cualquier peligro'
          imageTop=""
  altThreeTop=""
      />*/}
      <Cta />
      <NewsLetter />
      <Contacts />
    </>
  );
}
