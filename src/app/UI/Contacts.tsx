import Card from '../Components/Card'


function Contacts() {
  return (
    <>
        <div className='card-container'>
            <Card 
              sect='grid-item1'
              img='icon'
              div='card__content'
              sub='subtitle'
              p='body'
              icon = '/email.png'
              alt = 'icono de email'
              subTitle = 'Email'
              body = 'Si necesitas cualquier ayuda o pregunta escribenos al siguiente email'
            > luifer991@gmail.com </Card>
            <Card 
              sect='grid-item1'
              img='icon'
              div='card__content'
              sub='subtitle'
              p='body'
              icon = '/whatsapp.png'
              alt = 'icono de whatsapp'
              subTitle = 'Whatsapp'
              body = 'Puedes escribirnos durante horas laborales si deseas una forma más rápida'
              href='https://wa.me/573186922713'
            > +573186922713 </Card>
            <Card
              sect='grid-item1'
              img='icon'
              div='card__content'
              sub='subtitle'
              p='body' 
              icon = '/ubicacion.png'
              alt = 'icono de ubicación'
              subTitle = 'Ubicación'
              body = 'Visitanos en Medellín Colombia para entrenar con nosotros'
            > Cll 36B #42 - 25 </Card> 
        </div>

        
    </>
  )
}


export default Contacts
