import { v4 as uuidv4 } from 'uuid';

import db from '.';

import { NotificationType } from './types';

// eslint-disable-next-line import/prefer-default-export
export const pushNotification = async (
  type: NotificationType,
  message: string,
): Promise<void> => {
  const id = uuidv4();

  await db.notifications.put({ id, type, message }, id);
};
