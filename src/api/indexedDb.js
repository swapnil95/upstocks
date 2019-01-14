import { openDb } from 'idb'


export const dbPromise = openDb('live-data-store', 1, upgradeDB => {
  upgradeDB.createObjectStore('data-store')
})
