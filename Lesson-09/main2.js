function Animal(name) {
    var foodAmount = 50;

this.dailyNorm = function(amount) {
    if (!arguments.length) return dailyNorm = foodAmount;

    if (amount < 50) {
        throw new Error('Корма должно быть больше 50!');
    }
    if (amount > 500) {
        throw new Error('Слишком много!')
    }

    dailyNorm = amount;
}

function formatFoodAmount() {
    return dailyNorm + ' гр.';
}
    var self = this;
    this.name = name;

    self.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function() {
        animalFeed();
        this.run();
    }
    this.run = function() {
        console.log('Кот доволен ^_^');
    }

}
var barsik = new Cat('Барсик');
barsik.dailyNorm(60);

barsik.feed();