import firebase from 'firebase/app'; //needed to import the other 2
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCNnTwBn0usHqVO5ArlO8vOgfAHOnByJ0o",
    authDomain: "crwn-db-876c7.firebaseapp.com",
    databaseURL: "https://crwn-db-876c7.firebaseio.com",
    projectId: "crwn-db-876c7",
    storageBucket: "crwn-db-876c7.appspot.com",
    messagingSenderId: "27328672122",
    appId: "1:27328672122:web:45790f52786a0c00bbe6c3",
    measurementId: "G-X5PK1BD16Q"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){ //if there is any data or not
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //setting up gAuth
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
