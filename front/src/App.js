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
          <Route path='Contact' element={<ContactPage />}/>
          <Route path='Service' element={ <ServiciosPage />}/>
          <Route path='Novedades' element={<NovedadesPage />}/>
        </Routes>

      </BrowserRouter>
  
    
    <Footer 
    />
    </div>
  );
}

export default App;
