import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../firebase/firebaseConfig'

export const firebaseStorage = () => {
  const uploadImage = async ({ collectionName, file }) => {
    if (!file) throw new Error('File not found')

    const storageRef = ref(storage, `${collectionName}/` + file.name)

    try {
      const snapshot = await uploadBytes(storageRef, file)

      const downloadURL = await getDownloadURL(snapshot.ref)

      console.log('download URL', downloadURL)
      return downloadURL
    } catch (error) {
      console.log('Upload failed', error)
      throw error
    }
  }

  return {
    uploadImage,

    uploadImages: async ({ collectionName, files }) => {
      console.log('undefined', collectionName, files)
      try {
        const filePromises = Array.from(files, file => uploadImage({ collectionName, file }))

        const fileRes = await Promise.all(filePromises)
        return fileRes // list of url like ["https://..", ...]
      } catch (error) {
        console.log('Upload failed', error)
        throw error
      }
    },
  }
}
