console.log("------任意给一个页面上的标签，返回根标签")
var inner = document.querySelector("#inner");
while (inner.parentNode) {
    inner = inner.parentNode
}
console.log(inner);


console.log("-----获取文档中的所有叶子节点")
function tree() {
    var html1 = document.querySelector("html");
    var htmlElements1 = [html1];
    var targetElement1 = [];
    for (var i = 0; i < htmlElements1.length; i++) {
        if (htmlElements1[i].children && htmlElements1[i].children.length > 0) {
            for (var j = 0; j < htmlElements1[i].children.length; j++) {
                targetElement1.push(htmlElements1[i].children[j]);
            }
        }
        if (htmlElements1[i].children.length === 0) {
            targetElement1.push(htmlElements1[i]);
        }

    }
    return targetElement1;
}
console.log(tree());

//通过classname获取元素集合，返回包含目标dom节点的数组（className）
function getElesByClassName(name) {
    var html2 = document.querySelector("html");
    var htmlElements2 = [html2];
    var arrClassName = [];
    for (var i = 0; i < htmlElements2.length; i++) {
        if (htmlElements2[i].className === name) {
            arrClassName.push(htmlElements2[i])
        }
        if (htmlElements2[i].children && htmlElements2[i].children.length > 0) {
            for (var j = 0; j < htmlElements2[i].children.length; j++) {
                if (htmlElements2[i].children[j].className === name) {
                    arrClassName.push(htmlElements2[i].children[j]);
                }

            }
        }
    }
    return arrClassName;

}

console.log(getElesByClassName("1"));

var div = document.querySelector("div");
//innerText 更新标签内容（不能识别标签文本）
// div.innerText = "<mark>nmsl</mark>";

//innerHtml 更新标签内容（可以识别标签文本）
// div.innerHTML = "<mark>nmsl</mark>";

console.log(div.innerText);  //通过innerText获取标签内的内容文本（不带标签嵌套）
console.log(div.innerHTML);  //通过innerHtml获取标签内的内容文本（带标签嵌套）
console.log(div.innerHTML.replace(/<[^<>]+>/g, ""));



// 获取/设置标签的属性


//方法获取与设置getAttribute()  setAttribute(属性名，值)  
var div = document.querySelector("div");
// div.setAttribute("style",'background-color:red');
div.getAttribute

//定义一个函数，可以批量设置某个DOM节点的属性
function setAttrs(ele, prop) {
    var keys = [];
    for (var k in keys) {
        keys.push(k);
    }
    for (var key in prop) {
        if (keys.includes(key) > -1) {
            ele.setAttribute(key, prop[key]);
        }

    }
}

setAttrs(div, { "style": 'background-color:red' });

//表单元素上的所有属性建议直接使用dom.属性名来进行赋值； dom.属性 = 值

//标签属性分为两种
//第一种类似于id class alt src href...    arrt属性
//第二种类似于disable checked selected...  prop属性


//设置标签样式




