import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyA0C8fzfol4bRTe-_6cnEanWIR1uf56UDw',
	authDomain: 'apollo-firebase-test-fec5a.firebaseapp.com',
	projectId: 'apollo-firebase-test-fec5a',
	storageBucket: 'apollo-firebase-test-fec5a.appspot.com',
	messagingSenderId: '564092088654',
	appId: '1:564092088654:web:3a2a258843165070106e1f',
	measurementId: 'G-6MNQHTLKRN',
}

try {
	firebase.app()
} catch (e) {
	firebase.initializeApp(firebaseConfig)
}

export default firebase
