// alert("hello vivek")

// let headings= document.getElementsByClassName("one");
// console.dir(headings);
// console.log(headings);
// let id= document.getElementById("myid");
// console.log(id)
// id.innerHTML="Hello"

// let paras= document.getElementsByTagName("p");
// console.log(paras)

//QUETY SELECTOR
// let para= document.querySelector("p"); //return the first matching item with 'p'
// console.dir(para)
// let allpara = document.querySelectorAll("p"); // return the all matching items with 'p'(return nodelist)
// console.dir(allpara)
// let para= document.querySelector(".one"); //return the first matching item with 'p' class
// console.dir(para)
// let allpara = document.querySelectorAll(".one"); // return the all matching items with 'p'(return nodelist)
// console.dir(allpara)

// let id = document.querySelector("#myid");
// console.dir(id)
// console.log(id.tagName)
let list = document.querySelector("ol");
console.dir(list);
console.log(list.innerHTML);

let divs = document.querySelectorAll(".div");
console.log(divs); 
/*Outputs==>
 divs[0]
<div class=​"div">​First Div ​</div>​
divs[1]
<div class=​"div">​Second Div​</div>​
divs[2]
<div class=​"div">​Third Div​</div>​
divs[0].innerText=" Hii"
' Hii' 
for( div of divs){
    console.log(div);
}
VM347:2 <div class=​"div">​First Div ​</div>​
VM347:2 <div class=​"div">​Second Div​</div>​
VM347:2 <div class=​"div">​Third Div​</div>​
*/