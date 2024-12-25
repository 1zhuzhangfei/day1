//forEach 用来对数组进行遍历
var arr1 = [11, 12, 34, 41, 15, 51, 67];

//遍历数组的每一个元素
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

arr1.forEach(function (value) {
    console.log(value);
})

var res = 0;
arr1.forEach(function(value){
    res += value;
});
console.log(res);
