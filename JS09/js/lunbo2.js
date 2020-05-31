// 获取元素
var boxDiv = document.getElementById('box');
var leftDiv = document.getElementById('left');
var rightDiv = document.getElementById('right');
var imgArr = document.getElementsByTagName('img');
var liArr = document.getElementsByTagName('li');

// 记录下标
var index = 0;

// 添加点击事件
leftDiv.onclick = function () {

    if (index == 2) {
        index = -1;
    }

    index++;

    // 让新的图片显示, 旧的图片隐藏
    changeOpacity();
    changeDot();
};


rightDiv.onclick = function () {

    if (index == 0) {
        index = 3;
    }
    index--;
    changeOpacity();
    changeDot();
};


// 改变透明度
function changeOpacity() {

    for (var i = 0; i < imgArr.length; i++) {
        imgArr[i].style.opacity = 0;
    }

    imgArr[index].style.opacity = 1;
}

function changeDot() {
    for (var i = 0; i < liArr.length; i++) {
        liArr[i].style.backgroundColor = 'black';
    }
    liArr[index].style.backgroundColor = "red";
}

// 给每个li添加点击事件
for (var i = 0; i < liArr.length; i++) {

    liArr[i].a = i;
    liArr[i].onclick = function () {
        index = this.a;
        changeOpacity();
        changeDot();
    };

}


function autoChange() {

    if (index == 0) {
        index = 3;
    }
    index--;
    changeOpacity();
    changeDot();
}

var timer = setInterval(autoChange, 1000);
boxDiv.onmouseenter = function () {
    clearInterval(timer);
};

boxDiv.onmouseleave = function () {
    timer = setInterval(autoChange, 1000);
};
