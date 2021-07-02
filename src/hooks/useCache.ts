import { DocumentNode } from 'graphql'
import { useEffect, useState } from 'react'
import client from '../libs/apolloClient'

type UseCacheProps = {
	query: DocumentNode
	target: string
}

export function useCache<T>({ query, target }: UseCacheProps) {
	const [result, setResult] = useState<any>(undefined)
	const test = client.cache.extract()

	console.log('##################')
	console.log(client)
	console.log('##################')

	useEffect(() => {
		const data = client.readQuery({ query })
		if (data) setResult(data[target])
	}, [test])

	return { result }
}
