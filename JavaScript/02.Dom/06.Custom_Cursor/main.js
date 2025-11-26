let img = document.querySelector(`img`);
let body = document.body;
body.addEventListener(`mousemove`, (event) => {
    img.style.left = event.clientX + "px";
    img.style.top = event.clientY + "px";
});
export {};
