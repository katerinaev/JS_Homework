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

var clonedObj = deepClone(initialObj);
clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);
console.log(initialObj);
console.log(clonedObj);
console.log(clonedObj.object.object2.array2[1].name);

function deepClone(initialObj) {
    var clonedObj = (Array.isArray(initialObj) ? [] : {});
    for (var k in initialObj) {
        if (initialObj[k] !== null && typeof initialObj[k] === 'object')
            clonedObj[k] = deepClone(initialObj[k]);
        else
            clonedObj[k] = initialObj[k];
    }
    return clonedObj;
}