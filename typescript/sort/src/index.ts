import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([-3, 40,8, 0, -10, 26, 100]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
