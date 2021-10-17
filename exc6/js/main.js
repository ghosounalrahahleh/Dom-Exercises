let div=document.getElementById('p1_text');
let showLink=document.getElementById("p1_show");
let hideLink=document.querySelector('#p1_text p a');

let div2=document.getElementById('p2_text');
let showLink2=document.getElementById("p2_show");
let hideLink2=document.querySelector('#p2_text p a');

let div3=document.getElementById('p3_text');
let showLink3=document.getElementById("p3_show");
let hideLink3=document.querySelector('#p3_text p a');

div.style.display='none';
div2.style.display='none';
div3.style.display='none';


hideLink.onclick=function(){
    div.style.display='none';
    showLink.style.display='block';

}
showLink.onclick=function(){
    div.style.display='block';
    showLink.style.display='none';

}

hideLink2.onclick=function(){
    div2.style.display='none';
    showLink2.style.display='block';

}
showLink2.onclick=function(){
    div2.style.display='block';
    showLink2.style.display='none';

}
hideLink3.onclick=function(){
    div3.style.display='none';
    showLink3.style.display='block';

}
showLink3.onclick=function(){
    div3.style.display='block';
    showLink3.style.display='none';

}