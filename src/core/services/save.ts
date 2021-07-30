import { StringLiteralLike } from 'typescript';
import {
    projectStorage,
    projectFirestore,
    timestamp,
  } from './../firebase/firebase';

export const saveData = (imageName: string, blob: Blob, user: any) => {
  const storageRef = projectStorage.ref(imageName);
  const collectionRef = projectFirestore.collection('images');
  storageRef.put(blob).on('state_changed', async () => {
    const url = await storageRef.getDownloadURL();
    const createdAt = timestamp();
    collectionRef.add({ user: user.email, createdAt, url });
  });
};
