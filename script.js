/*alert("enter:ok");*/
function we()
{
  let newNode = document.createElement("textarea");
  newNode.classList.add("from-control");
  newNode.classList.add("wefield");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",5);
  newNode.setAttribute("placeholder","Enter hrer");

 let weOb          = document.getElementById("we");
 let weaddbuttonob = document.getElementById("weaddbutton");
 
 weOb.insertBefore(newNode,weaddbuttonob);
}

function aq()
{
  let newNode = document.createElement("textarea");
  newNode.classList.add("from-control");
  newNode.classList.add("aqfield");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder","Enter here");

 let aqOb          = document.getElementById("aq");
 let aqaddbuttonob = document.getElementById("aqaddbutton");

aqOb.insertBefore(newNode,aqaddbuttonob);
}

function generatecv()
{
let namefield = document.getElementById("namefield").value;
let tname = document.getElementById("tname");
tname.innerHTML= namefield;

document.getElementById("boldname").innerHTML = document.getElementById("namefield").value;
document.getElementById("tphone").innerHTML = document.getElementById  ("contactfield").value;
document.getElementById("temail").innerHTML = document.getElementById  ("emailfield").value;
document.getElementById("taddress").innerHTML = document.getElementById("addressfield").value;
document.getElementById("tpin").innerHTML = document.getElementById    ("pincodfield").value;

document.getElementById("tfb").innerHTML = document.getElementById("fbfield").value; 
document.getElementById("tlin").innerHTML = document.getElementById("linkedinfield").value; 
document.getElementById("tgit").innerHTML = document.getElementById("githubfield").value; 

document.getElementById("tob").innerHTML = document.getElementById("odjecctivefield").value; 
let wet = document.getElementsByClassName("wefield");
let src ="";
for( let e of wet)  
{   src = src + `<li>${e.value}</li>`;   }
document.getElementById("twe").innerHTML = src;

let aqt= document.getElementsByClassName("aqfield");
let sec1= '';
for(e of aqt)   
{  sec1 = sec1 + `<li>${e.value}</li>`;     }
document.getElementById("tAQ").innerHTML = sec1;
}
// document.getElementById("twe").innerHTML = document.getElementById("workfield").value; 
// document.getElementById("tAQ").innerHTML = document.getElementById("acadmicfield").value; 



/* print function */
function printcv()
{
window.print();
}

// document.getElementById('cv-from').style.display='none'
// document.getElementById('cv-template').style.display="block";