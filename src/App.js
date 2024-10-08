import './App.css';
import Navbar from './components/Navbar';
import Resources from './components/Resources';
import Contacts from './components/Contacts';
import React, { useState } from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
   const [search, setSearch] = useState('');
  return (
    
    <Router>
      <div className='app'>
    {/* <Navbar title="Wiki"/> */}
    <Navbar setSearch={setSearch}/>
    <div className='content'>
    <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route exact path="/resources" element={<Resources search={search} />}> </Route>
          <Route exact path="/contacts" element={<Contacts />}> </Route>
          
         
        </Routes>
       
  </div>
  <Footer />
    </div>
   
    </Router>
  
    
  );
}

export default App;
