
var count = 0;
function test() {
    count++;
    // n秒走一次就对 60 的 n 倍取余
    if (count % (60 * 2) == 0) {
        console.log(count);
    }


    // 1s 60帧, 1000 / 60 ms 走一帧
    var num = requestAnimationFrame(test);
    
    if (count == 60 * 8) {
        // 取消帧动画
        cancelAnimationFrame(num);
    }


}
requestAnimationFrame(test);
