import sum from "./modulo1.js";
import * as moduleInt from "./modulo1.js";
import{name} from "./modulo1.js";
import {lastName as last} from "./modulo1";
import{name as name2, lastName as last2, age} from "./modulo1.js";
import sum1, * as anotherModule from "./modulo1.js";

console.log(name2, sum, moduleInt, name, last, last2, age);
console.log(sum1, anotherModule);