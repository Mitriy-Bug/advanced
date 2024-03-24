export default function orderByProps(obj, firstElementsOrder) {
    const sortObg = {};
    Object.keys(obj)
        .sort()
        .forEach(function(v) {
            sortObg[v] = obj[v];
        });
    const sortedKeys = [];
    function addKeysValues(arrObj, addsortedKeys, returnArray) {
        for(const prop in arrObj) {
            if (addsortedKeys.includes(prop)) {
                returnArray.push({
                    key: prop,
                    value: arrObj[prop]
                });
            }
        }
    }
    // Фильтрация исходных ключей объекта
    const remainingKeys = Object.keys(obj).filter(key => !firstElementsOrder.includes(key));

    addKeysValues(obj, firstElementsOrder, sortedKeys);
    addKeysValues(sortObg, remainingKeys, sortedKeys);

    return sortedKeys;
}