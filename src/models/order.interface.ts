import User from './user.interface';

export default interface Order {
  id: number;
  user: User;
  date: Date;
}
