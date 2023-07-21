var hoverbox=document.querySelector('.hover');
 console.log(hoverbox.offsetTop);
var offset=hoverbox.offsetTop;
var fixed=(offsetTop)=>{
if (offsetTop>=offset) {
    hoverbox.classList.remove('hoverbox');
    hoverbox.classList.add('fixed');
} else {
    hoverbox.classList.add('hoverbox');
    hoverbox.classList.remove('fixed');
    
}
}
window.onscroll = function (){fixed(window.pageYOffset);}

var toggle=document.querySelector('.less');
toggle.addEventListener('click',(e)=>
{e.preventDefault();
var more=document.querySelector('.c');
more.classList.toggle('h');

 if (more.classList.value==="c h") {
     toggle.innerText="More";
 } else {
    
     toggle.innerText="Less";
 }
})
