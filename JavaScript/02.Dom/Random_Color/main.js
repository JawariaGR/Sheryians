let box = document.querySelector("#box");
let btn = document.querySelector("button");

btn.addEventListener("click",() => {
  c1 = Math.floor(Math.random()*256);
  c2 = Math.floor(Math.random()*256);
  c3 = Math.floor(Math.random()*256);
  box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
});
