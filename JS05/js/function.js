(function () {

    // 函数作为参数
    function  sumVal(a, b) {
        return a + b;
    }

    function  subVal(a, b) {
        return a - b;
    }

    function mulVal(a, b) {
        return a * b;
    }

    function devVal(a, b) {
        if (b == 0) {
            alert("错误");
            return;
        }
        return a / b;
    }
    
    function calculate(a, b, func) {
        // alert(a);
        return func(a, b);
    }



    // 获取所有按钮
    var btns = document.getElementsByTagName('button');

    // 声明一个变量, 存储函数
    var funcValue = sumVal;


    // 给前四个按钮添加点击事件
    for (var i = 0; i < 5; i++) {
        btns[i].onclick = function () {
            // this 点击的是哪个按钮, this就指代谁
            // alert(this.innerHTML);
            switch (this.innerHTML) {
                case "+":
                    funcValue = sumVal;
                    break;
                case "-":
                    funcValue = subVal;
                    break;
                case "*":
                    funcValue = mulVal;
                    break;
                case "/":
                    funcValue = devVal;
                    break;
                default: {
                    // alert(333);
                    // 获取所有input
                    var inputs = document.getElementsByTagName('input');
                    var a = inputs[0].value - 0;
                    var b = inputs[1].value - 0;
                    var result = calculate(a, b, funcValue);
                    inputs[2].value = result;
                }
                    break;
            }
        };
    }

    

})();




function maxTwoNum(a, b) {
    return a > b ? a : b;
}

function minTwoNum(a, b) {
    return a < b ? a : b;
}

// 函数作为参数
function test(a, b, func) {
    // 第二步
    var result = func(a, b);
    // 第四步
    return result;
}
// a = 5, b = 7, func = maxTwoNum;
var result = test(5, 7, maxTwoNum);
console.log("result = " + result);

// a = 8, b = 3, func = minTwoNum
result = test(8, 3, minTwoNum);
console.log("result = " + result);


// a = 5, b = 8, func = function(a, b) { return a + b};
function subNum(a, b) {
    return a + b;
}

var func = subNum;
func(5, 9);

result = test(5, 8, subNum);

// 第一步
result = test(5, 8, function (a, b) {
    // 第三步
    return a + b;
});
console.log("result = " + result);

// 函数表达式
var func1 = function (a, b) {
    return a - b;
};
console.log(func1(3, 9));


// 函数作为返回值
function returnFunc(str) {
    if (str == "max") {
        return maxTwoNum;
    }
    if (str == "min") {
        return minTwoNum;
    }
}
var funcValue = returnFunc("max");
var result = funcValue(23, 44);
console.log(result);


// 匿名函数作为函数的返回值
function test2(num) {

    return function () {
        return num * num;
    };
}
var func3 = test2(5);
result = func3();
console.log("result = " + result);


(function () {

    // 获取li
    var lis = document.getElementsByTagName('li');

    // 给每一个li添加点击事件
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {

            // 把所有li的背景颜色都变为蓝色, 字体颜色为黑色
            for (var j = 0; j < lis.length; j++) {
                lis[j].style.backgroundColor = "blue";
                lis[j].style.color = "black";
            }

            // 事件绑定在谁身上, this就代指哪个元素
            // 把当前点击的按钮的背景颜色变为红色, 字体颜色变为白色
            this.style.backgroundColor = "red";
            this.style.color = "white";
        };
    }

    /*
        lis[0].onclick = function () {

            for (var j = 0; j < lis.length; j++) {
                lis[j].style.backgroundColor = "blue";
                lis[j].style.color = "black";
            }

            this.style.backgroundColor = "red";
            this.style.color = "white";
        };

    lis[1].onclick = function () {

        for (var j = 0; j < lis.length; j++) {
            lis[j].style.backgroundColor = "blue";
            lis[j].style.color = "black";
        }

        this.style.backgroundColor = "red";
        this.style.color = "white";
    };

    lis[2].onclick = function () {

        for (var j = 0; j < lis.length; j++) {
            lis[j].style.backgroundColor = "blue";
            lis[j].style.color = "black";
        }

        this.style.backgroundColor = "red";
        this.style.color = "white";
    };

    lis[3].onclick = function () {

        for (var j = 0; j < lis.length; j++) {
            lis[j].style.backgroundColor = "blue";
            lis[j].style.color = "black";
        }

        this.style.backgroundColor = "red";
        this.style.color = "white";
    };

    lis[4].onclick = function () {

        for (var j = 0; j < lis.length; j++) {
            lis[j].style.backgroundColor = "blue";
            lis[j].style.color = "black";
        }

        this.style.backgroundColor = "red";
        this.style.color = "white";
    };

    */
})();








