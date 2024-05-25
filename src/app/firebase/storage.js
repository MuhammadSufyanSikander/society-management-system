import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from './firebaseConfig'

export const uploadImage = async ({ collectionName, file }) => {
  const storageRef = ref(storage, `${collectionName}/` + file.name)

  try {
    const snapshot = await uploadBytes(storageRef, file)

    const downloadURL = await getDownloadURL(snapshot.ref)

    return downloadURL
  } catch (error) {
    console.log('Upload failed', error)
    throw error
  }
}
