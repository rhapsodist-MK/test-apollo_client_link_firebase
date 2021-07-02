import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { getMessagesQuery } from '../graphql/querys/getMessages'
import { useCache } from '../hooks/useCache'

type BaseProps = {}
export type GetMessagesProps = BaseProps

export type Message = {
	id: string
	title: string
	description: string
}

export const GetMessages: React.FC<GetMessagesProps> = () => {
	const [messages, setMessages] = useState<Message[]>()

	useQuery(getMessagesQuery, {
		onCompleted: (data: { messages: Message[] }) => {
			setMessages(data.messages)
		},
		onError: (err) => {
			console.log('@@@@@@@@@@@@@@@@@@@@')
			console.log(err)
			console.log('@@@@@@@@@@@@@@@@@@@@')
		},
	})

	const handleDelete = (id: string) => {
		console.log('%%%%%%%%%%%%%%')
		console.log(id)
		console.log('%%%%%%%%%%%%%%')
	}

	if (!messages) return <div>no data</div>
	return (
		<div>
			{messages?.map((message) => (
				<div key={message.id} style={{ border: '1px solid black' }}>
					<div>id: {message.id}</div>
					<div>title: {message.title}</div>
					<div>description: {message.description}</div>
					<button onClick={() => handleDelete(message.id)}>delete</button>
				</div>
			))}
		</div>
	)
}
