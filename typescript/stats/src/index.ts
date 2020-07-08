//import file system from node.js
//to use it install type definition file
//npm install @types/node
import fs from 'fs';
import { rosybrown } from 'color-name';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(matches);
