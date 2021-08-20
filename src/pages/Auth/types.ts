import { User } from './../../core/interfaces/user';

export interface AuthProps {
  onSubmit: (data: User) => void;
}
