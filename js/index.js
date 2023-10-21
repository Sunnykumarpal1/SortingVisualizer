let ele = document.querySelector("#newArray");
let size = document.getElementById("size");
ele.addEventListener("click", () => {
  enable();
  createArray(size.value);
});

function enable() {
  document.querySelector(".bubble").disabled = false;
  document.querySelector(".insertion").disabled = false;
  document.querySelector(".selection").disabled = false;
  document.querySelector(".merge").disabled = false;
  // document.querySelector(".quick").disabled = false;
  document.querySelector("#size").disabled = false;
  ele.disabled = false;
}

function disable() {
  document.querySelector(".bubble").disabled = true;
  document.querySelector(".insertion").disabled = true;
  document.querySelector(".selection").disabled = true;
  document.querySelector(".merge").disabled = true;
  // document.querySelector(".quick").disabled = true;
  document.querySelector("#size").disabled = true;
  ele.disabled = true;
}

let arr = [];
createArray();

let delay = 260;

let delayElem = document.querySelector("#range");

delayElem.addEventListener("click", () => {
  delay = 320 - parseInt(delayElem.value);
  console.log(delay);
});

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, time);
  });
}

function swap(ele1, ele2) {
  let temp = ele2.style.height;
  ele2.style.height = ele1.style.height;
  ele1.style.height = temp;
}

function createArray(noOfBars = 50) {
  deleteBars();
  arr = [];
  for (let i = 0; i < noOfBars; i++) {
    arr.push(Math.floor(Math.random() * 250) + 1);
  }

  for (let i = 0; i < noOfBars; i++) {
    let bar = document.createElement("div");
    bar.classList.add("child-bar");
    bar.style.height = `${arr[i] * 2}px`;
    let bars = document.getElementById("bars");
    bars.appendChild(bar);
  }
}

function deleteBars() {
  let bar = document.getElementById("bars");
  bar.innerHTML = "";
}

size.addEventListener("input", () => {
  createArray(parseInt(size.value));
});

