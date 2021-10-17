let songName =document.getElementById('songTextInput');
let addButton=document.getElementById('addButton');
let playlist=document.getElementById("playlist");

addButton.onclick=function(){
    if(songName.value!=''){
    var newSong=document.createElement('li');
    newSong.setAttribute( "class","newSong");
    playlist.append(newSong);
    newSong.innerHTML=songName.value;
    songName.value ='';
}}