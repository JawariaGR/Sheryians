let main: HTMLDivElement = document.querySelector(`main`) as HTMLDivElement;
let icone: HTMLDivElement = document.querySelector(`i`) as HTMLDivElement;

main.addEventListener(`click`, () => {
  icone.style.opacity = "1";
  icone.style.transform = " translate(-10%,-10%) scale(1) rotate(0deg)";
  // icone.style.top ="50"

  setTimeout(() => {
    icone.style.opacity = "0";
    icone.style.transform = "translate(-300%,50%) scale(0) rotate(-60deg)";
  }, 1000);
});
