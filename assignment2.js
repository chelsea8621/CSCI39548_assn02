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


// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

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
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};