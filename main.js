var in1=document.getElementById("in1")
var btn1=document.getElementById("btn1")
var h11=document.getElementById("h11")

button.onclick=function(){
      text.innerHTMl=input.value;
}

var in2=document.getElementById("in2")
var in3=document.getElementById("in3")
var btn2=document.querySelector("btn2")
var text=document.querySelector("answer")

btn2.addEventListener('click',function(){
  answer.innerHTMl= parseInt(in2.value)+parseInt(in3.value);
})                                         

var text1="sup";
var resultati=text1.search(/digital school/);
document.getElementById("result1").innerHTML=resultati;