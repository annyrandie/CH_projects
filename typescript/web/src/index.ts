import { User } from './models/User';

const user = new User({ name: 'Anna', age: 27 });

user.set({ name: 'newname' });

console.log(user);
