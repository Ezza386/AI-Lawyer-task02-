function shuffle(){
    var ul=document.getElementById("root");
for(var i=ul.children.length;i>=0;i--){
ul.appendChild(ul.children[Math.random()*i|0]);
}
}

function sort(){
    var list,i,switchsing,listitems,shouldSwitch;
    list=document.getElementById("myid");
    switching=true;
    while(switching){
        switching=false;
        listitems=list.getElementsByTagName("li");
        for(i=0;i<(listitems.length-1);i++){
            shouldSwitch=false;
            if(listitems[i].innerHTML.toLowerCase()>listitems[i+1].innerHTML.toLowerCase()){
                shouldSwitch=true;
                break;
            }
        }
        listitems[i].parentNode.insertBefore(listitems[i+1],listitems[i]);
        switching=true;
    }

}
function show(){
    document.getElementById("root").style.height="1700px";
    document.getElementById("root").style.display="block";
    document.getElementById("show").style.display="none";

}
function hide(){
    document.getElementById("root").style.height="0px";
    document.getElementById("root").style.display="none";
    document.getElementById("show").style.display="inline";

}
