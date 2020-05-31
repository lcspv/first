// 写一个函数, 同时兼容火狐和其他浏览器, 支持滚轮事件
var result = navigator.userAgent.indexOf("Firefox") != -1;
console.log(navigator.userAgent);

function addWheel(ele, callback) {

    // // ele  = oDiv;
    // function callback(d) {
    //     var num = direction ? -10 : 10;
    //     oDiv.style.width = oDiv.offsetWidth + num + 'px';
    //     oDiv.style.height = oDiv.offsetHeight + num + 'px';
    // }
    // 滚轮的方向
    var direction = true;

    // 如果是火狐浏览器
    if (result) {
        ele.addEventListener('DOMMouseScroll', wheel);
    } else {
        // 如果不是火狐浏览器
        ele.addEventListener('mousewheel', wheel);
    }


    function wheel(e) {
        if (result) {
            // 火狐浏览器下 e.detail > 0 的时候是往上滚
            direction = e.detail > 0;
        } else {
            // 其它情况下, e.wheelDelta < 0时是往上滚
            direction = e.wheelDelta < 0;
        }
        callback(direction);
        e.preventDefault();
        
    }
    
}