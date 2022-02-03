const newColor = function () {
  const r = Math.floor(
    Math.random() * 255
  );
  const g = Math.floor(
    Math.random() * 255
  );
  const b = Math.floor(
    Math.random() * 255
  );
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons =
  document.querySelectorAll("button");
const h1 = document.querySelector("h1");

for (let button of buttons) {
  button.addEventListener(
    "click",
    function () {
      button.style.backgroundColor =
        newColor();
      button.style.color = newColor();
      h1.innerText =
        "Button-Insanity-Begins";
    }
  );
}
