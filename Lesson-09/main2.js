function Animal(name) {
    this._foodAmount = 50;

    var self = this;
    function formatFoodAmount() {
        return self._foodAmount + ' гр.';
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
        self._foodAmount = amount;
    }
    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
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
        console.log("Кот доволен ^_^");
    }
 }
var barsik = new Cat('Барсик');
barsik.dailyNorm();

console.log(barsik.name);
console.log(barsik.feed());