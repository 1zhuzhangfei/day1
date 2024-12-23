
!(function () {
    var prototype = {
        fn: function () {
            console.log("fn");
        },
        bar: function () {
            console.log("bar");
        }
    }

    function createArrarLike() {
        var res = {};
        for (var i = 0; i < arguments.length; i++) {
            res[i] = arguments[i];

        }
        res.length = arguments.length;
        res.__proto__ = prototype;
        return res;
    }

    window.createArrarLike = createArrarLike;

})(window);


(function () {
    var prototype = {}
    function createAnimal(name, category) {
        var res = {};

        res.__proto__ = prototype;

    }
})()


//构造函数
//构造函数是对工厂函数的升级
//工厂函数的缺点
//1.模版代码太多
//2.产生的对象和产生该对象的函数关系不明


//构造函数的首字母大写
//构造函数的使用（执行） 必须使用new关键字

//new关键字的作用：
//在被new关键字修饰调用的函数中 
//1.自动定义一个res空对象
//2.this指向res空对象
//3.自动绑定原型（将res的__proto__属性赋值为该函数的prototype属性）
//4.自动返回res

function Animal(name, category) {
    // var res = {};

    this.name = name;
    this.category = category;
    // res.__proto__ = prototype;
    // return res;
};
Animal.prototype = {
    //在原型上有一个固定的属性是必须提供的 constructor 构造器
    constructor: Animal,
    eat: function () {
        console.log("吃饭");
    }
};

//实例化
var dg = new Animal("奥利奥", "dog");
console.log(dg);





//直接调用构造函数 相当于是定义了全局变量

//prototype 显式原型
//__proto__ 隐式原型

//构造函数 原型对象 实例

/* 
构造函数
实例 = new 构造函数()
原型对象 = 构造函数.prototype
*/



/* 
原型对象
构造函数 = 原型对象.constructor
实例 = new 原型对象.constructor()
*/

/*
实例
原型 = 实例.__proto__
构造函数 = 实例.__proto__.constructor
*/

function Person(name, age) {
    //实例属性
    this.name = name;
    this.age = age;

    //实例方法
    this.fn = function () { };
}

//静态属性 prototype
Person.prototype = {

    //公共属性/公共方法
    speak: function () {
        console.log("speak");
    }
}


//静态方法
Person.init = function(){
    console.log("init");
}



