var arr = [];
for (var i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * (81 - 61 + 1) + 61);
}

var n = arr.length;
var flag = true;
for (var i = 0; flag && i < n - 1; i++) {
    flag = false;
    for (var j = 0; j < n - 1 - i; j++) {

        if (arr[j] > arr[j+1]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            flag = true;
        }
    }
}
for (var i  = 0; i < n; i++) {
    document.write(arr[i] + " ");
}
