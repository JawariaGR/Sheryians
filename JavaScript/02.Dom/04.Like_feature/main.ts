let img: HTMLDivElement = document.querySelector(`img`) as HTMLDivElement;
let icone: HTMLDivElement = document.querySelector(`i`) as HTMLDivElement;

img.addEventListener(`dblclick`, () => {
  icone.style.opacity = "1";
  icone.style.transform = " translate(-50%,-50%) scale(1) rotate(0deg)";

  setTimeout(() => {
    icone.style.transform = "translate(-50%,-300%) scale(0) rotate(60deg)";
  }, 800);

  setTimeout(() => {
    icone.style.opacity = "0";
  }, 1000);

  setTimeout(() => {
    icone.style.transform = "translate(-50%,-50%) scale(0) rotate(60deg)";
  }, 1200);
});
