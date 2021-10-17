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
    var deleteBtn=document.createElement('button');
    deleteBtn.setAttribute( "class","delete");
    deleteBtn.innerHTML="Remove the song";
    newSong.append(deleteBtn);
    deleteBtn.style.marginLeft="85%";
    console.log(deleteBtn);
    deleteBtn.onclick=function(){
        newSong.remove();
    }

}}


