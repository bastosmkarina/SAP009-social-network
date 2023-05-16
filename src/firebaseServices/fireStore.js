import {
  getFirestore,
  getDocs,
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import { app } from '../firebaseInit.js';

const db = getFirestore(app);

export const newPost = (postagem, dataPostagem, username, id) => addDoc(collection(db, 'post'), {
  data: dataPostagem,
  post: postagem,
  idUser: id,
  username,
});

export const accessPost = async () => {
  const messages = [];
  const queryOrder = query(collection(db, 'post'), orderBy('data', 'desc'));
  const querySnapshot = await getDocs(queryOrder);
  querySnapshot.forEach((item) => {
    const data = item.data();
    data.id = item.id;
    messages.push(data);
  });
  return messages;
};

export const editPost = (postId, textArea) => updateDoc(doc(db, 'post', postId), {
  post: textArea,
});

export const deletePost = async (postId) => deleteDoc(doc(db, 'post', postId));
