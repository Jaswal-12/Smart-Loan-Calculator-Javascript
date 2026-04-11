 const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const title = document.querySelector(".title");
const resetBtn = document.querySelector(".reset");
const body = document.querySelector("body");

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

btn1.addEventListener('click', () => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    
    // use background instead of backgroundColor
    body.style.background = random;
});

btn2.addEventListener('click', () => {
    title.style.fontSize = "90px";
});

resetBtn.addEventListener('click', () => {
    title.style.fontSize = "";
    
    // reset to original gradient
    body.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
});