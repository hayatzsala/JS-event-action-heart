// Instruction 1
// Grab the h1 heading and create an event that change the color of the text when you resize the window

const text = document.querySelector("#rainbow-txt");
window.addEventListener('resize', () => {
  text.style.color = getARandomColor();
});
// Use this function to get a random hex color
// It returns random hex string like 'fe45aa'
function getARandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}



// Instruction 2
// Create a heart (❤️) that follows the mouse but doesn't go out of the box

const heart = document.querySelector('.heart');
const box = document.querySelector('.box');
box.addEventListener('mousemove',(event)=>{
  heart.style.display= 'block';
  heart.style.top = event.clientY - 20 + 'px';
  heart.style.left = event.clientX - 20 + 'px';
});
box.addEventListener('mouseleave',(event)=>{
  heart.style.display = 'none';
});








// PS: You might run out of time. You can still do it later if you like. But it is a good challenge
