import { ApolloClient, InMemoryCache, from } from '@apollo/client'
import createFirestoreLink from '@steelbrain/apollo-link-firestore'

import firebase from './firebase'

const client = new ApolloClient({
	link: from([
		createFirestoreLink({
			firestore: firebase.firestore(),
		}),
	]),
	cache: new InMemoryCache(),
})

export default client
