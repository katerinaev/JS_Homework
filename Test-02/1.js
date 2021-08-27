/*Задание 1:
Описать класс Person в функциональном стиле.
    У него должны быть публичное свойство name и приватное свойство personAge, значение которым будет задаваться при
создании объекта класса.
    Также должен быть реализован приватный метод getFormattedAge, который будет возвращать возраст + слово 'лет'
и публичный метод showInfo, выводящий в консоль (!!!) информацию вида:
    "Привет, меня зовут Вася, мне 20 лет."

Отнаследовать от Person класс Employee. Расширить контруктор публичным свойством salary, которое так же будет получаться
при создании объекта класса. И расширить метод родителя showInfo так, чтобы он выводил информацию вида:
    "Привет, меня зовут Вася, мне 20 лет.
Моя зарплата 2000$."
Использовать вызов родительского метода вида personShowInfo().*/

function Person(name, age) {
    var personAge = 50;
    this.name = name;
    this.age = age;

    function getFormattedAge() {
        return personAge + ' лет';
    }

    this.personAge = function (amount) {
        if (!arguments.length) return getFormattedAge();

        personAge = amount;
    };
    var self = this;
    this.showInfo = function() {
        //  console.log(self.personAge()); // геттер (нет аргумента)
        self.personAge(age); // сеттер (есть аргумент)БЕЗ НЕГО НИЧЕГО НЕ ПОЛУЧАЛОСЬ!!!!!!
//  console.log('Привет, меня зовут ' + self.name + " мне " + getFormattedAge());
        console.log('Привет, меня зовут ' + self.name + ", мне " + self.personAge());
    };
}

function Employee(name, age, salary) {
    Person.apply(this, arguments);

    this.salary = salary;
    var personShowInfo = this.showInfo;

    this.showInfo = function() {
        personShowInfo();
        console.log('Моя зарплата ' + this.salary + '$');
        return this;
    };
}

var vasya = new Employee('Вася', 30, 2000);

vasya.showInfo();