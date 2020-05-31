// 什么是函数? 函数是具有特定功能的代码块
// 函数具有可复用性
// 定义函数的时候, 函数中的代码并不会被执行, 只有在调用函数的时候, 函数中的代码才会被执行
/*
    函数包括定义和调用两部分
    定义一个函数
    function functionName(参数1, 参数2, 参数3, 参数4..., 参数n) {

             代码;

    }
    函数的调用
    functionName(实参1, 实参2, 实参3, 实参4...., 实参n);
 */

// 根据有无参数, 有无返回值, 函数可以分为
// 无参悟返回值, 无参有返回值, 有参有返回值, 有参无返回值

// 无参无返回值的函数
printHello();
printHello();

function printHello() {
    document.write("<p>hello, world!</p>");
}
// printHi();


// 无参有返回值
function randomNum() {
    var ran = Math.floor(Math.random() * 101);

    // 通过return 关键字把值作为返回值赋给函数
    return ran;
}
var aNum = randomNum();
document.write("<p>" + "aNum = " + aNum + "</p>");


// 有参有返回值
function randomNumberFromXToY(x, y) {
    var ranNum = Math.floor(Math.random() * (y - x + 1) + x);
    return ranNum;
}
var bNum = randomNumberFromXToY(21, 31);
document.write("<p>" + "bNum = " + bNum + "</p>");


// 有参无返回值
function hiFrient(name) {
    document.write("<p>hi, " + name + "</p>");
}
hiFrient("小明");

// 形参: 形式参数, 定义函数的时候函数名后面小括号中的参数就是形参, 并没有实际的值
// 实参: 实际参数, 函数调用的时候, 小括号中传入的参数就是实参
// 调用函数时, 形参会拷贝实参的值

// num1, num2 是形参
function maxTwoNumber(num1, num2) {
    console.log(num1, num2);
    var waige = 666;

    return num1 > num2 ? num1 : num2;
}

var a = 20, b = 30;
// a, b就是实参
var c = maxTwoNumber(a, b);
console.log("c = " + c);

// 特殊函数, 匿名函数, 立即执行函数, 可以避免全局污染
(function () {
    console.log(arr1[1]);
    console.log(66666666);
})();


// 函数表达式
var func1 = function () {
    console.log("我是一个匿名函数");
}
// func1就相当于后面的函数
func1();


function sumNum(num1, num2) {
    console.log(num1, num2);
    return num1 + num2;
}
// 实参的个数可以大于形参的个数, 多余的实参不参与运算
var result = sumNum(5, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("result = " + result);


function sumThreeNum() {
    // arguments 是一个存放实参的数组, 数组中存放的是调用函数的时候, 传入的实际参数
    return arguments[0] + arguments[1] + arguments[2];
}

result = sumThreeNum(5, 6, 7);
console.log("result = " + result);


function judgeScore(score) {
    if (score >= 90) {
        console.log("优秀")
        // return: 直接返回到主调函数, 后面的代码不会再被执行
        return;
    }
    if (score >= 80) {
        console.log("良好");
        return;
    }
    if (score >= 70) {
        console.log("中等");
        return;
    }
    if (score >= 60) {
        console.log("及格");
        return;
    }
    console.log("不及格");
}
judgeScore(80);


// 练习
// 可以通过tag值获取元素
var oDivs = document.getElementsByTagName('div');
// 获取button
var btn = document.getElementsByTagName('button')[0];
// 给button添加点击事件
btn.onclick = function () {
    for (var i = 0; i < oDivs.length - 1; i++) {
        var fDiv = oDivs[i];
        var bDiv = oDivs[i+1];
        // 将后面div的颜色赋给前面的div
        fDiv.style.backgroundColor = bDiv.style.backgroundColor;
    }
    var r = randomNumberFromXToY(0, 255);
    var g = randomNumberFromXToY(0, 255);
    var b = randomNumberFromXToY(0, 255);
    var colorStr = "rgb(" + r + "," + g + "," + b + ")";
    // 给最中间的div赋一个随机颜色
    var middleDiv = oDivs[oDivs.length - 1];
    middleDiv.style.backgroundColor = colorStr;
};
