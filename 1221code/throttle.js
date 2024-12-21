var button = document.querySelector("button");
function cb(e) {

    console.log(e);
    console.log(Math.random());
}

var callback = debounce(cb, 500);

button.addEventListener("click", callback);


//防抖函数
//点击第一次 0ms 500ms后执行函数
//点击第二次 300ms 第一次的延时器失效 同时又设置了一个新的延时器 500ms后执行fn
function debounce(fn, delay) {
    var timer = null;
    return function (e) {
        var self = this;

        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.call(self, e);
        }, delay);
    };
};


function throttle(fn, delay) {
    var timestamp = null;
    return function (e) {
        var self = this;
        if (timestamp === null) {
            fn.call(self,e);
            timestamp = Date.now();

        } else {
            var current = Date.now();
            if (current - timestamp >= delay) {
                fn.call(self,e);
                timestamp = current;
            }
        }
    };
}

function resizeCb() {
    console.log(Math.random());
}


window.addEventListener("resize", throttle(resizeCb, 500));