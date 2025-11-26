let img: HTMLDivElement = document.querySelector(`img`) as HTMLDivElement;
let body: HTMLBodyElement = document.body as HTMLBodyElement;

body.addEventListener(`mousemove`, (event) => {
  img.style.left = event.clientX + "px";
  img.style.top = event.clientY + "px";
});
