// 在非严格模式下, this在哪个作用域就代表该上下文的对象
// "use strict";
console.log(this);

// 函数也是一个特殊的对象
test.count = 0;
function test() {
    console.log("该函数调用了 " + ++test.count + " 次!");

    // 在严格模式下函数内部的this是undifined
    // 通过该特点, 可以判断js是否是严格模式
    if (this === undefined) {
        console.log("是严格模式!!!");
    } else  {
        console.log("不是严格模式!!!");
    }
    // console.log(this);
}
test();
test();
test();

var person = {
    name: "小强",
    eat: function () {
        // 这里面的this就是person
        console.log(this === person);
        
        function f() {
            // 这里面的this是window(非严格模式下)
            console.log(this);
        }
        f();
    }
};
person.eat();