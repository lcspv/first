// 获取页面中的元素

// 获取四个按钮
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');

// 获取img元素
var oImg = document.getElementsByTagName('img')[0];

// 当前是第一张图片
var i = 1;

// 点击向左按钮事件
leftBtn.onclick = function () {

    // i--;
    // if (i == 0) {
    //     i = 8;
    // }
    // oImg.src = "img/" + i + ".jpg";
    changeImage(1);
};

rightBtn.onclick = function () {
    // i++;
    // if (i == 9) {
    //     i = 1;
    // }
    // oImg.src = "img/" + i + ".jpg";
    changeImage(-1);
};

function changeImage(n) {
    i += n;
    (i == 0) && (i = 8);
    (i == 9) && (i = 1);
    oImg.src = "img/" + i + ".jpg";
}

var handle;
// 播放按钮
startBtn.onclick = function () {

   handle = requestAnimationFrame(animation);
};

var count = 0;

function animation() {
    count++;
    console.log(count);
    if (count % 4 == 0) {
        changeImage(1);
    }
    handle = requestAnimationFrame(animation);
}

// 暂停按钮
pauseBtn.onclick = function () {
  cancelAnimationFrame(handle);
};
