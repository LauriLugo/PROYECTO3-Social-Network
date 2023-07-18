import {
  crearUsuarioConCorreoYContraseña,
  iniciaSesionConCorreoYContraseña,
  iniciaSesionConPopup,
  emailUsuario,
  createPost,
  getPosts,
  deletePost,
  updatePost,
  likePost,
} from '../src/lib/index';

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
}));

const firebaseUser = {
  currentUser: {
    email: 'emailDelUsuario',
  },
};

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => firebaseUser),
  signInWithEmailAndPassword: jest.fn((auth, email, contraseña) => `correo:${email}, contraseña:${contraseña}`),
  signInWithPopup: jest.fn(() => 'TextoDePuebaDePopUp'),
  GoogleAuthProvider: jest.fn(),
  createUserWithEmailAndPassword: jest.fn((auth, email, contraseña) => `correo:${email}, contraseña:${contraseña}`),
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn((_, { publication: post }) => `post:${post}`),
  getDocs: jest.fn(() => 'postDelUsuario'),
  doc: jest.fn((_, __, id) => id),
  deleteDoc: jest.fn((id) => id),
  updateDoc: jest.fn((id, { publication: post }) => `id:${id}, post:${post}`),
}));

describe('crearUsuarioConCorreoYContraseña', () => {
  it('Debería ser una función', () => {
    expect(typeof crearUsuarioConCorreoYContraseña).toBe('function');
  });
  it('Deberia llamar a la funcion crearUsuarioConCorreoYContraseña', async () => {
    const email = 'test@example.com';
    const password = 'password';
    expect(await crearUsuarioConCorreoYContraseña(email, password)).toBe(`correo:${email}, contraseña:${password}`);
  });
});

describe('iniciaSesionConCorreoYContraseña', () => {
  it('Debería ser una función', () => {
    expect(typeof iniciaSesionConCorreoYContraseña).toBe('function');
  });
  it('Deberia llamar a la funcion iniciaSesionConCorreoYContraseña', async () => {
    const email = 'test@example.com';
    const password = 'password';
    expect(await iniciaSesionConCorreoYContraseña(email, password)).toBe(`correo:${email}, contraseña:${password}`);
  });
});

describe('iniciaSesionConPopup', () => {
  it('Debería ser una función', () => {
    expect(typeof iniciaSesionConPopup).toBe('function');
  });
  it('Deberia llamar a la funcion iniciaSesionConPopup', async () => {
    expect(await iniciaSesionConPopup()).toBe('TextoDePuebaDePopUp');
  });
});

describe('createPost', () => {
  it('Debería ser una función', () => {
    expect(typeof createPost).toBe('function');
  });
  it('Deberia llamar a la funcion createPost', async () => {
    const post = 'postDePrueba';
    expect(await createPost(post)).toBe(`post:${post}`);
  });
});

describe('emailUsuario', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof emailUsuario).toBe('function');
  });
  it('Deberia llamar a la funcion emailUsuario', () => {
    expect(emailUsuario()).toBe('emailDelUsuario');
  });
});

describe('getPosts', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof getPosts).toBe('function');
  });
  it('Deberia llamar a la funcion getPosts', async () => {
    expect(await getPosts()).toBe('postDelUsuario');
  });
});

describe('deletePost', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof deletePost).toBe('function');
  });
  it('Deberia llamar a la funcion deletePost', async () => {
    const id = 'idDePrueba';
    expect(await deletePost(id)).toBe(id);
  });
});

describe('updatePost', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof updatePost).toBe('function');
  });
  it('Deberia llamar a la funcion updatePost', async () => {
    const id = 'idDePrueba';
    const post = 'postDePrueba';
    expect(await updatePost(id, post)).toBe(`id:${id}, post:${post}`);
  });
});

describe('likePost', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof likePost).toBe('function');
  });
});
