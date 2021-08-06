import { projectFirestore } from '../firebase/firebase';
import { ImageInterface } from './../interfaces/image';


export const getData = (user: any): Promise<ImageInterface[]> => {
  return projectFirestore
    .collection('images')
    .orderBy('createdAt', 'desc')
    .where('user', '==', user.email)
    .get()
    .then((querySnapshot) =>
      querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
    );
};
