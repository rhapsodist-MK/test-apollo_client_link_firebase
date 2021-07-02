import { makeVar } from '@apollo/client'
import { Message } from '../../components/GetMessages'

export const messagesVar = makeVar<Message[]>([])
