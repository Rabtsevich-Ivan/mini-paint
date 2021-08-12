import firebase from 'firebase';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from './../firebase/firebase';

export const saveData = (
  imageName: string,
  blob: Blob,
  user: firebase.User
): Promise<void> => {
  const storageRef = projectStorage.ref(imageName);
  const collectionRef = projectFirestore.collection('images');
  return storageRef
    .put(blob)
    .then(() => {
      return storageRef.getDownloadURL();
    })
    .then((url) => {
      const createdAt = timestamp();
      collectionRef.add({ user: user.email, createdAt, url });
    });
};
