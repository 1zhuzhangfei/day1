//扩展数组的原型方法

var o = {
    bar: function () { },
};
o.baz = function () { };

Array.prototype.findItem = function (callback) {
    //this --> 调用我的数组
    //callback --> fn

    for (var i = 0; i < this.length; i++) {

        // this[i]→每一次循环的元素
        // i  -->  每一次循环的索引
        // this  --> 当前被循环的数组
        if (callback(this[i], i, this)) {
            return this[i];
        };
    }
};


//a b c是fn函数的3个形参
function fn(a, b, c) {
    return a % 2 === 0;
}


var findArr = [450, 2, 3, 4, 5];
var findStr = findArr.findItem(fn);
console.log(findStr);   // 450


