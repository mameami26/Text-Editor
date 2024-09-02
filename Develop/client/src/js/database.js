import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
// open database.
const contentDb = await openDB('jate', 1)
// new transaction.
const tx = contentDb.transaction('jate','readwrite');
// open what you want to store.
const store = tx.objectStore('jate');
// use the put methode to add or update data in the store.
const request = store.put({ id: 1, content: content});

// Get confirmation of the request
const result = await request;
console.log('result.value', result);
return result;

};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

// open database.
const contentDb = await openDB('jate', 1);
// new transaction.
const tx = contentDb.transaction('jate', 'rendonly');
// open what you want to store.
const store = tx.objectStore('jate');
// use the get methode to add or update data in the store.
const request = store.getAll();

// Get confirmation of the request
const result = await request;
console.log('result.value', result);
return result;
};


initdb();
