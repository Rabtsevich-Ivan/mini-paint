import { projectFirestore } from '../firebase/firebase';
import { fetchImagesSuccess } from '../actions/data';

export const getData = (user: any) => {
  projectFirestore
    .collection('images')
    .orderBy('createdAt', 'desc')
    .where('user', '==', user.email)
    .get()
    .then((querySnapshot) => {
      let documents: Array<any> = [];
      console.log('doing file')
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      console.log(documents);
    })
    // .catch((err) => {
    //   console.log('Error getting queries', err);
    // });
};
