// 拓展
var colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'purple'];
// 通过类名获取元素, 得到的是一个数组, 里面存放的是拥有该类名的所有元素
var divArr = document.getElementsByClassName('color');

for (var i = 0; i < divArr.length; i++) {
    divArr[i].style.backgroundColor = colorArr[i];
}


// 作业: 代码1遍
// 2: 乘法口诀表30变
// 锻炼自己的学习能力(通过博客。。。课本等等)