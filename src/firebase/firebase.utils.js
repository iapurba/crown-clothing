import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCEb3vLd_ulbaqMMB_xKSEyBLfZtkZmtBY",
    authDomain: "crown-db-609a4.firebaseapp.com",
    projectId: "crown-db-609a4",
    storageBucket: "crown-db-609a4.appspot.com",
    messagingSenderId: "319437947232",
    appId: "1:319437947232:web:faa21eaf3a33e684e3de05",
    measurementId: "G-LZB0YDH4NX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();

  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt, 
        ...additionalData
      })

    } catch (error) {
        console.log('error creating user', error.message)
    }
  }
  return userRef;
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;