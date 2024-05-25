import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAY2tSk4P70QtHUcbQ5p7QVcsbV60WtpY',
  authDomain: 'society-management-syste-446c5.firebaseapp.com',
  projectId: 'society-management-syste-446c5',
  storageBucket: 'society-management-syste-446c5.appspot.com',
  messagingSenderId: '156186867810',
  appId: '1:156186867810:web:ac7dfb99cdfd69b7e1f93b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
