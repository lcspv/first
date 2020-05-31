function isCrash(ele1, ele2) {

    if (typeof ele1 !== "object" && typeof  ele2 !== "object") throw  "参数错误!!! 必须传DOM元素";

    // 创建两个存放位置的对象
    var position1 = {}, position2 = {};

    copyPosition(position1, ele1);
    copyPosition(position2, ele2);

    // 这四种情况满足一种就是不碰撞
    if (position1.right < position2.left || position1.bottom < position2.top || position1.left > position2.right || position1.top > position2.bottom) {
        return false;
    } else {
        return true;
    }

    function copyPosition(obj, ele) {
        obj.left = ele.offsetLeft;
        obj.right = ele.offsetLeft + ele.offsetWidth;
        obj.top = ele.offsetTop;
        obj.bottom = ele.offsetTop + ele.offsetHeight;
    }


}

