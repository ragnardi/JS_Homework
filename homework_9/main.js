/************************TASK_ONE*************************/
//Animal constructor
function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._getFormattedFoodAmount = function() {
    return this._foodAmount + 'гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._foodAmount;

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function() {
    return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
};

//Cat constructor
function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.feed = function() {
    console.log(Animal.prototype.feed.apply(this, arguments) + '\n' +
    'Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
    return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());

barsik = null;


/*****************************TASK_TWO*****************************/
function clone(obj) {
    var copy = Array.isArray(obj) ? [] : {};

    for (var key in obj) {
        if (!(obj[key] instanceof Object)) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = obj[key];
            }
        } else {
            if (obj.hasOwnProperty(key)) {
                copy[key] = clone(obj[key]);
            }
        }
    }

    return copy;
}