import { Routes, Route } from 'react-router-dom';
import '../../style/components/layout/Header.css'
import programacion from '../../img/programacion.jpg'
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <div className="contenedor">
            <header className="header">
                <nav className="nav">
                    <Link className='logo' to='/'>Fidelity <strong className="code">Code</strong></Link>
                   
                    <button className="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul className="nav-menu">
                        <li className="nav-menu-item">
                            <Link className="nav-menu-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-menu-item">
                        <Link className="nav-menu-link" to='/service'>Service</Link>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link" href="https://github.com/nicolascaliari">GitHub Nicolas</a>
                        </li>
                        <li className="nav-menu-item">
                        <Link className="nav-menu-link" to='/contact'>Contact</Link>
                        </li>
                        <li className="nav-menu-item">
                        <Link className="nav-menu-link" to='/novedades'>Novedades</Link>
                        </li>
                    </ul>
                </nav>
            </header>

       
            <Routes>
        <Route path="/" element={
        <div className='contenedor-texto-header'>
        <p className='texto-header'>Vos imaginalo, nosotros lo programamos!</p>
        </div>
        
        
        }></Route>


        <Route path="/contact" element={<p className="texto-header">Contáctanos y realiza tus objetivos con nosotros!</p>} />
        <Route path="/service" element={ <p className='texto-header'>Mira nuestros servicios y elegí el que más te convenga para tu proyecto!</p>}></Route>
            </Routes>

         

         


     

            <img src={programacion} className="img-fluid" alt="" />


        </div>

    )
}

export default Header;