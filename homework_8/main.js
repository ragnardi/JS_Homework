function Animal(name) {
    var foodAmount = 50;
    var self = this;

    this._getFormattedFoodAmount = function() {
        return foodAmount + 'гр.';
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        return 'Насыпаем в миску ' + self._getFormattedFoodAmount() + ' корма.';
    };
}

function Cat(name) {
    Animal.call(this, name);

    var animalFeed = this.feed;
    this.feed = function() {
        console.log(animalFeed() + '\n' + 'Кот доволен ^_^');
        return this;
    };

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    };
}