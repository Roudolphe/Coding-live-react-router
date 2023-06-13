import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';//on importe BrowserRouter

//on encardre notre App avec BrowserRouter
ReactDOM.render (

  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);


// MON MANIFESTE DE CREATION DES ROUTES EN REACT ETAPE PAR ETAPE:
// 1- index.js (voir ci-dessus)
// 2- Allez sur le fichier App.js
  // a- importer les Routes
  // b- Allez sur la fonction App et créér des Routes
// 3- créer un dossier dans src ''components" dans lequel on va creer nos differents elts:
  //dans notre cas on a creer des dossiers et fichiers (Home,About,Skills,Contacts)
//4-Mettre du contenu dans nos fichiers (voir les fichiers) et les impoter dans App.js
  //et complèter les Routes ( voir App.js)
// 5- Créer un dossier et fichier Navbar dans compnents et mettre du contenu
  // a.  créer d'abord des balises nav et ensuite importer link depuis react sur Navbar.js
  // b. importer Navbar sur App.js et placer la balise fermante Navbar sur les routes

  // NB: la route Contact avec id c'est pour rendre le chemin dynamique