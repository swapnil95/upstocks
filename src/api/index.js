import io from 'socket.io-client'
const socket = io.connect(`${process.env.REACT_APP_BASE_URL}/watch`)

export const subscribe = (callback) => {
  socket.emit('sub', { state: true })
  socket.on('data', (data, fn) => {
    callback(data)
    fn(1)
  })
  socket.on('error', (data) => {
    callback(data, true)
  })
}

export const unsubscribe = () => {
  socket.emit('unsub', { state: false })
}

export * from './historical'
export * from './indexedDb'
