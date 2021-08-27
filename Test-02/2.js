/*    Задание 2:
Описать класс Person в прототипном стиле.
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
    this.name = name;
    this.age = age;
    this._personAge = 50;
}

Person.prototype._getFormattedAge = function() {
    return this._personAge + ' лет';
}

Person.prototype.personAge = function (amount) {
    if (!arguments.length) return this._getFormattedAge();//геттер, если нет аргументов

    this._personAge = amount;
}

Person.prototype.showInfo = function() {
    //  console.log(this.personAge()); // геттер (нет аргумента)
    this.personAge(this.age); // сеттер (есть аргумент) БЕЗ НЕГО НИЧЕГО НЕ ПОЛУЧАЛОСЬ!!!!!!
    console.log('Привет, меня зовут ' + this.name + ", мне " + this.personAge());
}

var vasya = new Person('Вася', 30);
vasya.showInfo();

function Employee(name, age, salary) {
    Person.apply(this, arguments);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.showInfo = function() {
    Person.prototype.showInfo.call(this);
    console.log('Моя зарплата ' + this.salary + '$');
}

var petya = new Employee('Петя', 20, 2000);
console.log(petya.showInfo());
