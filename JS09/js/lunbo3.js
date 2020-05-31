// 获取元素
var contentDiv = document.getElementById('content');

// 获取所有的span
var spanArr = document.getElementsByTagName('span');

// 记录下标和宽度
var index = 0, x = 0;

function changeWidth() {
    x++;
    spanArr[index].style.width = x + 'px';

    // 当进度读完时
    if (x == 30) {
        clearInterval(spanTimer);
        x = 0;
        spanArr[index].style.width = 0;
        scroll();
    }
}
var spanTimer = setInterval(changeWidth, 100);


function scroll() {
    var t = 0;
    var b = -350 * index;
    var c = -350;
    var d = 100;
    index++;

    function move() {
        t++;
        contentDiv.style.left = Tween.Sine.easeInOut(t, b, c, d) + 'px';
        if (t == d) {
            if (index == 3) {
                index = 0;
                contentDiv.style.left = 0;
            }
            clearInterval(moveTimer);
            spanTimer = setInterval(changeWidth, 100);
        }
    }

    var moveTimer = setInterval(move, 10);
    
}


// 作业: 5遍轮播图

