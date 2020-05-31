// Brower Object Model, 浏览器对象模型
// 处理浏览器窗口与浏览器窗口之间的通讯
// BOM提供很多对象, 每个对象都有自己的属性和方法
// window是BOM的顶层(核心), 其它对象都是window的延伸对象

/*
*  document
*  location
*  navigator
*  screen
*  history
*  frames
* */

//  window的特点
// 所有的全局变量都是window的属性
var apple = "iphone20Plus";
console.log(apple);
console.log(window.apple);

// 调用window的属性和方法的时候, window可以省略
// this
var thisBtn = document.querySelector('#this');
thisBtn.onclick = function () {

    console.log(this);
    function test(a) {
        console.log(a);
    }
    test(this);
};

/*
* window.open(URL, name, feature)
* URL: 统一资源定位符
* name: 配合a标签还表单标签的target来使用, 在新的浏览器窗口中打开一个网址
* feature: 打开的新窗口的特征, 比如宽高, 位置, 滚动条, 工具栏等等
* 该函数返回一个window对象
* 同一个名字的窗口只能打开一次
*
* */
var openBtn = document.querySelector('#open');
openBtn.onclick = function () {

    // window.open("http://www.baidu.com", "");
    // var aWindow = window.open("http://www.baidu.com", "", "width=600, height=300");
    // toolbar: 工具栏
    // scrollbars: 滚动条
    // var aWindow = window.open("http://www.baidu.com", "", "width=600, height=300, toolbar=yes, scrollbars=no, left=50, top=50");
    // aWindow.document.body.style.background = "red";

    // window.open("", "hehe", "width=500, height=500");

    window.open("", "hehe", "");
    window.open("", "hehe", "");
    window.open("", "hehe", "");
    window.open("", "hehe", "");
    window.open("", "hehe", "");
};


var opWindow = document.querySelector('#openWindow');
var closeWindow = document.querySelector('#closeWindow');
var newWindow;
var newWindowArr = [];
opWindow.onclick = function () {

    newWindow = window.open('', "", "height=500, width=500");
    newWindowArr.push(newWindow);
};

closeWindow.onclick = function () {

    // 关闭窗口
    // newWindow.close();

    if (newWindowArr.length > 0) {
        newWindowArr[newWindowArr.length - 1].close();
        newWindowArr.pop();
    }
};

// moveTo(x, y)  移动窗口, 相对于设备屏幕, 不能超出设备可供浏览器使用的范围
var moveToBtn = document.querySelector('#moveTo');
moveToBtn.onclick = function () {

    if (newWindow) {
        newWindow.moveTo(3600, 3600);
    }
};

// moveBy(dx, dy) 相对于之前的位置进行移动
var moveByBtn = document.querySelector('#moveBy');
moveByBtn.onclick = function () {
    // console.log(newWindowArr);
    if (newWindow) {
        newWindow.moveBy(10, 10);
    }
};

// for (var i = 0; i < 6; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1);
// }
// console.log(6666);

var scrollToBtn = document.querySelector('#scrollTo');
var scrollByBtn = document.querySelector('#scrollBy');
// scrollTo(x, y), 滚动的距离
scrollToBtn.onclick = function () {
        // window.scrollTo(0, 200);
    console.log(self === window);
    self.scrollTo(0, 200);
};

// scrollBy(dx, dy), 基于当前的滚动距离进行滚动
scrollByBtn.onclick = function () {
    self.scrollBy(0, 10);
};

// document.onkeydown = function (e) {
//     console.log(e.keyCode);
//     if (e.keyCode == 37) {
//         self.scrollBy(0, 1000);
//     } else if (e.keyCode == 39) {
//         self.scrollBy(0, -1000);
//     }
// };


var resizeToBtn = document.querySelector('#resizeTo');
var resizeByBtn = document.querySelector('#resizeBy');

// resizeTo(w, h), 改变窗口的大小
resizeToBtn.onclick = function () {

    if (newWindow) {
        newWindow.resizeTo(320, 480);
    }

};

// resizeBy(dw, dh), 基于窗口当前尺寸改变大小
resizeByBtn.onclick = function () {
    if (newWindow) {
        newWindow.resizeBy(10, 10);
    }
};


// 弹框
var alertBtn = document.querySelector('#alert');
var confirmBtn = document.querySelector('#confirm');
var promptBtn = document.querySelector('#prompt');
// alert(msg)
alertBtn.onclick = function () {
    // self.alert()
    alert("Hello, world!");
};

// confirm(msg), 返回值为布尔值, 点击确定返回true, 点击取消返回false
confirmBtn.onclick = function () {

    var result = confirm("大千是男人吗???");
    result ? alert("是男人!!!") : alert("不是男人!!!");
};

// prompt(arg1, arg2)
// 弹出一个带有输入框的弹框, 返回值为输入框中输入的内容
promptBtn.onclick = function () {
    // 返回值为输入框中输入的内容
    var result = prompt("大千喜欢哪个明星?", "");
    alert("他喜欢" + result);
};



// history
// history.back() 回到上一页, 前提是从上个页面进来的
// history.forward() 进入到下一个页面, 前提是进入过下个页面
// history.length: 历史记录的个数
// history.go(num), 以当前页面为基准, num>0, 前进num个页面, num<0, 后退num个页面

// location对象
console.dir(location);

// 主机
console.log(location.host);

// 主机名
console.log(location.hostname);

// 端口号
console.log(location.port);

// 文件路径
console.log(location.pathname);

// 协议
console.log(location.protocol);

// hash
// url中#后面的内容
console.log(location.hash);

// ? 后面内容, 包含的是查询参数
console.log(location.search);

// 刷新页面
// location.reload();

// navigator
console.dir(navigator);

// 浏览器代码名字
console.log(navigator.appCodeName);

// 浏览器名字
console.log(navigator.appName);

// 用户代理, 一般指浏览器, 发送请求是, 请求头的信息
console.log(navigator.userAgent);
if (navigator.userAgent.indexOf("Chrome") == -1) {
    console.log("不是Chrome或者Safri浏览器");
} else  {
    console.log("是Chrome或者Safri浏览器");
}
// 是否允许cookie设置
console.log(navigator.cookieEnabled);

// 是否支持java
console.log(navigator.javaEnabled());

// 平台
console.log(navigator.platform);

// 插件信息
console.log(navigator.plugins);


// screen, 屏幕信息
console.log(screen);

// 屏幕高度
console.log(screen.height);
// 屏幕宽度
console.log(screen.width);

// 允许浏览器使用的高度/宽度
console.log(screen.availHeight);
console.log(screen.availWidth);

// 显示器颜色分辨率
console.log(screen.pixelDepth);
// 调色板分辨率
console.log(screen.colorDepth);

// 框架
console.log(frames);
console.log(frames.length);

// 第一步开启apache服务 1.启动 sudo apachectl -k start 2.重新启动 sudo apachectl -k restart
// 第二步 command + shift + g  输入 /Library
// 第三步 找到资源库目录下的 webServer文件夹下的Documents文件夹, 把文件放到该目录下即可






























