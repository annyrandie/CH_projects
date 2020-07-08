//import file system from node.js
//to use it install type definition file
//npm install @types/node
// import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');

reader.read();
const dateOfFirstMatch = reader.data[0];
console.log(reader.data[0]);
//enum - enumeration

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man Umited' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} games`);
