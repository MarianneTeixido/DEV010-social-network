import { getDocs, collection } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase.js';

function feed(/* navigateTo */) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const querySnapshot = await getDocs(collection(db, 'Post'));
      console.log(querySnapshot.docs);
    // } else {
    //   loginCheck(user);
    }
  });

  const section = document.createElement('section');
  const title = document.createElement('h2');
  // const buttonHome = document.createElement('button');

  title.textContent = 'Feed';
  // buttonHome.textContent = 'Go home';

  section.append(title);

  // buttonHome.addEventListener('click', () => {
  //   navigateTo('/home');
  // });

  return section;
}

export default feed;
