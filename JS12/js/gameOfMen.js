(function () {



    // 获取元素
    var scoreP = document.querySelector('p');
    var startBtn = document.querySelector('#start');
    var gameDiv = document.querySelector('#game');

    // 标识要创建的小方块的个数
    var num = 10;
    // 标记第几层
    var row = 0;
    // 运动速度
    var speed = 500;
    // 标识方向
    var direction = true;
    // 标识位置
    var x = 0;


    // 开始游戏
    startBtn.onclick = function () {

        startBtn.style.display = "none";

        createRow();
    };

    var timerId;


    function createRow() {
        // 创建ul
        var oUl = document.createElement('ul');

        // 创建li
        for (var i = 0; i < num; i++) {
            var oLi = document.createElement('li');
            oUl.appendChild(oLi);
        }

        oUl.style.left = x + 'px';
        oUl.style.bottom = 20 * row + 'px';
        gameDiv.appendChild(oUl);

        timerId = setInterval(move, speed);

        function move() {
            // 判断往哪个方向移动
            if (direction) {
                x += 20;
                // 运动到最右边是改变方向
                if (x == 400 - num * 20) direction = !direction;
            } else {
                x -= 20;
                // 运动到最左边时改变方向
                if (x == 0) direction = !direction;
            }
            oUl.style.left = x + 'px';
        }

    }


    var flag = true;
    gameDiv.onclick = function () {

        if (flag) {
            flag = false;
            setTimeout(function () {
                flag = true;
            }, 600);
        } else  {
            return;
        }

        // 不让ul再运动
        clearInterval(timerId);

        row++;
        speed *= .8;

        // 要移除的li的个数
        var removeNum = 0;
        // 获取当前正在运动的ul
        var nowRow = gameDiv.lastElementChild;
        // 获取前一个ul
        var preRow = nowRow.previousElementSibling;
        if (preRow) {
            removeNum = (nowRow.offsetLeft - preRow.offsetLeft) / 20;
        } else {
            removeNum = 0;
        }

        // 剩余的li的个数
        num -= Math.abs(removeNum);

        // 游戏结束判断
        if (num <= 0) {
            return alert("Game Over!!!");
        }

        scoreP.innerHTML = "层数: " + row;

        // 切右边
        if (removeNum > 0) {
            for (var i = 0; i < removeNum; i++) {
                var index = nowRow.children.length;
                var oLi = nowRow.children[index - 1 - i];
                oLi.style.transform = "translate(0, 100px) rotate(90deg)"
            }
            // 延迟删除
            setTimeout(function () {
                for (var i = 0; i < removeNum; i++) {
                    nowRow.removeChild(nowRow.lastElementChild);
                }
            }, 500);
        } else { // 切左边

            for (var i = 0; i < -removeNum; i++) {
                nowRow.children[i].style.transform = "translate(0, 100px) rotate(-90deg)";
            }

            setTimeout(function () {
                for (var i = 0; i < -removeNum; i++) {
                    nowRow.removeChild(nowRow.firstElementChild);
                }

                nowRow.style.left = nowRow.offsetLeft + (-removeNum * 20) + 'px';
                
            }, 500);

            x += -removeNum * 20;


        }



        createRow();

    };



})();