const hamburger=document.querySelector(".hamburger")
hamburger.addEventListener('click',()=>{
const nvbr=document.getElementById('nvbr');

hamburger.classList.toggle('h');
if (hamburger.classList.value ==='hamburger h') {

    nvbr.style.marginLeft="0vw"
}
else {
    nvbr.style.marginLeft="-35vw"
    
}
})