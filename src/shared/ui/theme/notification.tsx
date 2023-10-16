import { Store, iNotification, ReactNotifications } from 'react-notifications-component';
import "react-notifications-component/dist/theme.css";

type Notification = {
  type?: string | number;
  message?: string;
};

export const notify = (notification: Notification) => {
  if (!notification) return;

  const getTitle = () => {
    switch (notification.type) {
      case '200':
      case 200:
        return 'Success';
      case 10000:
      case '10000':
        return 'Oops!';
      default:
        return 'Oops!';
    }
  };

  const getType = () => {
    switch (notification.type) {
      case '200':
      case 200: {
        return 'success';
      }
      case 10000:
      case '10000':
        return 'warning';
      default:
        return 'warning';
    }
  };

  const settings: iNotification = {
    title: getTitle(),
    message: notification.message || '',
    type: getType(),
    insert: 'top', // Изменено на 'top-full'
    container: 'top-right', // Изменено на 'bottom-full'
    animationIn: ['animated', 'flipInX'],
    animationOut: ['animated', 'flipOutX'],
    dismiss: {
      duration: 4000,
      onScreen: true,
    },
  };

  Store.addNotification(settings);
};


export const withNotifications = (component: () => React.ReactNode) =>
  function WithNotifications() {
    return (
      <>
        <ReactNotifications />
        {component()}
      </>
    );
  };