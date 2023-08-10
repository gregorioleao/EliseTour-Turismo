import React from 'react';
import './index.css';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Outlet/>
      <footer>
        <div className='organizador-footer'><i className="fa fa-instagram" aria-hidden="true"><a href='https://www.instagram.com/elisetourviagens/'>@elisetourviagens</a></i></div>
        <div className='organizador-footer'><i className="fa fa-instagram" aria-hidden="true"><a href='https://www.instagram.com/catiaemb/'>@catiaemb</a></i></div>
        <div className='organizador-footer'><i className="fa fa-whatsapp" aria-hidden="true"><a>(21) 99800-5744</a></i></div>
      </footer>
      <div id='pe-direito'>
        EliseTour Viagens
      </div>
    </div>
    
  );
}

export default App;
