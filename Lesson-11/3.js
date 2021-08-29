function isPalindrom(str) {

    if (str.toLowerCase().split('').reverse().join('') === str.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrom('АрозаупаланалапуАзора'));
