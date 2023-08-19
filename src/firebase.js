// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'firebase/app'; // Función para inicializar la app
// eslint-disable-next-line import/no-unresolved
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// -------------Firebase----------------------------------------//
// Objeto de configuración Firebase que pasa la función de inicialización
// Devuelve una instancia de aplicación Firebase
// SDK

const firebaseConfig = {
  apiKey: 'AIzaSyCabIXmNKkbhps1_MJUAYHUcVXKuTs9Tn4',
  authDomain: 'vitalhub-4457d.firebaseapp.com',
  projectId: 'vitalhub-4457d',
  storageBucket: 'vitalhub-4457d.appspot.com',
  messagingSenderId: '801175473249',
  appId: '1:801175473249:web:d23a4220f3a29d309e6e20',
};

// Funciones que toman el servicio de FB como primer parámetro.
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
// const todosCol = collection(db,'todos');
// const snapshot = await getDocs(todosCol);

// Detecta el estado de autentificación
// onAuthStateChanged(auth, user => {
//   if (user != null) {
//     console.log('logged in');
//   } else {
//     console.log('No user');
//   }
// });

// export default initializeApp;
