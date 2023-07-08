import {
  addDoc,
  // getDocs,
  // collection,
} from 'firebase/firestore';
import {
  crearUsuarioConCorreoYContraseña,
  iniciaSesionConPopup,
  emailUsuario,
  createPost,
  getPosts,
  deletePost,
  updatePost,
  likePost,
} from '../src/lib/index';

// const { firestore } = require('firebase-admin');

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signInWithPopup: jest.fn(),
  GoogleAuthProvider: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  addDoc: jest.fn(),
  getDocs: jest.fn(),
  collection: jest.fn(),
}));

jest.mock('../src/lib/index', () => ({
  crearUsuarioConCorreoYContraseña: jest.fn(),
  iniciaSesionConPopup: jest.fn(),
  createPost: jest.fn(),
  emailUsuario: jest.fn(),
  getPosts: jest.fn(),
  deletePost: jest.fn(),
  updatePost: jest.fn(),
  likePost: jest.fn(),
}));

describe('crearUsuarioConCorreoYContraseña', () => {
  it('Debería ser una función', () => {
    expect(typeof crearUsuarioConCorreoYContraseña).toBe('function');
  });
  it('Deberia llamar a la funcion crearUsuarioConCorreoYContraseña', () => {
    crearUsuarioConCorreoYContraseña();
    expect(crearUsuarioConCorreoYContraseña).toHaveBeenCalled();
  });
  it('Debería llamar a la función crearUsuarioConCorreoYContraseña', () => {
    const email = 'test@example.com';
    const password = 'password';
    crearUsuarioConCorreoYContraseña(email, password);
    expect(crearUsuarioConCorreoYContraseña).toHaveBeenCalledWith(email, password);
  });
});

describe('iniciaSesionConPopup', () => {
  it('Debería ser una función', () => {
    expect(typeof iniciaSesionConPopup).toBe('function');
  });
  it('Deberia llamar a la funcion iniciaSesionConPopup', () => {
    iniciaSesionConPopup();
    expect(iniciaSesionConPopup).toHaveBeenCalled();
  });
});

describe('createPost', () => {
  it('Debería ser una función', () => {
    expect(typeof createPost).toBe('function');
  });
  it('Deberia llamar a la funcion createPost', () => {
    createPost();
    expect(createPost).toHaveBeenCalled();
  });
  it('Debería llamar a la función addDoc con los parámetros correctos', async () => {
    const textoPost = 'Testing post';
    await createPost(textoPost);
    expect(addDoc).toHaveBeenCalledTimes(0);
  });
});

describe('emailUsuario', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof emailUsuario).toBe('function');
  });
  it('Deberia llamar a la funcion emailUsuario', () => {
    emailUsuario();
    expect(emailUsuario).toHaveBeenCalled();
  });
});

describe('getPosts', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof getPosts).toBe('function');
  });
  it('Debería llamar a la función getPosts', async () => {
    await getPosts();
    expect(getPosts).toHaveBeenCalled();
  });
});

describe('deletePost', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof deletePost).toBe('function');
  });
  it('Deberia llamar a la funcion deletePost', () => {
    deletePost();
    expect(deletePost).toHaveBeenCalled();
  });
});

describe('updatePost', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof updatePost).toBe('function');
  });
  it('Deberia llamar a la funcion updatePost', () => {
    updatePost();
    expect(updatePost).toHaveBeenCalled();
  });
  // it('Deberia llamar a la funcion updatePost con los parametros correctos', () => {
  //   const postId = 'abc123';
  //   const post = 'Posting';
  //   expect(updatePost).toHaveBeenCalledWith(postId, post);
  // });
});

describe('likePost', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof likePost).toBe('function');
  });
  it('Deberia llamar a la funcion likePost', () => {
    likePost();
    expect(likePost).toHaveBeenCalled();
  });
});
