const removeDuplicatesFromArray = (target) => [...new Set(target)];
const res = removeDuplicatesFromArray([1, 2, 2, 3, 4, 1])
//result will be [1, 2, 3, 4]