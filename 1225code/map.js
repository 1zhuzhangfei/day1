//根据原数组衍生一个新的等长的数组

//map 原数组新数组的对应关系
//基于数组a1将其的每一数平方后组成一个新数组

var a1 = [1, 2, 3, 4, 5];
// var a2 = [];
// for(var i = 0;i<a1.length;i++){
//     a2.push(Math.pow(a1[i],2));
// }

// a1.forEach(function(value){
//     a2.push(Math.pow(value,2));
// })
var a2 = a1.map(function(value){
    return Math.pow(value,2);
})


console.log(a2);


Array.prototype.itemMap = function(callback){
    var result = [];
    for(var i = 0;i<this.length;i++){
        result.push(callback(this[i],i,this));
    }
    return result;
}

var a3 = [50, 4, 800, 4, 36];
var a4 = a3.itemMap(function(value){
    return Math.sqrt(value);
})

console.log(a4);

var list = [1,2,3,4,5,6,7,8,9];

var ul = document.createElement("ul");
var htmlStrList = list.map(function(value){
    return `<li>${value}</li>`;
})

ul.innerHTML = htmlStrList.join("");
document.body.appendChild(ul);