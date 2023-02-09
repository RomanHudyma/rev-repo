export type NotificationType = 'success' | 'warning' | 'error';

export interface Notification {
  id: string;
  message: string;
  timestamp: number;
  type: NotificationType;
}
