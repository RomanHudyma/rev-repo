import { v4 as uuidv4 } from 'uuid';

import db from '.';

import { NotificationType } from './types';

// eslint-disable-next-line import/prefer-default-export
export const pushNotification = async (
  type: NotificationType,
  message: string,
): Promise<void> => {
  const id = uuidv4();
  const timestamp = Date.now();

  await db.notifications.put({ id, type, message, timestamp }, id);
};

export const cleanUpDB = async (): Promise<void> => {
  const weekAgo = new Date(Date.now() - 60 * 60 * 1000 * 24 * 7);

  await db.notifications.where('timestamp').below(weekAgo).delete();
};
