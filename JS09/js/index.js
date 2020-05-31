// 获取元素
var boxDiv = document.getElementById('box');
var contentDiv = document.getElementById('content');
var leftDiv = document.getElementById('left');
var rightDiv = document.getElementById('right');
var liArr = document.getElementsByTagName('li');

// 标记当前图片下标
var index = 0;
var flag = true;

// 左侧按钮点击事件
leftDiv.onclick = function () {

    // 锁定按钮, 不能连续点击
    if (flag) {
        flag = false;
        setTimeout(function () {
            flag = true;
        }, 1000);
    } else {
        return;
    }

    // 如果当前是最后一张图片, 那么直接切换到第一张图片
    if (index == 3) {
        index = 0;
        contentDiv.style.left = 0;
    }

    scroll(1);
};

// 右侧点击事件
rightDiv.onclick = function () {

    if (flag) {
        flag = false;
        setTimeout(function () {
            flag = true;
        }, 1000);
    } else {
        return;
    }


    // 如果当前是第一张图片, 直接切换到最后一张图片
    if (index == 0) {
        index = 3;
        contentDiv.style.left = -350 * index + 'px';
    }
    scroll(-1);
    // changeDot();
};

var timer;
// 点击事件函数
function scroll(n) {
    var t = 0;
    var b = -350 * index;
    var c = 350 * (-n);
    var d = 100;
    index += n;
    function move() {
        t++;
        contentDiv.style.left = Tween.Bounce.easeInOut(t, b, c, d) + 'px';
        if (t == d) {
            clearInterval(timer);
            changeDot();
        }
    }
    clearInterval(timer);
    timer = setInterval(move, 10);
}


// 改变小圆点
function changeDot() {

    for (var i = 0; i < liArr.length; i++) {
        liArr[i].style.backgroundColor = "black";
    }

    liArr[index == 3 ? 0 : index].style.backgroundColor = "red";
}

// 给li添加点击事件
for (var i = 0; i < liArr.length; i++) {
    liArr[i].a = i;
    liArr[i].onclick = function () {
        if (index == 3) {
            index = 0;
            contentDiv.style.left = 0;
        }
        scroll(this.a - index);
    };
}


// var waige = {
//     name: "歪哥",
//     age: 19
// };
// console.log(waige.name);
// console.log(waige.age);
// waige.car = "BMW";
// console.log(waige.car);

function autoScroll() {
    if (index == 3) {
        index = 0;
        contentDiv.style.left = 0;
    }

    scroll(1);
}

// 自动轮播
var timerAuto = setInterval(autoScroll, 2000);

// 给boxDiv添加鼠标事件
// 鼠标进入到boxDiv范围内的事件
boxDiv.onmouseenter = function () {
    clearInterval(timerAuto);
};

// 鼠标离开boxDiv范围的事件
boxDiv.onmouseleave = function () {
    timerAuto = setInterval(autoScroll, 2000);
};




