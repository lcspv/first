// 正则表达式 Regular expression, 也叫规则表达式
// 描述了匹配字符串的规则(模式), 可以检查字符串中是否包含某子串, 也可以替换字符串中符合规则的文本, 也可以去除字符串中符合规则的文本

// 正则表达式中的两种字符
// 普通字符: 0-9, A-z等等
// 元字符: 具有特殊含义的字符, 可以规定其前导字符(位于元字符前面的字符)出现的模式, 比如: ?, *, +, 等等


// 创建正则表达式
// var 变量名 = new RegExp(参数1, 参数2);
/*
*  参数1: pattern, 模式, 匹配的规则, 必须是字符串
*  参数2: attributes, 属性, 可选择, i, g, m
* */

// i (ignorCase): 忽略大小写
// g (globle): 全局搜索
// m (multiple): 多行匹配
var reg = new RegExp("ab", 'igm');


// 正则表达式的方法
// test(字符串)
// 返回一个布尔值, 用来判断字符串是否满足正则表达式的规则, 如果返回值为true, 满足规则, 如果为false 不满足规则
console.log(reg.test("abcd"));
console.log(reg.test("bcab"));
console.log(reg.test("babc"));
console.log(reg.test("bbaa"));

// 创建正则表达式的第二中方式
// var 变量名 = /参数1/参数2
var reg2 = /.jpg/;
console.log(reg2.test("img1.jpg"));
console.log(reg2.test("img2.png"));

// 特殊字符
/*

    \n: 换行
    \t: 水平制表符 tab键
    \v: 垂直制
             表符
    \r: 回车
    \d: 数字
    \D: 非数字
    \w: 普通字符 (数字, 字母, 下划线) 63个字符
    \W: 非 (数字, 字母, 下划线)
    \s: 空白符 (空格, 回车, 制表符)
    \S: 非空白符
    . : 除 \n之外的字符
    []: 用于匹配括号中出现的字符
    [^]: 用于匹配括号中未出现的其他字符

**/

var str3 = "\t\t\thello, \n wor \v ld!";
var reg3 = /\n/;
console.log(reg3.test(str3));
console.log(str3);
var reg4 = /\t/;
console.log(reg4.test(str3));
var reg5 = /\v/;
console.log(reg5.test(str3));

// 是否包含数字
var reg6 = /\d/;
var str6 = "safdjhlkjhoe8jkaskjdfh";
console.log(reg6.test(str6));

// 是否包含非数字
var str7 = "328 8734107";
var reg7 = /\D/;
console.log(reg7.test(str7));

var reg8 = /\s/;
var str8 = "\nfjsk";
console.log(reg8.test(str8));

var str9 = "    \n  \t";
var reg9 = /\S/;
console.log(reg9.test(str9));

var str10 = "\n\n\n\n";
var reg10 = /./;
console.log(reg10.test(str10));

// 有a 或者 b 或者c
var reg11 = /[abc]/;
var str11 = "aaaaab90923j";
console.log(reg11.test(str11));

// abc意外的字符, 不能出现a 或者 b 或者c
var reg12 = /[^abc]/;
var str12 = "aabbcccbabbbabcbabc";
console.log(reg12.test(str12));


// 连字符 -
// [0-9], 代表 0-9的字符
// [a-z], 代表小写字母
// [A-Z], 大写字母
// [A-z], 所有字母
var reg13 = /[0-9]/;
var str13 = "a0";
console.log(reg13.test(str13));

var aStr = "sdfjh2387AKJ89";
console.log(/\d/.test(aStr));

// \w 相当于 [A-z][0-9][_], 数字字母下划线
var str14 = "-";
var reg14 = /\w/;
console.log(reg14.test(str14));


// exec(str) 方法
// 返回结果 数组, 数组中的第一个元素: 匹配的字符串, index: 该次匹配的字符串的位置, input: 方法中传入的参数字符串
// regObject 的 lastIndex: 下次匹配字符串的开始的检索位置
var str15 = "I love you, and you love me!";
var reg15 = /love/g;
var result = reg15.exec(str15);
// console.log(reg15.test(str15));
console.log(result, reg15.lastIndex);
var result2 = reg15.exec(str15);
console.log(result2, reg15.lastIndex);
console.log(typeof result2);
var result3 = reg15.exec(str15);
console.log(result3);
// console.log(result2 instanceof Array);

var testStr = "Long long ago, there was a boy named daqian, he loved another boy named zongming. A A A";
var regA = /a/ig;
var result;
while ((result = regA.exec(testStr)) != null) {
    document.write(result[0] + " index: " + result.index + "<br>");
}


// 字符串方法
// match()
// 参数是正则
// 返回值为一个数组, 存放符合规则的子串
var str16 = "iewqbbkajsfao3bbaksjfobb9efubb";
var reg16 = /bb/g;
result = str16.match(reg16);
console.log(result);


// search()
// 返回匹配的子串在字符串中的位置, 如果没有符合条件的子串, 返回-1
var str17 = "I love you!!! love";
var reg17 = /love/g;
result = str17.search(reg17);
console.log(result);
// result = str17.search(reg17);
// console.log(result);


// split(字符串或者正则)
// 把文本中的数字去掉
var str18 = "dsjf02u803jf0923u0jf02u93092ojf0932h";
var reg18 = /\d/;
var arr = str18.split(reg18);
console.log(arr);
console.log(arr.join(""));

var str19 = "8733274@qq.com";
// \. 代表 .
var reg19 = /[@\.]/;
console.log(str19.split(reg19));

// replace(字符串或正则, 参数2)
// 用参数2字符串替换参数1字符串
var str20 = "aabbccaabbccaabbcc";
var reg20 = /bb/g;
// result = str20.replace('bb', "");
result = str20.replace(reg20, "");
console.log(result);



// 量词
// {n}, 重复出现n次
var str21 = "a8b88c888d8888e8888888888";
var reg21 = /8{4}/g;
console.log(str21.match(reg21));

// {n,} 至少出现n次
// {n, m} 出现 n-m次
reg21 = /8{4,}/g;
console.log(str21.match(reg21));

reg21 = /8{2,4}/g;
console.log(str21.match(reg21));

// +, 相当于 {1,} 至少出现1次
// *, 相当于 {0,} >= 0 次
// ?, 相当于 {0,1} 出现1次或0次


var str22 = "aba1ba234ba3928409bacb";
var reg22 = /a\d*b/g;
console.log(str22.match(reg22));


// 定位符
// ^ 限定在开头出现
// $ 限定在结尾出现
// \b 匹配到单词的左右边界

var str23 = "abceiw923nvlnxyz";
var reg23 = /^abc/g;
console.log(str23.match(reg23));

var str24 = "img/beautifulGirl.jpg";
console.log(/\.jpg$/.test(str24));

var str25 = "moon money momo mo monkey";
// 左边界mo
var reg25 = /\bmo/g;
result = str25.match(reg25);
console.log(result);

// 右边界mo
var reg26 = /mo\b/g;
result = str25.match(reg26);
console.log(result);
console.log(str25.search(reg26));

// 左右边界都是mo, 这样的话只能匹配mo单词
var reg27 = /\bmo\b/g;
result = str25.match(reg27);
console.log(result);


// 分组符 ()
var str28 = "abcabcabcc";
var reg28 = /abc{2}/g;
console.log(str28.match(reg28));
var reg29 = /(abc){2}/g;
console.log(str28.match(reg29));

// |, 或者
var str30 = "Hello, hello, hELlo";
var reg30 = /(H|h)ello/g;
console.log(str30.match(reg30));

// 转义字符
// 如果要匹配以下字符必须加上转义字符
// ., $, {, }, (, ), |, +, ?, *, ^, /, \, -, [, ]
var reg31 = /^http:\/\//g;
var str31 = "http://www.waige.com";
console.log(reg31.test(str31));

// 只能是123
var reg32 = /^123$/g;
var str32 = "123";
console.log(reg32.test(str32));

