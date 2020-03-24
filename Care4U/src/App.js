import React from 'react';
import './css/app.css';
import './css/home.css';
import Navbar from './Component/Navbar';
import Cards from './Component/Card';
import Homecare from './Component/Homecare';
import Concierge from './Component/Concierge';
import Equipment from './Component/Equipment';
import Footer from './Component/Footer';
import { BrowserRouter, Route} from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <header>
      <Navbar />
    </header>
    <main>
      <Route exact path='/'>
        <Cards />
      </Route>
      <Route path='/homecare'>
        <Homecare />
      </Route>
      <Route path='/concierge'>
        <Concierge />
      </Route>
      <Route path='/equipment'>
        <Equipment />
      </Route>
    </main>
    <footer className='mt-5'>
      <Footer />
    </footer>
  </BrowserRouter>
)

export default App;