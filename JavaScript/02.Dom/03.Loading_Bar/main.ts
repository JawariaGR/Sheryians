let inner: HTMLDivElement = document.querySelector(`inner`) as HTMLDivElement;
let h2: HTMLDivElement = document.querySelector(`h2`) as HTMLDivElement;
let btn: HTMLButtonElement = document.querySelector(
  `button`
) as HTMLButtonElement;
let grow: number = 0;

btn.addEventListener(`click`, () => {
  btn.style.opacity = "0.7";
  btn.style.pointerEvents = "none";

  let num = Math.floor(Math.random() * 20);

  let setInt = setInterval(() => {
    grow++;
    inner.innerHTML = "";
    inner.style.width = `${grow}%`;

    h2.innerHTML = `${grow}%`;
  }, num * 10);

  setTimeout(() => {
    clearInterval(setInt);
    btn.innerHTML = "Downloaded";
  }, num * 1000);
});
