import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCmvw3GuVKvoKPCKccnIzshkl3WBhI3l98',
  authDomain: 'travel-guru-a20a5.firebaseapp.com',
  projectId: 'travel-guru-a20a5',
  storageBucket: 'travel-guru-a20a5.appspot.com',
  messagingSenderId: '5568175740',
  appId: '1:5568175740:web:9605279ff909829317f3f9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
