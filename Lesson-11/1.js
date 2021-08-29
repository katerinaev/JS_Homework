function filterNumbersArr(numbers) {

    return numbers.filter(function(number) {
        return number > 0;
    });
}
console.log(filterNumbersArr([-1, 0, 5, 2, -34, 678, -5.83, -2]));
