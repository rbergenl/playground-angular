import { Injectable } from '@angular/core';
import { User } from './user';
import idb from 'idb';

const userStore = 'user';
const userId = 'abc';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dbPromise;

  constructor() {
    this.dbPromise = idb.open('user-store', 1, upgradeDB => {
      upgradeDB.createObjectStore(userStore);
    });
  }

  updateUser(newUser: User) {
    return this.dbPromise.then(db => {
      const tx = db.transaction(userStore, 'readwrite');
      tx.objectStore(userStore).put(newUser, userId);
      return tx.complete;
    });
  }

  loadUser() {
    return this.dbPromise.then(db => {
      return db.transaction(userStore)
        .objectStore(userStore).get(userId);
    });
  }
}
