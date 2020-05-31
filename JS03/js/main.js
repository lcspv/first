/*
    for循环
    for (①; ②; ③) {
        ④
    }
    执行顺序
    ①②④->③②④->③②④->③②④->③②④->③②④->...③②

*/
for (var i = 0; i < 10; i++) {
    document.write("💖️ " + i);
}

// 求1-9的和
var sum = 0;
for (var i = 1; i <= 9; i++) {
    // sum = sum + i;
    sum += i;
}
document.write("<br>sum = " + sum);

// 求1-100之间偶数的和
var evenNum = 0;
// for (var i = 0; i <= 100; i += 2) {
//     evenNum += i;
// }
// document.write("<br>evenNum = " + evenNum);

// 求1-100之间奇数的和
var oddNum = 0;
// for (var i = 1; i <= 100; i += 2) {
//     oddNum += i;
// }
// document.write("<br>oddNum = " + oddNum);

for (var i = 1; i <= 100; i++) {
    // if (i % 2 == 0) {
    //     evenNum += i;
    // } else {
    //     oddNum += i;
    // }

    i % 2 == 0 ? evenNum += i : oddNum += i;
}
document.write("<br>evenNum = " + evenNum + ", oddNum = " + oddNum);


// 随机数
// Math.random() 会随机一个 >= 0 && < 1的一个数 [0, 1)
var aNum = Math.random();
document.write("<br>aNum = " + aNum);

var intNum = Math.floor(3.7);
document.write("<br>intNum = " + intNum);

var bNum = Math.floor(Math.random());
document.write("<br>bNum = " + bNum);

// 随机一个[0, 10]的数
var cNum = Math.floor(Math.random() * 11);
document.write("<br>cNum = " + cNum);

// 随机一个[0, 100]的数
var dNum = Math.floor(Math.random() * 101);
document.write("<br>dNum = " + dNum);

// 随机一个[20, 100]的数
var eNum = Math.floor(Math.random() * 81 + 20);
document.write("<br>eNum = " + eNum + "<br>");

// 随机一个[m, n]的数
// Math.floor(Math.random() * (n - m + 1) + m);

// 随机产生20个 [63, 83]的随机数
for (var i = 0; i < 20; i++) {
    var ranNum = Math.floor(Math.random() * (83 - 63 + 1) + 63);
    document.write("<span class='num'>" + ranNum + "</span>");
}


// 随机产生10个[20, 50]的数, 求最大值, 最小值, 平均值, 和
var n = 10, maxNum = 20, minNum = 50, sumNum = 0;
document.write("<br>");
for (var i = 0; i < 10; i++) {
    var ranNum = Math.floor(Math.random() * (50 - 20 + 1) + 20);
    document.write("<span class='blue'>" + ranNum + "</span>");
    sumNum += ranNum;
    // 最大数
    maxNum = maxNum > ranNum ? maxNum : ranNum;
    // 最小值
    minNum = minNum < ranNum ? minNum : ranNum;
}
// toFixed(n), 保留小数点后n位有效数字
document.write("<br>sumNum = " + sumNum + ", maxNum = " + maxNum + ", minNum = " + minNum + ", 平均数为: " + (sumNum / n).toFixed(2) );



for (var i = 0; i < 10; i++) {
    document.write("<br>i = " + i);
    if (i == 5) {
        // 结束本层循环
        break;
    }
}


for (var i = 10; i > 0; i--) {
    // continue: 结束本次循环
    if (i == 5) continue;
    document.write("<br>i = " + i);
}
document.write("<br><br>");

// 打印1-5
// 1 2 3 4 5
/*
document.write("<div class='dtable'>");

document.write("<div class='drow'>");
for (var i = 1; i <= 5; i++) {
    document.write("<div class='dcell'>" + i + "</div>");
}
document.write("</div>");

document.write("<div class='drow'>");
for (var i = 1; i <= 5; i++) {
    document.write("<div class='dcell'>" + i + "</div>");
}
document.write("</div>");

document.write("<div class='drow'>");
for (var i = 1; i <= 5; i++) {
    document.write("<div class='dcell'>" + i + "</div>");
}
document.write("</div>");

document.write("<div class='drow'>");
for (var i = 1; i <= 5; i++) {
    document.write("<div class='dcell'>" + i + "</div>");
}
document.write("</div>");

document.write("<div class='drow'>");
for (var i = 1; i <= 5; i++) {
    document.write("<div class='dcell'>" + i + "</div>");
}
document.write("</div>");

document.write("</div>");
*/


document.write("<div class='dtable'>");

for (var j = 1; j <= 5; j++) {
    document.write("<div class='drow'>");
    for (var i = 1; i <= 5; i++) {
        document.write("<div class='dcell'>" + i + "</div>");
    }
    document.write("</div>");
}

document.write("</div>");

document.write("<hr style='margin: 50px 0;'>");

// 1-9
// 外层循环控制行数, 内层循环控制列数
document.write("<div class='dtable'>");

for (var j = 1; j <= 9; j++) {
    document.write("<div class='drow'>");
    for (var i = 1; i <= j; i++) {
        document.write("<div class='dcell'>" + i + " * " + j + " = " + i * j + "</div>");
    }
    document.write("</div>");
}

document.write("</div>");

document.write("<hr style='margin: 50px 0;'>");

// while 循环
/*
    while (循环条件) {
        循环体
    }
    如果满足循环条件, 就会执行循环体, 如果不满足条件, 会结束while循环
*/

// 求1-100的和
var i = 1, sum = 0;
while (i < 101) {
    sum += i;
    i++;
}
document.write("sum = " + sum + "<br>");

/*
var j = 1, sum1 = 0;
for (; j < 101; ) {
    sum1 += j;
    j++;
}
document.write("sum1 = " + sum1 + "<br>");
*/

document.write("<hr style='margin: 50px 0;'>");
// 打印出来1-100之间 7的倍数, 个位是7, 十位是7的整数
i = 1;
while (i <= 100) {
    i % 7 == 0 || i % 10 == 7 || Math.floor(i / 10) == 7 ? document.write("<span class='blue'>" + i + "</span>") : "";
    // 注意: 千万别忘了给循环条件一个变化, 不然会造成死循环
    i++;
}

document.write("<hr style='margin: 50px 0;'>");

// 辗转相除法求最大公约数
var a = 30, b = 58;
var d = a * b;
while (true) {
    var c = a % b;
    a = b;
    b = c;
    if (b == 0) break;
}
document.write("最大公约数为: " + a + "<br>");
document.write("最小公倍数为: " + d / a + "<br>");


// do...while循环, 不管条件真假, 先干一次
var x = 5, y = 10, z = 0;
do {
    z = x + y;
} while (x > y);
document.write(z + "<br>");

// for循环一般用于循环次数确定的场景, while和do...while一般用于不确定循环次数的情况, do...while和while的区别在, 前者不管条件真假, 先执行一次循环体

// 数组 (Array)
// 一个包含大量数据的有序集合
// 定义一个数组
var arr = [12, 38, 23, true, 5.6, "hello"];

// 如何访问数组中的内容呢?
// 通过数组名[下标]的形式来访问数组中的成员, 下标从0开始
/*
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
*/

// 遍历数组中的所有值
// 通过 arr.length 可以获得数组元素的个数
console.log(arr.length);
for (var i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "]" + " = " + arr[i]);
}

// 修改数组中的元素
arr[3] = false;
for (var i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "]" + " = " + arr[i]);
}

var aNum = 1;
// 数组中可以存放表达式
var arr2 = [aNum, aNum + 1, aNum + 2];
console.log("\n");
for (var i = 0; i < arr2.length; i++) {
    console.log("arr2[" + i + "]" + " = " + arr2[i]);
}

// 如果数组中的元素没有赋值, 那么该元素为 undefined
var arr3 = [2, ,5];
console.log(arr3.length);
console.log(arr3[1]);

// 最后一个 , 后面不算内容
var arr4 = [, , ,];
console.log(arr4.length);

// 数组是一个object类型
console.log(typeof arr4);

// 定义一个空数组
var arr5 = [];
arr5[0] = 1;
arr5[1] = 3;


// 产生10个 [50, 80] 的随机数, 并存放到数组中
var arr6 = [];
for (var i = 0; i < 10; i++) {
    var ranNum = Math.floor(Math.random() * (80 - 50 + 1) + 50);
    arr6[i] = ranNum;
}


for (var i = 0; i < arr6.length; i++) {
    console.log("arr6[" + i + "]" + " = " + arr6[i]);
}


// 求数组中的最大值, 最小值, 以及所有元素的和
var arr7 = [4, 6, 3, 2, 9, 8, 7];
var maxNum = arr7[0], minNum = arr7[0], sumNum = 0;
for (var i = 0; i < arr7.length; i++) {
    sumNum += arr7[i];

    // 求最大值
    if (maxNum < arr7[i]) {
        maxNum = arr7[i];
    }

    // 求最小值
    if (minNum > arr7[i]) {
        minNum = arr7[i];
    }
}
console.log("最大值: " + maxNum, "最小值: " + minNum, "和: " + sumNum);



var arr8 = [1, 2, 3, 4, 5];
var arr9 = [4, 5, 7, 3, 2];
var arr10 = [];
for (var i = 0; i < arr8.length; i++) {
    // 第一个元素和第一个元素相加
    // arr10[i] = arr8[i] + arr9[i];
    // 第一元素和最后一个元素相加
    arr10[i] = arr8[i] + arr9[arr9.length - i - 1];
    console.log("arr10[" + i + "] = " + arr10[i]);
}







