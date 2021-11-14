const container = document.querySelector(".container");

function generateBars(num = 20) {
  if (num && typeof num !== "number") {
    alert("Argument must be of type number");
  }
  for (let index = 0; index < num; index++) {
    const ramValue = Math.floor(Math.random() * 100);
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${ramValue * 3}px`;
    bar.style.transform = `translateX(${index * 30}px)`;

    const blockLabel = document.createElement("label");
    blockLabel.classList.add("value");
    blockLabel.innerHTML = ramValue;

    bar.appendChild(blockLabel);

    container.appendChild(bar);
  }
}

generateBars(20);
