// 変数
let num = 60;

// 条件分岐
// 3かつ5の倍数のとき
if (num % 3 == 0 && num % 5 == 0) {
    console.log('3と5の倍数です');
}
// 3の倍数のとき
else if (num % 3 == 0) {
    console.log('3の倍数です');
}
// 5の倍数のとき
else if (num % 5 == 0) {
    console.log('5の倍数です');
}
// それ以外のとき
else {
    console.log(num);
}