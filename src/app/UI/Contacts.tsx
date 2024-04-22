import Card from '../Components/Card'


function Contacts() {
  return (
    <>
        <div className='card-container'>
            <Card 
              sect='grid-item1'
              img='icon'
              div='card__content'
              p='body'
              icon = '/email.png'
              alt = 'icono de email'
              body = 'Si necesitas cualquier ayuda o pregunta escribenos al siguiente email'
            />
            <Card 
              sect='grid-item1'
              img='icon'
              div='card__content'
              p='body'
              icon = '/whatsapp.png'
              alt = 'icono de whatsapp'
              body = 'Puedes escribirnos durante horas laborales si deseas una forma más rápida'
            />
            <Card
              sect='grid-item1'
              img='icon'
              div='card__content'
              p='body' 
              icon = '/ubicacion.png'
              alt = 'icono de ubicación'
              body = 'Visitanos en Medellín Colombia para entrenar con nosotros'
            />
        </div>

        
    </>
  )
}


export default Contacts
