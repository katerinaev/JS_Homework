function Cat(name) {
    var foodAmount = 150;

this.dailyNorm = function(amount) {
    if (!arguments.length) return dailyNorm = foodAmount;

    if (amount < 50) {
        throw new Error('Котик будет голодным!');
    }
    if (amount > 500) {
        throw new Error('Котик будет толстым!')
    }

    dailyNorm = amount;
}

function formatFoodAmount() {
    return dailyNorm + ' гр.';
}

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    };
}

var barsik = new Cat('Барсик');

barsik.dailyNorm(250);
console.log(barsik.name);
barsik.feed();
