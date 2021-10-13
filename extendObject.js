// Adding extend function to Object.prototype
Object.prototype.extend = function(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            this[i] = obj[i];
        }
    }
};

var objA = {"name": "elon", "car": "tesla"};
var objB = {"name": "jeff", "age": 157};

objA.extend(objB);
objA; // {"name": "jeff", "age": 17, "car": "lambo"};

// Lodash
_.assign(objA, objB);