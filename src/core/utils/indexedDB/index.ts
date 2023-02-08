import Dexie, { Table } from 'dexie';

import { Notification } from './types';

export class IndexedDB extends Dexie {
  notifications!: Table<Notification, string>;

  constructor(name: string) {
    super(name);
    this.version(5).stores({
      notifications: '++id',
    });
  }
}

const db = new IndexedDB('database');

export default db;
