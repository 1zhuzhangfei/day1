//切换元素样式的第二种方案（切换class）
function setStyle(className) {

    console.log("设置样式点击事件");
    var el = document.querySelector("#container");

    // var originClassName = el.className;
    // el.className = "a" + "" + originClassName;

    el.classList.add(className);

}

//切换样式
function toggleClass(className) {
    var el = document.querySelector("#container");
    // var originClassName = el.className;
    // var paddingClassName = className.trim();
    // var index = originClassName.indexOf(paddingClassName)
    // if (index > -1) {
    //     //删除
    //     originClassName.split(index, 1);
    // } else {
    //     originClassName.push(paddingClassName);
    //     el.className = originClassName.join(" ");
    // }
    if (el.classList.contains(className)) {
        el.classList.remove(className);

    } else {
        el.classList.add(className);
    }

}

//移除样式
function removeClass(className) {
    var el = document.querySelector("#container");
    // var originClassName = el.className;
    // if (className === originClassName) {
    //     originClassName.split(className, className.length);
    // }
    el.classList.remove(className);

}


//替换
function replace(oldClassName, newClassname) {

    var el = document.querySelector("#container");
    var _oldClassName = oldClassName.trim();
    var _newClassname = newClassname.trim();
    var originClassName = el.getAttribute("class");
    el.setAttribute(
        "class",
        originClassName.replace(
            new RegExp("\b" + _oldClassName + "\b", "g"),
            _newClassname
        )
    );
}

var s1 = "qwe asd zxc";
console.log(s1.replace(/\basd\b/g, "abc"));

//判断传入的类名是不是在原class中 element.classList.contains(类名)
var el = document.querySelector("#container");
console.log(el.classList.contains("base"));
















