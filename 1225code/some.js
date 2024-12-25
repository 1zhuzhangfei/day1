console.log("-----------some-----------")
//判断数组所有元素中，是否至少有一个满足条件
//返回值是boolean
var arr1 = [1, 2, 3, 4, 5, 6, 7];
var isExist = false;
// for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] > 10) {
//         isExist = true;
//         break;
//     }
// }

var isExist = arr1.some(function (value) {
    return value > 10;
});

console.log(isExist);
var arr2 = [
    { name: 'a', age: 11 },
    { name: 'b', age: 20 },
    { name: 'c', age: 21 },
    { name: 'd', age: 20 },
    { name: 'e', age: 17 },
    { name: 'f', age: 18 },
    { name: 'g', age: 17 },
];

console.log(arr2.some(function (value) {
    return value.age > 100;
}))


Array.prototype.itemSome = function (callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

console.log(arr2.itemSome(function (value) {
    return value.age > 100;
}))