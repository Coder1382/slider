const upbtn = document.querySelector(".up-button");
const downbtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");

const mainslide = document.querySelector(".main-slide");
const slidecount = mainslide.querySelectorAll("div").length;
sidebar.style.top = `-${(slidecount - 1) * 100}vh`;
const container = document.querySelector(".container");

upbtn.addEventListener("click", () => {
  changeslide("up");
});
downbtn.addEventListener("click", () => {
  changeslide("down");
});
document.addEventListener('keydown', e =>{
  if(e.key==='ArrowDown'){
    changeslide('down')
  }
  else if(e.key==='ArrowUp'){
    changeslide('up')
  }
  else if(e.key==='ArrowLeft'){
    changeslide('left')
  }
  else if(e.key==='ArrowRight'){
    changeslide('right')
  }
});
let activeslideindex = 0;
function changeslide(dir) {
  if (dir === "up") {
    activeslideindex++;
    if (activeslideindex === slidecount) {
      activeslideindex = 0;
    }
  } else if (dir === "down") {
    activeslideindex--;
    if (activeslideindex < 0) {
      activeslideindex = slidecount - 1;
    }
  }
  const height = container.clientHeight;
  sidebar.style.transform = `translateY(${height * activeslideindex}px)`;
  mainslide.style.transform = `translateY(-${height * activeslideindex}px)`;
}
