var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        console.log('Hello');
    }
};

var initialObj2 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        console.log('Hello');
    }
};

// var clonedObj = deepClone(initialObj);
// console.log(deepEqual(initialObj, clonedObj));
// clonedObj.object.object2.array2[1].name = 'Vasya';
// clonedObj.array.push(2);
console.log(deepEqual(initialObj, initialObj2));

// function deepClone(initialObj) {
//     var clonedObj = (Array.isArray(initialObj) ? [] : {});
//     for (var k in initialObj) {
//         if (initialObj[k] != null && typeof initialObj[k] == 'object')
//             clonedObj[k] = deepClone(initialObj[k]);
//         else
//             clonedObj[k] = initialObj[k];
//     }
//     return clonedObj;
// }

function deepEqual(object1, object2) {
    var keys1 = Object.keys(object1);
    var keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (var key of keys1) {
        var val1 = object1[key];
        var val2 = object2[key];
        if (val1 != null && typeof val1 === 'object' && !deepEqual(val1, val2)) {
            return false;
        }
        if ((val1 === null || typeof val1 !== 'object') && (val2 === null || typeof val2 !== 'object') && val1 !== val2) {
            return false;
        }
    }
    return true;
}