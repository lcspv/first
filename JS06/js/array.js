// 数组常用方法
// join()
var arr = [1, 2, 3];
// 把数组中的每一个元素进行字符串拼接, 该方法的参数作为连接每一个元素的字符, 如果不写任何参数, 那么元素直接通过 逗号 进行连接 (注意: 不管数组中的元素是数字还是字符串, 都会进行字符串连接)
// var result = arr.join();
var result = arr.join("-");
console.log(result);
console.log(arr);

var arr2 = [,,,];
result = arr2.join("abc");
console.log(result);

function repeatingString(str, n) {
    var arr = [];
    arr.length = n + 1;
    return arr.join(str);
    // return new Array(n + 1).join(str);
}
result = repeatingString("Hi", 5);
console.log(result);

// 删除数组中的最后一个元素
var arr3 = ["a", "b", "c", "d", "e"];
// arr3.length = arr3.length - 1;

// pop()删除数组的最后一个元素, 并返回删除的元素
var result = arr3.pop();
console.log(arr3);
console.log(result);

// 在数组的末尾添加一个元素, 该方法返回数组的长度
result = arr3.push("waige");
console.log(arr3);
console.log(result);

// 删除数组的第一个元素
result = arr3.shift();
console.log(arr3);
console.log(result);

// 给数组在首位置添加一个元素
result = arr3.unshift("waige");
console.log(arr3);
console.log(result);

// sort()
// 不管数组中的元素是什么, 都会转化成字符串进行比较
var arr4 = [13, 1, 3, 2, 22, 35];
arr4.sort();
console.log(arr4);

// 函数作为参数
function compare(a, b) {
    // 升序排列
    // return a - b;
    // 降序排列
    return b - a;
}
arr4.sort(compare);
console.log(arr4);

// 将数组中的元素反向排列
arr4.reverse();
console.log(arr4);

// concat() 拼接
result = arr4.concat(66, 88, [99, 100]);
console.log(result);

// slice()
var arr5 = [1, 3, 5, 7, 9, 11];
result = arr5.slice(1);
console.log(result);
result = arr5.slice(1, 4);
console.log(result);
result = arr5.slice(1, -1);
console.log(result);

// splice(), 可以插入, 删除, 修改
var arr6 = [1, 2, 3, 4, 5, 6];
// var removedArr = arr6.splice(0, 2);
// console.log(arr6);
// console.log(removedArr);

// 第一个参数: start
// 第二个参数: 要删除的元素的个数
// 后面的参数: 要插入的元素
var removedArr2 = arr6.splice(1, 2, 9, 10, 11, 12, 13);
console.log(arr6);
console.log(removedArr2);

var removedArr3 = arr6.splice(0, 0, "a");
console.log(removedArr3);
console.log(arr6);

// indexof(), lastIndexOf
var arr7 = [3, 5, 7, 9, 3, 11];
console.log(arr7.indexOf(3));
console.log(arr7.lastIndexOf(3));
console.log(arr7.indexOf(3, 2));
console.log(arr7.lastIndexOf(3, -1));

// forEach(), 遍历数组中的每一个元素
var arr8 = [2, 4, 6, 8, 10];
// callback中的第一个参数为数组中的元素, 第二个参数为元素所在下标, 第三个参数为数组本身
arr8.forEach(function (x, index, a) {
   console.log(x + "|" + index + "|" + (a === arr8));
});

// map()
var arr9 = [1, 2, 3, 4, 5, 6];
var arr10 = arr9.map(function (item, index) {
    // console.log(item, index);
    return item * item;
});
console.log(arr10);

// filter() 过滤
var arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr12 = arr11.filter(function (x, index, a) {
    return x >= 5;
});
console.log(arr12);


// every()
var arr13 = [1, 2, 3, 4, 5, 6];
var result = arr13.every(function (x, index) {
    // 当所有元素都满足条件的时候才返回true(每个回调函数都返回true的时候, 结果才为true)
    return x < 8;
});
console.log(result);

// some()
var arr15 = [1, 2, 3, 4, 5, 6];
result = arr15.some(function (x, index) {
    // 回调函数中只要有一个结果为true, 结果就为true
    return x == 3;
});
console.log(result);


// reduce(), 从左向右迭代
var arr16 = [1, 2, 3, 4, 5];
var sum = arr16.reduce(function (pre, cur, index, arr) {
    // 从数组的第二个元素开始, 上一次回调函数的返回值会赋值给pre参数
    console.log(pre, cur, index);
    return pre + cur;
});
console.log(sum);

// reduceRight() 从右向左迭代
var sum = arr16.reduceRight(function (pre, cur, index, arr) {
    console.log(pre, cur, index);
    return pre + cur;
});
console.log(sum);






























