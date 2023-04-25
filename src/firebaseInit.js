import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCanlJeak7XZ4ldCUsjwr8cxWe2CbyPxbg',
  authDomain: 'social-network-i.firebaseapp.com',
  projectId: 'social-network-i',
  storageBucket: 'social-network-i.appspot.com',
  messagingSenderId: '555386405181',
  appId: '1:555386405181:web:b456158ba849c74a524554',
  measurementId: 'G-VTWY89QDEH',
};

export const app = initializeApp(firebaseConfig);
