(function (window) {
    //定义的是公共的方法
    var prototype = {
        push: function (value) {
            this[this.length] = value;
            this.length++;
            return this.length;
        },

        pop: function () {
            var deleteItem = this[this.length - 1]

            this.length--;
            return deleteItem;
        },
        shift: function () {
            var shiftItem = this[0];

            for (var i = 0; i < this.length; i++) {
                this[i] = this[i + 1];

            }
            delete this[this.length - 1];
            this.length--;

            return shiftItem;

        },

        unshift: function (numbers) {
            var newItem = this.length + numbers.length;
            for (var i = 0; i < (this.length + numbers.length - 1); i++) {
                if (i < numbers.length) {
                    this[i] = numbers[i];

                } else {
                    this[i] = this[i - numbers.length];
                }
            }
            this.length = this.length + numbers.length;
            return newItem;

        },
        //indexOf slice splice join concat
        indexOf: function (value) {
            var indexOf = -1;
            for (var i = 0; i < this.length; i++) {
                if (this[i] === value) {
                    indexOf = i;
                }
            }
            return indexOf;
        },

        //切割数组
        slice: function (begin, end) {
            var newArry = [];
            if (begin >= 0 && end > begin) {

                for (var i = begin; i < end; i++) {

                    newArry.push(this[i]);
                }

            }

            return newArry;

        },


        //添加移除或替换数组中的元素
        splice: function (start, deleteCount) {
            var newArry = [];

        },

        //将数组拼接成字符串
        join: function (value) {
            var newStr = '';
            if (typeof value === "undefined") {
                value = ",";
            }
            for (var i = 0; i < this.length; i++) {

                if (i === this.length - 1) {
                    newStr += this[i];
                } else {
                    newStr += (this[i] + value);
                }
            }

            return newStr;

        },

        //合并两个或多个数组
        concat: function (arry) {
            var newArry = [];
            for (var k = 0; k < this.length; k++) {
                newArry.push(this[k]);
            };

            function addArry(arg) {
                if (Array.isArray(arg)) {
                    for (var i = 0; i < arg.length; i++) {
                        addArry(arg[i]);
                    }
                } else {
                    newArry.push(arg);
                }

            }
            for (var j = 0; j < arry.length; j++) {
                addArry(arry[j]);
            }
            
            // for (var i = 0; i < arry.length; i++) {
            //     var arg = arry[i];
            //     if (Array.isArray(arg)) {
            //         for (var j = 0; j < arg.length; j++) {
            //             newArry.push(arg[j]);
            //         }
            //     } else {
            //         newArry.push(arg);
            //     }

            // }
            return newArry;
        }

    };
    function createArray() {
        console.log(arguments);
        var res = {};
        for (var i in arguments) {
            // console.log(i);
            res[i] = arguments[i];
        }
        res.length = arguments.length;
        // console.log(res);

        res.__proto__ = prototype;

        return res;

    }
    window.createArray = createArray;
})(window)


var a1 = createArray(1, 2, 3);
console.log(a1);