// TODO: write your code here
//import sum from './basic';
import orderByProps from './object';
import destructuring from './destructuring';

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

const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
            // <- обратите внимание, описание "засекречено"
        }
    ]
}
const special = destructuring(character.special);
console.log(special);