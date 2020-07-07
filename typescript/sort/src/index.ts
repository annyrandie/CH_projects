import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//numbers sorting
// const numbersCollection = new NumbersCollection([-3, 40, 8, 0, -10, 26, 100]);
// numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);

// sorter.sort();
// console.log(numbersCollection.data);

//string characters sorting
// const charactersCollection = new CharactersCollection('KBEIDFGHCJA');
// charactersCollection.sort();
// const sorter = new Sorter(charactersCollection);

// sorter.sort();
// console.log(charactersCollection.data);

//implement sorting of linked List
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(80);
linkedList.sort();

// const sorter = new Sorter(linkedList);
// sorter.sort();
linkedList.print();
