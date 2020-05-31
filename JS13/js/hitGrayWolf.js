!function () {

    // 获取元素
    var startBtn = document.querySelector('#start');
    var scoreP = document.querySelector('#score');
    var timeP = document.querySelector('#time');
    var menuDiv = document.querySelector('#menu');
    var wolvesDiv = document.querySelector('#wolves');

    // 存放所有的位置
    var positions = [
        {l: "98px", t: "113px"},
        {l: "21px", t: "158px"},
        {l: "187px", t: "140px"},
        {l: "103px", t: "191px"},
        {l: "17px", t: "219px"},
        {l: "200px", t: "211px"},
        {l: "30px", t: "292px"},
        {l: "119px", t: "272px"},
        {l: "206px", t: "294px"}
    ];

    // 进入条的宽度
    var pW = 180;

    // 开始按钮点击事件
    startBtn.onclick = startBtnClickAction;

    var wolfTimer;
    var timer;
    
    function startBtnClickAction() {

        menuDiv.style.display = "none";
        timer = setInterval(changeTimer, 100);
        wolfTimer = setInterval(createWolf, 1000);

    }

    // 改变时间的函数
    function changeTimer() {
        pW--;
        timeP.style.width = pW + 'px';
        if (0 == pW) {
            clearInterval(timer);
            clearInterval(wolfTimer);
            alert("Game Over!!!");
            menuDiv.style.display = "block";
            pW = 180;
            scoreP.innerHTML = 0;
            startBtn.innerHTML = "重新开始";
        }
    }


    // 随机数函数
    function randomNum(x, y) {
        return Math.floor(Math.random() * (y - x + 1) + x);
    }


    function createWolf() {

        var oImg = document.createElement('img');

        // 如果随机数小于等于80, 就出现灰太狼, 否则出现小灰灰
        oImg.type = randomNum(1, 100) <= 80 ? "h" : "x";

        // 随机出现的位置
        var n = randomNum(0, 8);

        oImg.style.left = positions[n].l;
        oImg.style.top = positions[n].t;

        oImg.src = "img/" + oImg.type + '0.png';

        wolvesDiv.appendChild(oImg);



        var up = 0;
        var downTimer;
        var upTimer = setInterval(function () {
            up++;
            oImg.src = "img/" + oImg.type + up + '.png';

            if (5 == up) {
                clearInterval(upTimer);
                downTimer = setInterval(function () {
                    up--;
                    oImg.src = "img/" + oImg.type + up + '.png';
                    if (up == 0) {
                        wolvesDiv.removeChild(oImg);
                        clearInterval(downTimer);
                    }
                }, 150);
            }


        }, 150);

        oImg.hit = true;

        // 给图片添加点击事件
        oImg.onclick = function () {

            // 图片只能点击一次
            if (oImg.hit) {
                oImg.hit = false;
            } else  {
                return;
            }

            // 清除定时器
            clearInterval(upTimer);
            clearInterval(downTimer);

            var score = scoreP.innerHTML - 0;
            // 如果打的是灰太狼 +10分, 否则 -10分
            if ("h" == oImg.type) {
                scoreP.innerHTML = score + 10;
            } else {
                scoreP.innerHTML = score - 10;
            }

            var hit = 5;

            var hitTimer = setInterval(function () {

                hit++;
                oImg.src = "img/" + oImg.type + hit + '.png';

                if (hit == 9) {
                    clearInterval(hitTimer);
                    wolvesDiv.removeChild(oImg);
                }

            }, 150);

        };



    }














}();