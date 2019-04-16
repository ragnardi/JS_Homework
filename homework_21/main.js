//TASK_1
{
    let name = prompt('Enter name');
    const obj = {
        name,
        sayHi() {return `Hi, ${this.name}`}
    };
}

//TASK_2
{
    function calculate({a:x, b:y}, z = 1) {
        return x ** y * z;
    }

    calculate({a:2, b:3}, 12);
}

//TASK_3
{
    const arr = ['Ivan', 25];
    function greeting(name, age) {
        return `Hello, I'm ${name} and I'm ${age} years old.`
    }

    greeting(...arr);
}

//TASK_4
{
    function order(...rest) {
        for (let val of rest) {
            console.log(val);
        }
    }

    order(1, 2, 3, 4, 5);
}

//TASK_5
{
    function countVowelLetters(text) {
        text = text.toLowerCase().split('');
        const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
        let counter = 0;

        text.forEach(symbol => vowelLetters.includes(symbol) && counter++);

        return counter;
    }

    countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12
}

//solution with regular expression
{
    let text = 'Шла Саша по шоссе И сосала сУшку';
    let vowels = text.match(/[аяыиоёуюэеaeiouy]/gi).length;
}

//TASK_6
{
    function usersFilter(arr) {
        const yongUsers = arr.filter(user => user.age < 40);
        let fedor = arr.find(user => user.name.startsWith('Fedor'));

        return {'Пользователи младше 40': yongUsers, 'Пользователь с именем Федор': fedor};
    }

    usersFilter([
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ]);
}

//TASK_7
{
    function usersGroup(names) {
        return names.map((name, i) =>  ({[`Пользователь ${i + 1}`]: name}));
    }

    usersGroup(['vasya', 'petya']);
}

//TASK_8
{
    function concatObjects(objGroup) {
        return objGroup.reduce((finalObj = {}, currentObj) => Object.assign(finalObj, currentObj));
    }
}

//TASK_9
{
    class Animal {
        constructor(name) {
            this._foodAmount = 50;
            this.name = name;
        }

        _getFormattedFoodAmount() {
            return `${this._foodAmount} гр.`;
        }

        dailyNorm(amount) {
            if (!arguments.length) return this._foodAmount;

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        }

        feed() {
            return `Насыпаем в миску ${this._getFormattedFoodAmount()} корма.`;
        }
    }

    class Cat extends Animal{
        constructor(name) {
            super(name);
        }

        feed() {
            console.log(`${super.feed()} 
            Кот доволен ^_^`);

            return this;
        }

        stroke() {
            console.log('Гладим кота');

            return this;
        }
    }

    let barsik = new Cat('Барсик');

    console.log(barsik.feed().stroke().stroke().feed());

    barsik = null;
}