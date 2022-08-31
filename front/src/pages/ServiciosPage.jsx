import '../style/components/pages/ServiciosPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function ServiciosPage() {
    return (
       
        <div className='contenedor-servicios'>

            <div className="div-servicios-h2">
                <h2>Nuestros servicios</h2>
            </div>


            <div className="contenedor-tarjeta">

                <div className="div-icono">

                    <h3><strong> Plan básico  </strong> </h3>
                </div>

             
                <ul className="div-lista-tarjeta">

                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Una pestaña con tu contenido.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Adaptable a todos los dispositivos.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Integración de redes sociales.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> APIS.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Formulario de contacto.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Contenido estático.</span></li>
                    <div className='div-btn'>  
                <a className='btn' href='https://github.com/nicolascaliari/portafolio/blob/main/src/component/layout/Header.jsx'>Ver ejemplo</a>
                </div>
                </ul>
                
            </div>



            <div className="contenedor-tarjeta2">

                <div className="div-icono">

                    <h3><strong> Plan estándar </strong> </h3>
                </div>

               

                <ul className="div-lista-tarjeta">

                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Incluye hasta 4 pestañas.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Adaptable a todos los dispositivos.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Integracion de redes sociales.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> APIS.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Formulario de contacto.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Contenido estático.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Ubicación de empresa/institución/etc.</span></li>
                    <div className='div-btn'>  
                <a className='btn' href='https://github.com/nicolascaliari/portafolio/blob/main/src/component/layout/Header.jsx'>Ver ejemplo</a>
                </div>
                </ul>

               
            </div>



            <div className="contenedor-tarjeta3">

                <div className="div-icono">

                    <h3> <strong> Plan premium </strong></h3>
                </div>

                

                <ul className="div-lista-tarjeta">

                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Mas de 6 pestañas.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Adaptable a todos los dispositivos.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Integracion de redes sociales.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> APIS.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Formulario de contacto.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Contenido estatico.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Sección auto gestionable.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Formas de pago.</span></li>
                    <li> <FontAwesomeIcon className='icon' icon={faCheck} /><span> Ubicación de empresa/institución/etc.</span></li>
                    <div className='div-btn'>  
                <a className='btn' href='https://github.com/nicolascaliari/portafolio/blob/main/src/component/layout/Header.jsx'>Ver ejemplo</a>
                </div>                    
                </ul>

            </div>
        </div>
    )
}

export default ServiciosPage;