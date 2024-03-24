export default function orderByProps(obj, firstElementsOrder) {
    const sortedKeys = [];

    // Фильтрация исходных ключей объекта
    const remainingKeys = Object.keys(obj).filter(key => !firstElementsOrder.includes(key));

    // Сортировка оставшихся ключей по алфавиту
    remainingKeys.sort();
    console.log(remainingKeys);
    // Добавление ключей из массива первых элементов
    //sortedKeys.push(...firstElementsOrder);
    function addKeysValues(obj, addsortedKeys, returnArray) {
        for(const prop in obj) {
            if (addsortedKeys.includes(prop)) {
                returnArray.push({
                    key: prop,
                    value: obj[prop]
                });
            }
        }
    }
    addKeysValues(obj, firstElementsOrder, sortedKeys);
    //console.log(sortedKeys);
    // Добавление отсортированных ключей из оставшихся ключей
    //sortedKeys.push(...remainingKeys);
    addKeysValues(obj, remainingKeys, sortedKeys);
    //console.log(sortedKeys);

    return sortedKeys;
}