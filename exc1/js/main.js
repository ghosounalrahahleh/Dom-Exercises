
var text = document.getElementById('mydiv')

// first way 
/*text.addEventListener("mouseout", function() {
    text.textContent = "Hello world"
  })
  
  text.addEventListener("mouseover", function() {
    text.textContent = "Can I help you?"
  })

*/

// second way
text.onmouseenter=function(){
  text.innerHTML="can I help you?";
}
text.onmouseleave=function(){
  text.innerHTML="Hello World!";
}