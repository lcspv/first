// +, -, !, ()的优先级比较高, 放到函数表达是前面会立即执行函数
!function () {


    // 通过直接量的形式创建对象
    // 对象是包含一系列 名/值(键/值) 对的无序集合
    var person = {
        name: "小强",
        age: 18,
        gender: "男",
        // 如果属性对应的是一个函数, 那么我们把该属性叫做对象的方法
        fight: function () {
            console.log("姓名: " + this.name + " 年龄: " + this.age + " 性别: " + this.gender + "喜欢用便便打架!!!");
        }
    };
    // 通过对象名.属性名的方式访问
    console.log(person.name);
    console.log(person.age);
    console.log(person.gender);
    // 对用对象的方法
    person.fight();

    // 设置属性的值
    person.name = "王五";
    person.fight();

    // 添加属性
    person.height = 183;
    console.log(person);

    // 遍历对象中的所有属性和值
    for (var key in person) {
        console.log(key);
        // 这里只能通过对象名[key] 的方式来访问属性对应的值
        console.log(person[key]);
    }

    // 判断属性是不是对象的自有属性
    console.log(person.hasOwnProperty("height"));

    // 获取对象的所有key值, 返回值为数组
    console.log(Object.keys(person));
    console.log(Object.getOwnPropertyNames(person));

    // 创建一个空对象
    var aDog = {};
    var aCat = new Object();
    // 如果括号中不传任何参数, 也可以这样写
    var aBird = new Object;
    console.log(aDog, aCat, aBird);

    aCat.type = "猫科动物";
    aCat.skillMouse = function () {
        console.log("俺会抓老鼠");
    };
    console.log(aCat);
    aCat.skillMouse();
}();



