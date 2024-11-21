
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';


import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import NosotrosPage from './pages/NosotrosPage';




function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/productos' element={<ProductosPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
