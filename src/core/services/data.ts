import { projectFirestore } from '../firebase/firebase';
import { Image } from './../interfaces/image';
import firebase from 'firebase';

export const getData = (user: firebase.User): Promise<Image[]> => {
  return projectFirestore
    .collection('images')
    .orderBy('createdAt', 'desc')
    .where('user', '==', user.email)
    .get()
    .then((querySnapshot) =>
      querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id } as Image;
      })
    );
};
