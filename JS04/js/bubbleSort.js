// 二维数组
var arr1 = [1, 2, 3, 8, 10];
var arr2 = [4, 5, 6, 6, 3, 2];
var arr3 = [7, 8, 9, 11, 23, 56, 78];
// var arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
var arr = [arr1, arr2, arr3];
// console.log(arr[1][1]);
document.write(arr[1][1] + "<br>");
// 遍历二维数组中的每一个成员下的每一个数据
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        document.write(arr[i][j] + "\t");
    }
    document.write("<br>");
}
document.write("<hr>");


// 交换数组中第一个数和最后一个数, 第二个数和倒数第二个数。。。第n个数和倒数第n个数的值
var arr4 = [3, 5, 9, 20, 15, 63, 78];
// 交换的次数
var n = Math.floor(arr4.length / 2);
for (var i = 0; i < n; i++) {
    var temp = arr4[i];
    arr4[i] = arr4[arr4.length - 1 - i];
    arr4[arr4.length - 1 - i] = temp;
}
// 遍历数组
for (var i = 0; i < arr4.length; i++) {
    document.write(arr4[i] + "\t");
}
document.write("<hr>");



// 冒泡排序
var arr5 = [6, 5, 4, 3, 2, 1];
// 第一趟, 比较5次
for (var i = 0; i < arr5.length - 1; i++) {
    if (arr5[i] > arr5[i+1]) {
        var temp = arr5[i];
        arr5[i] = arr5[i+1];
        arr5[i+1] = temp;
    }
}
// 遍历数组
document.write("<hr>");

for (var i = 0; i < arr5.length; i++) {
    document.write(arr5[i] + "\t");
}


document.write("<hr>");


// 第二趟, 比较4次
for (var i = 0; i < arr5.length - 1 - 1; i++) {
    if (arr5[i] > arr5[i+1]) {
        var temp = arr5[i];
        arr5[i] = arr5[i+1];
        arr5[i+1] = temp;
    }
}
// 遍历数组
document.write("<hr>");

for (var i = 0; i < arr5.length; i++) {
    document.write(arr5[i] + "\t");
}
document.write("<hr>");


// 第三趟, 比较3次
for (var i = 0; i < arr5.length - 1 - 2; i++) {
    if (arr5[i] > arr5[i+1]) {
        var temp = arr5[i];
        arr5[i] = arr5[i+1];
        arr5[i+1] = temp;
    }
}
// 遍历数组
document.write("<hr>");

for (var i = 0; i < arr5.length; i++) {
    document.write(arr5[i] + "\t");
}
document.write("<hr>");


// 第四趟, 比较2次
for (var i = 0; i < arr5.length - 1 - 3; i++) {
    if (arr5[i] > arr5[i+1]) {
        var temp = arr5[i];
        arr5[i] = arr5[i+1];
        arr5[i+1] = temp;
    }
}
// 遍历数组
document.write("<hr>");

for (var i = 0; i < arr5.length; i++) {
    document.write(arr5[i] + "\t");
}
document.write("<hr>");

// 第五趟, 比较1次
for (var i = 0; i < arr5.length - 1 - 3; i++) {
    if (arr5[i] > arr5[i+1]) {
        var temp = arr5[i];
        arr5[i] = arr5[i+1];
        arr5[i+1] = temp;
    }
}
// 遍历数组
document.write("<hr>");

for (var i = 0; i < arr5.length; i++) {
    document.write(arr5[i] + "\t");
}
document.write("<hr>");



var arr6 = [22, 25, 33, 45, 56, 12, 8, 6, 3, 1, 90];
var num = arr6.length;
// 外层循环控制比较的趟数
for (var i = 0; i < num - 1; i++) {
    // 内层循环控制每趟比较的次数

    for (var j = 0; j < num - 1 - i; j++) {
        if (arr6[j] > arr6[j+1]) {
            var temp = arr6[j];
            arr6[j] = arr6[j+1];
            arr6[j+1] = temp;
        }
    }

}
// 遍历数组
for (var i = 0; i < num; i++) {
    document.write(arr6[i] + "\t");
}
document.write("<br>");



// 冒泡的优化
var arr7 = [9, 1, 2, 3, 4, 5, 6, 7, 8];
var n = arr7.length;
// 假设没有排序好
var flag = true;
for (var i = 0; flag && i < n - 1; i++) {
    // 每趟比较前将flag置为false
    flag = false;
    for (var j = 0; j < n - 1 - i; j++) {

        if (arr7[j] > arr7[j+1]) {
            var temp = arr7[j];
            arr7[j] = arr7[j+1];
            arr7[j+1] = temp;
            flag = true;
        }
    }
}



// printHello();

function printHi() {
    document.write("<p>hi</p>");
}














