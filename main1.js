var text="abcdef";
var regex=new RegExp('abc')
console.log(regex.test(text))

var text1="school is cool";
var regex=/school/g;
console.log(text1.match(regex))

var regex=/[abc]/g;
console.log(text1.match(regex1))

var regex2=/[0-9]/g;
console.log(text1.match(regex2))

var regex3=/(top|best|school)/g;
console.log(text1.match(regex3))

