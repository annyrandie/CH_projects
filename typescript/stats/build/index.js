"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import file system from node.js
//to use it install type definition file
//npm install @types/node
// import fs from 'fs';
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var dateOfFirstMatch = reader.data[0];
console.log(reader.data[0]);
//enum - enumeration
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man Umited' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchester United won " + manUnitedWins + " games");
