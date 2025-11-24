let main: HTMLDivElement = document.querySelector(`main`) as HTMLDivElement;
let btn: HTMLButtonElement = document.getElementById(
  `btn`
) as HTMLButtonElement;

btn.addEventListener(`click`, () => {
  let div: HTMLDivElement = document.createElement(`div`) as HTMLDivElement;
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let scla = Math.floor(Math.random() * 361);
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  div.style.height = "100px";
  div.style.width = "100px";
  div.style.borderRadius = "3px";
  div.style.position = "absolute";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  div.style.top = x + "%";
  div.style.left = y + "%";
  div.style.rotate = scla + "deg";
  main.appendChild(div);
});
