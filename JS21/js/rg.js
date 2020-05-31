!function () {

    // 判断字符串中是否有数字? 是否有大写字母? 是否有小写字母? 如何去掉所有数字?
    var str = "2384ohfy83924q9hb98723f89ffn32";
    // 建议不要这样写
    var hasNum = hasL = hasU = false;
    var arr1 = [];
    var arr = str.split("");
    // 判断是否有数字
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= "0" && arr[i] <= "9") {
            hasNum = true;
            break;
        }
    }
    console.log(hasNum);
    // 判断是否有小写字母
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= "a" && arr[i] <= "z") {
            hasL = true;
            break;
        }
    }
    console.log(hasL);
    // 判断是否有大写字母
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= "A" && arr[i] <= "Z") {
            hasU = true;
            break;
        }
    }
    console.log(hasU);

    // 去掉数字
    for (var i = 0; i < arr.length; i++) {
        // 如果不是数字
        if (!(arr[i] >= "0" && arr[i] <= "9")) {
            arr1.push(arr[i]);
        }
    }
    console.log(arr1.join(""));

    var arr2 = [1, 3, 5, 7, 9];
    var index = 0;
    // arr2[0] = arr2[1] * 3
    arr2[index++] = arr2[index] * 3;
    console.log(arr2);

    // 通过正则表达式来解决上述问题
    var reg = /\d+/;
    console.log(reg.test(str));
    var reg1 = /[a-z]/;
    console.log(reg1.test(str));
    var reg2 = /[A-Z]/;
    console.log(reg2.test(str));

    var str1 = str.replace(/\d+/g, "");
    console.log(str1);









}();