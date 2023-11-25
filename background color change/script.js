let body = document.getElementById("bod"),stclrinpt =document.getElementById("color1"),ndclrinpt=document.getElementById("color2");
function changecolor() {
    body.style.background = `linear-gradient(to right, ${stclrinpt.value}, ${ndclrinpt.value})`;
};
setInterval(changecolor, 10);
