var titleCaseString = (data) =>
  data
    .toLowerCase()
    .split(' ')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ')

var convertStringToArray = (para, removeSpaces = false) =>
  removeSpaces ? [...para].filter((item) => item !== ' ') : [...para]

var countInstanceInArray = (arr) =>
  arr.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 0
    obj[item]++
    return obj
  }, {})

var sumOfAnArray = (arr, initialValue = 0) =>
  arr.reduce((a, b) => a + b, initialValue)

var inArrayOfObjects = (arr, key, value) => arr.find((ar) => ar[key] === value)

var findArrayIndex = (arr, key, value) =>
  arr.findIndex((ar) => ar[key] === value)

var getUniqueList = (arr) =>
  arr.filter(
    (ar, index, list) =>
      list.findIndex((p) => JSON.stringify(ar) === JSON.stringify(p)) === index
  )
  
var shuffle = (arr) => arr.sort(() => 0.5 - Math.random());