// 获取元素
var timeP = document.querySelector('#time');
var scoreP = document.querySelector('#score');
var showDiv = document.querySelector('#show');
var menuDiv = document.querySelector('#menu');
var startBtn = document.querySelector('#start');

var num = 1;


// 开始游戏按钮事件
startBtn.onclick = function () {

    menuDiv.style.display = "none";

    var time = 20;


    var timerId = setInterval(function () {

        time--;
        timeP.innerHTML = "剩余时间: " + time;

        if (time == 0) {

            clearInterval(timerId);
            menuDiv.style.display = "block";
            startBtn.innerHTML = "重新开始";
            scoreP.innerHTML = "分数: 0";
            showDiv.innerHTML = "";
            var oImg = document.createElement('img');
            oImg.src = "img/2.png";
            oImg.onclick = createImgs;
            showDiv.appendChild(oImg);

            alert("得分: " + (num ? --num : 0));
            num = 1;

        }


    }, 1000);

};


showDiv.firstElementChild.onclick = createImgs;

function createImgs() {

    // 改变得分
    scoreP.innerHTML = "得分: " + num++;

    // 清空showDiv中的所有图片
    showDiv.innerHTML = "";

    // 要创建的图片数量
    var count = Math.pow(num, 2);

    for (var i = 0; i < count; i++) {
        var oImg = document.createElement('img');
        oImg.src = "img/1.png";
        oImg.style.width = 100 / num + "%";
        oImg.style.height = 100 / num + "%";
        showDiv.appendChild(oImg);
    }

    // 随机找到一张改成房祖名的照片
    var randomNum = Math.floor(Math.random() * count);

    console.log(randomNum);
    showDiv.children[randomNum].src = "img/2.png";

    showDiv.children[randomNum].onclick = createImgs;

};