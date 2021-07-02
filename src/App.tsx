import { ApolloProvider } from '@apollo/client'
import { useState } from 'react'
import { CreateMessages } from './components/CreateMessages'
import { GetMessages } from './components/GetMessages'
import client from './libs/apolloClient'

const App = () => {
	const [tab, setTab] = useState<'messages' | 'none'>('messages')

	return (
		<ApolloProvider client={client}>
			<div>
				<div onClick={() => setTab('messages')}>messages</div>
				<div onClick={() => setTab('none')}>none</div>
			</div>
			<br />
			<br />
			<br />
			{tab === 'messages' && (
				<>
					<GetMessages />
					<div>----------------------------</div>
					<CreateMessages />
				</>
			)}
			{tab === 'none' && <div>none page</div>}
		</ApolloProvider>
	)
}

export default App
