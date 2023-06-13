import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Team from './components/Team/Team';
import Contacts from './components/Contacts/Contacts';
import Navbar from './components/Navbar/Navbar';
import Blockchain from './components/Services/Blockchain/Blockchain';
import DApps from './components/Services/DApps/DApps';
import Developpement from './components/Services/Developpement/Developpement';
import Others from './components/Services/Others/Others';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/about' element={<About />}/> 
        <Route path='/services' element={<Services />}>
        <Route path='/services/blockchain' element={<Blockchain />}/>
        <Route path='/services/dapps' element={<DApps />}/>
        <Route path='/services/developpement' element={<Developpement />}/>
        <Route path='/services/others' element={<Others />}/>
        </Route>

        <Route path='/skills' element={<Skills />}/> 
        <Route path='/team' element={<Team />}/> 
        <Route path='/contacts' element={<Contacts />}/> 

      </Routes>

      
    </div>
  );
}

export default App;
