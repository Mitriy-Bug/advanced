import destructuring from '../destructuring';
test('destructuring', () => {
    const obj = [
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
    ];
    expect(destructuring(obj)).toEqual([
        {
            "id": 8,
            "name": "Двойной выстрел",
            "icon": "http://...",
            "description": "Двойной выстрел наносит двойной урон"
        },
        {
            "id": 9,
            "name": "Нокаутирующий удар",
            "icon": "http://...",
            "description": "Описание недоступно"
        }
    ]);
})