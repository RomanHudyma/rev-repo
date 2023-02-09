import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';

import db from '@utils/indexedDB';
import { Notification } from '@utils/indexedDB/types';

const NotificationControl: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleCreatingNotification = (primKey: string, obj: Notification) => {
    enqueueSnackbar(obj.message, { variant: obj.type });
  };

  useEffect(() => {
    db.notifications.hook('creating', handleCreatingNotification);

    return () => {
      db.notifications.hook('creating').unsubscribe(handleCreatingNotification);
    };
  }, []);

  return null;
};

export default NotificationControl;
