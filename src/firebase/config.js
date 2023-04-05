import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB07RwM_kxFmB5xQurEnA38t1KzSf4csb8",
    authDomain: "vuex-lesson-1.firebaseapp.com",
    projectId: "vuex-lesson-1",
    storageBucket: "vuex-lesson-1.appspot.com",
    messagingSenderId: "428039998756",
    appId: "1:428039998756:web:b578b2bd01844a8bcb37b1"
}

// init firebase
initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }