import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';



import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServiciosPage from './pages/ServiciosPage';
import NovedadesPage from './pages/NovedadesPage';




function App() {
  return (
    <div className="App">
     
    

      <BrowserRouter>
     <Header/>

        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='contact' element={<ContactPage />}/>
          <Route path='service' element={ <ServiciosPage />}/>
          <Route path='novedades' element={<NovedadesPage />}/>
        </Routes>

      </BrowserRouter>
  
    
    <Footer 
    />
    </div>
  );
}

export default App;
