// TODO: write your code here
//import sum from './basic';
import orderByProps from './object';

//console.log(sum([1, 2]));
const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
}

let arr = orderByProps(obj, ["name", "level"]);
console.log(arr);