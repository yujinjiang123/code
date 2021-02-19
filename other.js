// 方法一
function format(number) {
    return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}
// 方法二
function format1(number) {
    return Intl.NumberFormat().format(number)
}
// 方法三
function format2(number) {
    return number.toLocaleString('en')
}


