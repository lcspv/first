// 声明在函数外部的变量叫做全局变量, 声明在函数内部的变量叫做局部变量, 局部变量只能在声明的作用域(scope)下使用
var a = 10;
function func1() {
    console.log(a);
}
func1();

var b = "global";
function func2() {
    var b = "local";
    // 会先查找该作用域下有没有变量b, 如果有就使用该作用域下的b, 否则继续向上查找
    console.log(b);
}
func2();
console.log(b);


// 函数的声明和定义都会被提到该作用域的最顶部
func3();

function func3() {
    console.log(6666);
}

// 变量的声明会提前, 但是定义不会提前
console.log(x);
var x = 10;


var l = "abc";
function func4() {

    // 这里面的l操作的是该作用域下声明的l, 不是全局作用域下的l
    l = "aoe";
    var l;
    console.log(l);
}
func4();
console.log(l);

for (var i = 0; i < 6; i++) {

}
console.log(i);







