
function factorial(n) 
{ 

 if (n <= 1)
   {
     return 1;
   }
 return n * factorial(n-1);

}
function fn(){
var input = document.querySelector(".input");
var m = document.querySelector(".m");
var result = factorial(input.value);
m.innerText = result;
}