import React, { useState } from 'react';
import '../../style/components/layout/Header.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';
import {Link} from 'react-router-dom';
import programacion from '../../img/programacion.jpg';

function Header() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <div>
    <header>
      <NavContainer className='nav'>
        <h2><span>Nicolas Caliari</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
        <li className='li'> <Link className='link' to='/'>HOME</Link> </li>
        <li className='li'> <Link className='link' to='/Service'>SERVICE</Link> </li>
        <li className='li'> <a href="https://github.com/nicolascaliari">GITHUB</a> </li>
        <li className='li'> <Link className='link' to='/Contact'>CONTACTO</Link> </li>
        <li className='li'> <Link className='link' to='/Novedades'>NOVEDADES</Link> </li>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
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
    );
};

export default Header;


const NavContainer = styled.nav`
  h2{
    color: #fff;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #3D3D3D;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li Link{
    color: #000;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 20;
    li{
      color: #000;
      font-size: 2rem;
      display: block;
     
    }
    .nav {
      background: transparent;
      position: absolute;
      width: 100%;
    }



    @media(min-width: 768px){
      position: initial;
      margin: 0;
      li{
        font-size: 25px;
        color: #000;
        display: inline;
        font-weight:500;
        padding: 10px;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    li{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 600%;
  }
`