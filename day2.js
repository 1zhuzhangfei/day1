//正则中括号的作用

/**
 1.分组 把某一个子规律当作一个整体 使用量词重复（对若干个字符组一起重复） 
 2.分支
 */

//反向引用

/**
 * 2006-03-06
 * 2006.03.06
 * 2006/03/06
 */

var s1 = "2006-03-06";
var s2 = "2006/03/06";
var s3 = "2006.03.06";
var s4 = "1-1 2-2 3-3 4-4 5.5 6.6 7.8";

var t1 = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
var t2 = /\d(-|\.|\*|\#)\1/;
console.log(t1.test(s1));
console.log(s4.match(t2));


//[1, 3, 6, 10, 15, 21, 28, 36....]

console.log([1, [2, [3, [4, [5]]]]].flat(Infinity));

function chunk(arr, k) {
    var res = [];
    var temp = [1, 2];
    for (var i = 0; i < arr.length; i++) {
        if (temp.length === k) temp = [];
        temp.push(arr[i]);
        if (temp.length === k || i === arr.length - 1) res.push(temp);
    }
    return res;
}

console.log(chunk([1, 2, 3, 4, 5], 2));


//[1,5,8,3,9,7,2,4,6]

function part(arr, target) {

    var left = -1;
    var right = arr.length;

    var index = 0;

    while (index < right) {
        if (arr[index] < target) {
            left++;
            var temp = arr[index];
            arr[index] = arr[left];
            arr[left] = temp;
            index++;
        } else if (arr[index] > target) {
            right--;
            var temp = arr[index];
            arr[index] = arr[right];
            arr[right] = temp;
        } else {
            index++;
        }
    }

    return arr;

}
console.log(part([1, 5, 8, 3, 9, 7, 2, 4, 6], 3));



//1.打印杨辉三角,转二维数组
function printPascalsTriangle(rows) {

    let triangle = [];

    for (let i = 0; i < rows; i++) {

        triangle[i] = new Array(i + 1).fill(1);

        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];

        }

    }
    // triangle.forEach((row, rowIndex) => {
    //     let spaces = ' '.repeat((rows - rowIndex - 1) * 2.5);
    //     console.log(spaces + row.join('    '));
    // });

    return triangle;
}

console.log(printPascalsTriangle(5));

//2.给定罗马数字转换整数

function parseRomeNumber(rome) {
    const romeNumber = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0;
    let values = 0;
    for (let i = rome.length - 1; i >= 0; i--) {
        let value = romeNumber[rome[i]];
        if (value < values) {
            total -= value;

        } else {
            total += value;
        }
        values = value;
    }

    return total;

}

console.log(parseRomeNumber("CDXCVIII"));


//3.两个数组的交集
/**
 * 给定两个数组nums1和nums2，返回它们的交集，
 * 输出结果中的每个元素一定是唯一的，我们可以不考虑输出结果的顺序
 */

function cross(nums1, nums2) {
    const arr = [...nums1, ...nums2];
    const newArr = arr.filter(item => {
        return (nums1.includes(item) && nums2.includes(item));
    });
    //filter将返回值去重
    return newArr.filter((item, index) => newArr.indexOf(item) === index);


}

console.log(cross([1, 5, 5, 8, 3, 9, 7, 2, 4, 6], [4, 2, 6, 8, 4, 5, 6]));

//4.找不同
//给定两个字符串s和t，只包含小写字母，
//字符串t由字符串s随机重排，然后在随机位置添加一个字母，找出在t中被添加的字母。
function getNewArr(a, b) {
    const arr = [...a, ...b];
    const newArr = arr.filter(item => {
        //返回b中不包含a的值
        return !(a.includes(item) && b.includes(item));
    });
    return newArr;
}
console.log(getNewArr('abcdef', 'abchdef'));


// 5.键盘行
function words(word) {
    var a = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    var d = [];
    //遍历输入的数组
    for (var i = 0; i < word.length; i++) {
        var text = word[i].toLowerCase();
        //遍历定义的键盘数组
        for (var k = 0; k < a.length; k++) {
            let h = 0;
            //遍历数组中的单词的单个字母
            for (var j = 0; j < text.length; j++) {

                if (a[k].includes(text[j])) {
                    h++;
                }

                if (h === text.length) {
                    d.push(word[i]);
                }

            }

        }
    }
    return d;
}

console.log(words(["adsdf", "Alaska", "Dad", "Peace"]));

//6.各位相加
//三种情况0或者9或者%9取余
function puls(num){
    let sum = 0;
    if(num===0)return num
    else if(num/9===0)return 9
    else return num%9;
}

console.log(puls("78"));