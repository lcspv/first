// 字符串的常用方法(关于正则的方法后面会讲)
// charCodeAt() 获取字符串中的字符的Unicode编码
var str = "ABCDEF";
var result = str.charCodeAt(0);
console.log(result);


// fromCharCode()
// 把参数对应的字符拼接成一个字符串作为函数的返回值
result = String.fromCharCode(65, 66, 67, 97);
console.log(result);

// charAt()
// 取字符串中的第几个字符
result = str.charAt(1);
console.log(result);

// slice()
result = str.slice(1);
console.log(result);

// 第一个参数是 start, 第二个参数end, 返回的结果包含start但不包含end, 如果只有一个参数, 那么代表从start开始, 一直截取到字符串的末尾
result = str.slice(1, 3);
console.log(result);
// 字符串本身不会有任何变化
console.log(str);

// 字符串最后一个字符的位置是-1, 倒数第二个是-2, 以此类推
result = str.slice(1, -1);
console.log(result);

// substring()
result = str.substring(2, 4);
console.log(result);

// 两个参数, 小值作为start, 大值作为end, 包含开始, 不包含结尾
result = str.substring(4, 2);
console.log(result);

// substr()
// 第一个参数: start 截取的起始位置
// 第二个参数: length 要截取的长度
result = str.substr(3, 3);
console.log(result);


// indexof()
var str2 = "ABCDEFCDGHJK";
result = str2.indexOf("CD");
console.log(result);
// 第一个参数: 要查找的字符串
// 第二个参数: 从哪个位置开始向右查找, 如果第二个参数不写, 默认从0开始
result = str2.indexOf("CD", 4);
console.log(result);

// 若果查找不到, 返回 -1
result = str2.indexOf("BYZ");
console.log(result);

// 从右边向左查找
result = str2.lastIndexOf("CD", 1);
console.log(result);

// concat()
var str3 = "ABC";
result = str3.concat("a", "b", "c", "def", "123");
console.log(result);


// split()
var str4 = "AA BB CC DD EE FF";
// 第一个参数: 分割字符串的子串
// 第二个参数: 控制返回数组的元素的个数
result = str4.split(" ", 2);
console.log(result);

result = str4.split("CC");
console.log(result);

result = str4.split("");
console.log(result);

var str5 = "aBcDeF";
// 全大写
result = str5.toUpperCase();
console.log(result);

// 全小写
result = str5.toLowerCase();
console.log(result);

// 得到一个字符串里面的f都是大写
var aStr = "abcdefsdfjlfjdksl";
// result = aStr.replace(/f/g, "F");
// console.log(result);

var resultArr = aStr.split("");
var result = "";
// 遍历数组
for (var i = 0; i < resultArr.length; i++) {
    // if (resultArr[i] === "f") {
    //     result += "F";
    //     // continue;
    // } else  {
    //     result += resultArr[i];
    // }
    result += resultArr[i] === "f" ? "F" : resultArr[i];
}
console.log(result);


function testString(str1, str2) {
     var index = str1.indexOf(str2);
     var result = "";
     if (index >= 0) {
        var lStr = str1.slice(0, index);
        var rStr = str1.slice(index + 1);
        return result += lStr + str2.toUpperCase() + testString(rStr, str2);
     } else {
        return str1;
     }
}
console.log(testString(aStr, "f"));
console.log(testString(aStr, "a"));












