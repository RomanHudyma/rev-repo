import Dexie, { Table } from 'dexie';

import { Notification } from './types';

export class IndexedDB extends Dexie {
  notifications!: Table<Notification, string>;

  constructor(name: string) {
    super(name);
    this.version(1).stores({
      notifications: '++id, timestamp',
    });
  }
}

const db = new IndexedDB('database');

export default db;
