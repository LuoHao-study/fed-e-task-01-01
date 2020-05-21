//简答题第三题代码
var arr = [12, 34, 32, 89, 4]

const min = Math.min(...arr)
console.log(min)//4

//简答题第九题代码
new Promise(function (resolve, reject) {
  var a = "hello"
  resolve(a)
}).then(function (res) {
  var b = "lagou"
  return res + b
}).then(function (res) {
  var c = "I ❤ U"
  console.log(res + c)
})