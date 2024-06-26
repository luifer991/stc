import React from "react"
import Button from "../Components/Button";

function Cta() {
    return (
      <>
          <section className='block bg-[url(/golpear.png)] bg-no-repeat bg-cover bg-[20%] w-full h-1/2 pb-[3rem]' >
            <article className="max-w-[960px] m-auto">
              <div className="pb-20 max-w-[600px] text-[#ffffff99]">
                <h2 className="justify-centertext-start text-[50px] pb-7 pt-12 text-[#cbb26acc]">Descubre STC</h2>
                <p className="font-['Libre_Baskerville'] max-w-[400px]">Promover la Seguridad y Crear Comunidades más Seguras</p>
              </div>
              <div className="pt-0 mt-0">
                  <Button classb="l-btn" text="¡Empezar Ya!" />
              </div>
            </article>
            
          </section>
      </>
    )
  }

export default Cta