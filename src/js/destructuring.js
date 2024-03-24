export default function destructuring(obj) {
    const arr = [];
    Array.from(obj,(typeAttack) => {
        if(!('description' in typeAttack)){
            typeAttack.description = "Описание недоступно"
        }
        arr.push(typeAttack);
    });
    return arr;
}