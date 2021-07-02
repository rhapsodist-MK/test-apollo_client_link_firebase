import { gql } from '@apollo/client/core'

export const getMessagesQuery = gql`
	query {
		messages @firestore(collection: "messages") {
			id
			title
			description
		}
	}
`
