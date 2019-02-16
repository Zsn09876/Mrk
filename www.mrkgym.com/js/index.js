function task(){
    var show=document.querySelector(
        "#slider>img.show"
    );
    show.className="";
    if(show.nextElementSibling!==null)
        show.nextElementSibling.className="show";
    else
        show.parentNode.children[0].className="show";

}
var n=setInterval(task,3000);
var div=document.getElementById("slider");
div.onmouseover=function(){
    clearInterval(n);
}
div.onmouseout=function(){
    n=setInterval(task,3000);
}
