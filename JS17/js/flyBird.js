!function () {

    // 获取元素
    var boxDiv = document.querySelector('#box');
    var titleDiv = document.querySelector('#title');
    var menuDiv = document.querySelector('#menu');
    var startBtn = document.querySelector('#menu>img');
    var scoreDiv = document.querySelector('#score');
    var bird = document.querySelector('#bird');
    var pipesUl = document.querySelector('#pipes');
    var gameOverDiv = document.querySelector('#gameOver');
    var endDiv = document.querySelector('#end');
    var currentScoreSpan = document.querySelector("#end>span:first-of-type");
    // console.log(currentScoreSpan);
    var bestScoreSpan = currentScoreSpan.nextElementSibling;

    var bulletM = document.querySelector('audio');
    var gameM = bulletM.nextElementSibling;
    var gameOverM = gameM.nextElementSibling;

    // 小鸟对象
    var flyBird = {

        // 创建管道方法
        createPipe: createPipe,

        // 管道之间的间隙
        pipeGap: 150,

        // 初始分数
        score: 0,

        // 改变分数方法
        changeScore: changeScore,

        // 下降或上升的速度
        speed: 0,

        // 小鸟向下飞的函数
        flyDown: flyDown,

        // 小鸟向上飞的函数
        flyUp: flyUp,

        // 向下飞的定时器
        downTimer: 0,

        // 向上飞的定时器
        upTimer: 0



    };


    // 开始按钮点击事件
    startBtn.onclick = function () {

        // 隐藏元素
        titleDiv.style.display = "none";
        menuDiv.style.display = "none";

        // 显示元素
        scoreDiv.style.display = "block";
        bird.style.display = "block";
        pipesUl.style.display = "block";

        // 播放音乐
        gameM.loop = "loop";
        gameM.play();

        // 创建对象
        flyBird.createPipe();

        setInterval(flyBird.createPipe, 3000);

        // 向下飞
        flyBird.downTimer = setInterval(flyBird.flyDown, 30);
        
        
        boxDiv.onclick = function () {

            // 播放音乐
            bulletM.play();

            // 清除定时器
            clearInterval(flyBird.downTimer);
            clearInterval(flyBird.upTimer);

            bird.src = "img/up_bird.png";

            flyBird.speed = 8;

            // 向上飞
            flyBird.upTimer = setInterval(flyBird.flyUp, 30);
        };


        // 检测小鸟是否撞到了柱子上
        setInterval(function () {

            for (var i = 0; i < pipesUl.children.length; i++) {

                var oLi = pipesUl.children[i];
                crash(oLi.firstElementChild);
                crash(oLi.lastElementChild);
            }
            
        }, 15);
        

        
    };
    

    // 判断是否相撞
    function crash(pipeDiv) {

        var position1 = {
            left: bird.offsetLeft,
            right: bird.offsetLeft + bird.offsetWidth,
            top: bird.offsetTop,
            bottom: bird.offsetTop + bird.offsetHeight
        };

        var position2 = {
            // 注意柱子的父级li也有定位属性
            left: pipeDiv.offsetParent.offsetLeft,
            right: pipeDiv.offsetParent.offsetLeft + pipeDiv.offsetWidth,
            top: pipeDiv.offsetTop,
            bottom: pipeDiv.offsetTop + pipeDiv.offsetHeight
        };
        console.log(position1);
        console.log(position2);


        var result = position1.right < position2.left || position1.left > position2.right || position1.top > position2.bottom || position1.bottom < position2.top;

        console.log(result);
        if (!result) {
            gameOver();
        }
    }



    // 创建管道方法
    function createPipe() {

        var oLi = document.createElement('li');
        // 管道初始位置
        var x = pipesUl.offsetWidth;
        oLi.style.left = x + 'px';

        // 上管道
        var topPipe = document.createElement('div');
        topPipe.id = "topPipe";
        var topHeight = Math.floor(Math.random() * (423 - flyBird.pipeGap + 1));
        topPipe.style.height = topHeight + 'px';
        oLi.appendChild(topPipe);

        // 下管道
        var downPipe = document.createElement('div');
        downPipe.id = "bottomPipe";
        var bottomHeight = 423 - topHeight - flyBird.pipeGap;
        downPipe.style.height = bottomHeight + 'px';
        oLi.appendChild(downPipe);

        pipesUl.appendChild(oLi);
        
        var moveTimer = setInterval(function () {
            x--;
            oLi.style.left = x + 'px';

            // 改变分数
            if (x == 0) flyBird.changeScore();

            if (x <= -62) {
                pipesUl.removeChild(oLi);
                clearInterval(moveTimer);
            }

        }, 15);


    }
    

    // 改变分数
    function changeScore() {

        flyBird.score++;

        // 清空scoreDiv中的内容
        scoreDiv.innerHTML = "";

        // 将数字转化成字符串
        var str = flyBird.score.toString();

        for (var i = 0; i < str.length; i++) {
            // 创建图片
            var oImg = document.createElement('img');
            oImg.src = "img/" + str.charAt(i) + '.jpg';
            scoreDiv.appendChild(oImg);
        }
    }
    
    
    // 向上飞的函数
    function flyUp() {
        flyBird.speed -= .5;
        if (flyBird.speed <= 0) {
            flyBird.speed = 0;
            clearInterval(flyBird.upTimer);
            flyBird.downTimer = setInterval(flyBird.flyDown, 30);
        }

        bird.style.top = bird.offsetTop - flyBird.speed + 'px';
        if (bird.offsetTop <= 0) bird.style.top = 0;

    }
    
    
    // 向下飞的函数
    function flyDown() {
        bird.src = "img/down_bird.png";
        flyBird.speed += .5;
        flyBird.speed = flyBird.speed >= 8 ? 8 : flyBird.speed;
        bird.style.top = bird.offsetTop + flyBird.speed + 'px';
        // 落地游戏结束
        if (bird.offsetTop + bird.clientHeight >= 423) gameOver();
    }

    // 游戏结束函数
    function gameOver() {
        // 清除所有定时器
        var timerLast = setInterval(function () {
            for (var i = 0; i <= timerLast; i++) {
                clearInterval(i);
            }
        }, 1);


        // 暂停音乐
        gameM.pause();
        // 播放游戏结束音乐
        gameOverM.play();

        // 本局游戏得分
        currentScoreSpan.innerHTML = flyBird.score;

        // 历史最高得分
        // localStorage: 本地持久化对象, 可以把数据写到本地文件中
        if (!localStorage.bestScore) {
            localStorage.bestScore = flyBird.score;
        } else {
            localStorage.bestScore = localStorage.bestScore > flyBird.score ? localStorage.bestScore : flyBird.score;
        }
        bestScoreSpan.innerHTML = localStorage.bestScore;
        endDiv.style.display = "block";
        gameOverDiv.style.display = "block";

        // 游戏结束弹框
        setTimeout(function () {

            var result = confirm("男人不能说不行, 再来一局?");
            if (result) {
                // 刷新页面
                location.reload();
            }


        }, 200);

    }
        
        


















}();