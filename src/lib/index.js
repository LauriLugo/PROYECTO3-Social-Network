import { initializeApp } from 'firebase/app'; //
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAF2gJx3-nMb9WaoJd82xBfmmtU0neZ2UA',
  authDomain: 'nanaisocialnetwork.firebaseapp.com',
  databaseURL: 'https://nanaisocialnetwork-default-rtdb.firebaseio.com',
  projectId: 'nanaisocialnetwork',
  storageBucket: 'nanaisocialnetwork.appspot.com',
  messagingSenderId: '117090233074',
  appId: '1:117090233074:web:1e82a71a00e02fdce8be6b',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export function crearUsuarioConCorreoYContraseña(email, contraseña) {
  return createUserWithEmailAndPassword(auth, email, contraseña);
}
export function iniciaSesionConCorreoYContraseña(email, contraseña) {
  return signInWithEmailAndPassword(auth, email, contraseña);
}

export function iniciaSesionConPopup() {
  return signInWithPopup(auth, provider);
}

export function createPost(post) {
  return addDoc(collection(db, 'posts'), {
    publication: post,
  });
}

console.log(app);
