console.log("-----------every-----------");
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.every(function (value) {
    return typeof value === "number";
}))


Array.prototype.itemEvery = function (callback) {
    for (var i = 0; i < this.length; i++) {
        if (!(callback(this[i], i, this))) {
            return false;
        }
    }
    return true;
}


console.log(arr1.itemEvery(function (value) {
    return typeof value === "n";
}))
