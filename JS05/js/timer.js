(function () {

    /*
    var i = 10;
    function printFunc() {
        console.log(i--);
        if (i == -1) {
            // 清除定时器
            clearInterval(timer);
        }
    }


    // setInterval() 定时器
    // setInterval(func, delay[, 参数1, 参数2, 参数3, 参数...])
    // 1000ms调用一次printFunc函数 1s = 1000ms
    var timer = setInterval(printFunc, 1000);
    console.log(timer);
    */



    function waige(num1, num2) {
        console.log(a, b);
        if (a++ + b++ > 40) {
            clearInterval(timer1);
        }
    }
    var a = 20, b = 11;
    // 后面的参数 a++, b++会作为实参传给test函数
    // var timer1 = setInterval(waige, 1000, a, b);
    // setInterval(code, delay), 这种定时器调用函数的方式只能调用全局函数, 不能调用局部函数
    // var timer1 = setInterval("waige(" + a + "," + b + ")", 1000);


    var x = 0;
    function test() {
        console.log(x++);
        if (x == 10) {
            return;
        }
        setTimeout(test, 1000);
    }
    // 延迟定时器用法和定时器用法一样, 延迟多长时间执行函数
    // 清除延迟定时器 clearTimeOut
    var timer2 = setTimeout(test, 1000);
    clearTimeout(timer2);











})();



// 练习
(function () {

    var boxDiv = document.getElementById('box');
    var childDivs = boxDiv.getElementsByTagName('div');
    console.log(childDivs.length);

    function changeColor() {
        for (var i = childDivs.length - 1; i > 0; i--) {
            childDivs[i].style.backgroundColor = childDivs[i - 1].style.backgroundColor;
        }
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        childDivs[0].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }

    setInterval(changeColor, 80);





})();











