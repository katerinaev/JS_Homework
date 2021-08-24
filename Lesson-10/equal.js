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
    method: function() {
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
    method: function() {
        console.log('Hello');
    }
};

console.log(deepEqual(initialObj, initialObj2));

function deepEqual(object1, object2) {
    var keys1 = Object.keys(object1);
    var keys2 = Object.keys(object2);
    if (keys1.length != keys2.length) {
        return false;
    }
    for (var key of keys1) {
        var val1 = object1[key];
        var val2 = object2[key];
        if (((val1 !== null && typeof val1 === 'object') && (val2 !== null && typeof val2 === 'object') && !deepEqual(val1, val2)) ||
            (typeof val1 == 'function' && typeof val2 == 'function' && val1.toString() != val2.toString()) ||
            ((typeof val1 !== 'object' && typeof val1 !== 'function' || val1 === null) &&
                (typeof val2 !== 'object' && typeof val2 !== 'function' || val2 === null)) && (val1 !== val2)) {
            return false;
        }

    }
    return true;
}