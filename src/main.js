//duda 8:03
// file main.js
import { initializeApp } from 'firebase/app'; //Función para inicializar la app
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import home from './home.js';
import login from './login.js';
import error from './error.js';

//-------------Firebase----------------------------------------//
//Objeto de configuración Firebase que pasa la función de inicialización
//Devuelve una instancia de aplicación Firebase
//SDK
//JS module bundlers
//Browser Modules permiten importar código como módulos

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCabIXmNKkbhps1_MJUAYHUcVXKuTs9Tn4",
  authDomain: "vitalhub-4457d.firebaseapp.com",
  projectId: "vitalhub-4457d",
  storageBucket: "vitalhub-4457d.appspot.com",
  messagingSenderId: "801175473249",
  appId: "1:801175473249:web:d23a4220f3a29d309e6e20"
});  

//Funciones que toman el servicio de FB como primer parámetro.
const auth = getAuth(firebaseApp);
//const db = getFirestore(firebaseApp);
//const todosCol = collection(db,'todos');
//const snapshot = await getDocs(todosCol);

//Detecta el estado de autentificación
onAuthStateChanged(auth, user => {
if(user != null){
  console.log('logged in');
}else{
console.log('No user');
}

});


//-------------Navegación----------------------------------------//

const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/error', component: error },
  ];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
    const route = routes.find((routeFound) => routeFound.path === hash);
    
    if (route && route.component) {
      window.history.pushState(
        {},
        route.path,
        window.location.origin + route.path,
      );
  
      if (root.firstChild) {
        root.removeChild(root.firstChild);
      }
      root.appendChild(route.component(navigateTo));
     } else {
      navigateTo('/error');
    }
  }
  
  window.onpopstate = () => {
    navigateTo(window.location.pathname);
  };
  
// import { myFunction } from './lib/index.js';

// myFunction();
