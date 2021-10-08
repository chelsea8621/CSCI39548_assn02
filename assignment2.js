// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const arrMap = [];
    this.forEach((e, i, arr) => arrMap.push(callbackFn(e, i, arr)));
    return arrMap;
}

// Test
// const array1 = [1,2,3];
// console.log("Expected:", array1.map(x => x * 2));
// console.log("My Map:", array1.myMap(x => x * 2));

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    const passed = [];
    this.forEach((e, i, arr) => {
        if (callbackFn(e, i, arr))
            passed.push(e);
    });
    return passed;
}

// Test
// const words = ['spray', 'limit', 'elite', 'destruction', 'present'];
// console.log("Expected: ", words.filter(word => word.length > 6));
// console.log("My Filter: ", words.myFilter(word => word.length > 6));


// SOME //
Array.prototype.mySome = function(callbackFn) {
    return !this.every((e, i, arr) => !callbackFn(e, i, arr))
}

// Test
// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log("Expected: ", array.some(even));
// console.log("My Some: ", array.mySome(even));


// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    return !this.some((e, i, arr) => !callbackFn(e, i, arr))
}

// TEST
// const array1 = [1,,39, 29, 10, 13];
// console.log("Expected: ", array1.every(currentValue => (currentValue < 40)));
// console.log("My Every: ", array1.myEvery(currentValue => (currentValue < 40)));


// REDUCE
Array.prototype.myReduce = function(callbackFn, initialValue) {
    let ivundef = initialValue === undefined;
    let accumulator = ivundef ? this[0] : initialValue;
    let to_reduce = this.slice(+ivundef);
    to_reduce.forEach((e, i, arr) => accumulator = callbackFn(accumulator, e, i + ivundef, arr));
    return accumulator;
}

// TEST
// const array1 = [1,, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// console.log("expected: ", array1.reduce(reducer));
// console.log("my reduce: ", array1.myReduce(reducer));

// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex = 0) {
    return this.some((e, i, arr) =>
        searchElement === e && i >= (fromIndex < 0 ? arr.length + fromIndex : fromIndex));
}
// Test
// const array1 = [1, 2, 3];
// console.log(array1.includes(2, -100));
// console.log("my includes:", array1.myIncludes(2, -100));
//
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat', -2));
// console.log(pets.myIncludes('cat', -2));

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex += this.length;
    }
    fromIndex = Math.min(Math.max(fromIndex, 0), this.length);
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) return i;
    }
    return -1;
}

// TEST
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison', 2));
// console.log(beasts.myIndexOf('bison', 2));

// Test
const arr = [1,2,3,4,5];
console.log(arr.map(e=> [-2,-1,0,1,2,3,4,5,6,7].map(i => arr.indexOf(e, i))));
console.log(arr.map(e=> [-2,-1,0,1,2,3,4,5,6,7].map(i => arr.myIndexOf(e, i))));

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};


// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex = -1) {
    if (fromIndex < 0) {
        fromIndex += this.length;
    }
    fromIndex = Math.min(Math.max(fromIndex, 0), this.length - 1);
    for (let i = fromIndex; i >= 0; i--) {
        if (this[i] === searchElement) return i;
    }
    return -1;
}

// Test
// const arr = [1,2,3,4,5];
// console.log(arr.map(e=> [-2,-1,0,1,2,3,4,5,6,7].map(i => arr.lastIndexOf(e, i))));
// console.log(arr.map(e=> [-2,-1,0,1,2,3,4,5,6,7].map(i => arr.myLastIndexOf(e, i))));

// KEYS //
Object.grabKeys = function(objs) {
    let keys = [];
    for (const property in objs) {
        keys.push(property);
    }
    return keys;
}

// Test
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };
// console.log(Object.keys(object1));
// console.log(Object.grabKeys(object1));
//
// const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(anObj));
// console.log(Object.grabKeys(anObj));
//
// const myObj = Object.create({}, {
//     getFoo: {
//         value: function () { return this.foo; }
//     }
// });
// myObj.foo = 1;
// console.log(Object.keys(myObj));
// console.log(Object.grabKeys(myObj));

// VALUES //
Object.grabValues = function(obj) {
    let values = [];
    for (const property in obj) {
        values.push(obj[property]);
    }
    return values;
}

// Test
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };
//
// console.log(Object.values(object1));
// console.log(Object.grabValues(object1));
//
// const obj = { foo: 'bar', baz: 42 };
// console.log(Object.values(obj));
// console.log(Object.grabValues(obj));
//
// const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
// my_obj.foo = 'bar';
// console.log(Object.values(my_obj));
// console.log(Object.grabValues(my_obj));
//
// console.log(Object.values('foo'));
// console.log(Object.grabValues('foo'));