function Cat(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.name = name;

    this.dailyNorm = function(amount) {
        if(!arguments.length) return formatFoodAmount();

        if(amount < 50) {
            throw new Error('Количество должно быть больше 50');
        }
        if (amount > 500) {
            throw new Error('Количество должно быть меньше 500');
        }
        foodAmount = amount;
    }
    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(6);

console.log(barsik.name);
console.log(barsik.feed());