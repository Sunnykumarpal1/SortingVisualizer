let bubble = document.querySelector(".bubble");

async function bubbleSort() {
  let bars = document.querySelectorAll(".child-bar");
  console.log(bars);
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      bars[j].style.background = "blue";
      bars[j + 1].style.background = "blue";
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        await wait(delay);
        swap(bars[j], bars[j + 1]);
      }
      bars[j].style.background = "cyan";
      bars[j + 1].style.background = "cyan";
    }
    bars[bars.length - i - 1].style.background = "green";
  }
  bars[0].style.background = "green";
}
bubble.addEventListener("click", async () => {
  disable();
  await bubbleSort();
  enable();
});
