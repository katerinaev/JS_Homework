function areAnagrams(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    if (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')) {
        return true;
    } else {
        return false;
    }
}
console.log(areAnagrams('кот', 'отк')); // true
console.log(areAnagrams('кот', 'атк')); // false
console.log(areAnagrams('кот', 'отко')); // false
