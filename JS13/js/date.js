var nowDate = new Date();
console.log(nowDate);
console.log(typeof nowDate);

// 转化成字符串
console.log(nowDate.toString());

// 只打印日期
console.log(nowDate.toDateString());
// 只打印时间
console.log(nowDate.toTimeString());

// 本地字符串
console.log(nowDate.toLocaleString());
console.log(nowDate.toLocaleDateString());
console.log(nowDate.toLocaleTimeString());

// 获取年份
console.log(nowDate.getFullYear());

// 获取月份, 从0开始
console.log(nowDate.getMonth() + 1);

// 获取日期
console.log(nowDate.getDate());

// 获取星期几, 一周的第一天是星期天, 从0开始
console.log(nowDate.getDay());

// 获取小时
console.log(nowDate.getHours());

// 获取分钟
console.log(nowDate.getMinutes());

// 获取秒
console.log(nowDate.getSeconds());

// 获取毫秒
console.log(nowDate.getMilliseconds());


var date2 = new Date;
// 设置年月日
date2.setFullYear(2017, 2, 19);
console.log(date2.getDay());

// 设置月日
date2.setMonth(2, 20);
console.log(date2);

// 设置日
date2.setDate(19);
console.log(date2);

// 设置时, 分, 秒, 毫秒
date2.setHours(2, 23, 23, 888);
console.log(date2);
console.log(date2.toTimeString());

// 设置分, 秒, 毫秒
date2.setMinutes(23, 23, 999);

// 设置秒, 毫秒
date2.setSeconds(15, 666);

// 设置毫秒
date2.setMilliseconds(555);

// 时间戳, 距离1970/1/1 的毫秒数
var date3 = new Date;
console.log(date3.getTime());

// 1487236239426
var date4 = new Date(1487236239426);
console.log(date4);

date4.setTime(10000000000000);
console.log(date4);















