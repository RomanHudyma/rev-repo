import React, { useEffect, useState } from 'react';

import db from '@utils/indexedDB';
import { Notification } from '@utils/indexedDB/types';

const NotificationControl: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState<Notification>();

  const handleCreatingNotification = (primKey: string, obj: Notification) => {
    setShowToast(true);
    setToastData(obj);
    console.log('obj', obj);
  };

  useEffect(() => {
    db.notifications.hook('creating', handleCreatingNotification);

    return () => {
      db.notifications.hook('creating').unsubscribe(handleCreatingNotification);
    };
  }, []);

  return <div />;
};

export default NotificationControl;
