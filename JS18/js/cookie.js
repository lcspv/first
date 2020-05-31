// 添加cookie
// cKey: key值(username, password, gender)
// cValue: value值(waige, 123456, male)
// 注意cookie中不要出现中文
var $cookie = {
    addCookie : function (cKey, cValue, cSeconds) {
        document.cookie = cKey + "=" + cValue + "; max-age=" + cSeconds;
    },
    deleteCookie: function (cKey) {
        this.addCookie(cKey, "", -1);
    },
    getCookie: function (cKey) {
        // 用分号分开字符串, 生成一个数组
        var arr = document.cookie.split(';');
        console.log(arr);

        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            // 对str用=号进行分割
            var arr1 = str.split('=');
            // trim()方法可以去掉字符串中的空白符
            if (arr1[0].trim() == cKey) {
                return arr1[1].trim();
            }
        }
        return "";
    },
    
    hasCookie: function (cKey) {
        var arr = document.cookie.split(';');
        console.log(arr);

        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            // 对str用=号进行分割
            var arr1 = str.split('=');
            // trim()方法可以去掉字符串中的空白符
            if (arr1[0].trim() == cKey) {
                return true;
            }
        }
        return false;
        
    },
    clearAll: function () {
        var arr = document.cookie.split(";");
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            var arr1 = str.split('=');
            var cKey = arr1[0].trim();
            this.deleteCookie(cKey);
        }
    }

};

function $(str) {
    var fl = str.charAt(0);
    var arr = str.split(fl);
    if (fl == ".") {
        return document.getElementsByClassName(arr[1]);
    }
    if (fl == "#") {
        return document.getElementById(arr[1]);
    }
    return document.getElementsByTagName(str);
}

