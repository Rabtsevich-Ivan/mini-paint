import toast from 'react-hot-toast';

export const notifySuccess = (message: string): string =>
  toast.success(message);

export const notifyFailed = (message: string): string => toast.error(message);
