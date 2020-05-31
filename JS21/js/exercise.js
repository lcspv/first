// 正整数 正则
var reg = /^\+?[1-9]+\d*$/;
var oInput = document.querySelector('input');
var btn1 = document.querySelector('button');
btn1.addEventListener('click', function () {
    var val = oInput.value;
    if (reg.test(val)) {
        alert("是正整数");
    } else {
        alert("不是正整数");
    }
});

// 非负数 正则
var reg2 = /^\+?((0|([1-9]+\d*))|((0\.\d+)|([1-9]+\d*\.\d+)))$/;
var btn2 = document.querySelector('#ff');
btn2.addEventListener('click', function () {
    var val = oInput.value;
    if (reg2.test(val)) {
        alert("通过验证");
    } else  {
        alert("没通过验证");
    }
});


// 作业: 封装js, 判断是不是手机号, 是不是邮箱, 是不是身份证号, 是不是qq号