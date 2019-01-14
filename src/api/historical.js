import { client } from './client'


export const getHistoricals = () => client.get('/api/historical?interval=8')
