import React, { useState } from 'react'
import { getMessagesQuery } from '../graphql/querys/getMessages'
import client from '../libs/apolloClient'
import firebase from '../libs/firebase'

type BaseProps = {}
export type CreateMessagesProps = BaseProps

export const CreateMessages: React.FC<CreateMessagesProps> = () => {
	const [id, setId] = useState<string>('')
	const [title, setTitle] = useState<string>('')
	const [description, setDescription] = useState<string>('')

	const handleClick = async () => {
		await firebase
			.firestore()
			.collection('messages')
			.doc(id)
			.set({
				title,
				description,
			})
			.then(() => {
				const datas = client.readQuery({ query: getMessagesQuery })
				client.writeQuery({
					query: getMessagesQuery,
					data: {
						messages: [
							...datas.messages,
							{
								id,
								title,
								description,
								__typename: 'messages',
							},
						],
					},
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<div>CreateMessages</div>
			<input
				type="text"
				placeholder="id"
				value={id}
				onChange={(e) => setId(e.target.value)}
			/>
			<input
				type="text"
				placeholder="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type="text"
				placeholder="description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button onClick={handleClick}>create</button>
		</div>
	)
}
