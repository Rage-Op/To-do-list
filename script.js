let list = document.querySelector(".to-do-bottom ul");
let button = document.querySelector("button");
let text = document.querySelector("Input");
let count = 0;
let data = [];

window.addEventListener("load", function () {
  console.log("Window has loaded");
  const storedData = localStorage.getItem("userData");
  if (storedData) {
    data = JSON.parse(storedData);
    count = data.length;
    renderList();
  }
});

button.addEventListener("click", () => {
  event.preventDefault();
  if (text.value === "") {
    alert("Please enter something first");
  } else if (count >= 6) {
    alert("List limit reached");
  } else {
    data.push(text.value);
    localStorage.setItem("userData", JSON.stringify(data));
    renderList();
    text.value = "";
    count++;
  }
});

function renderList() {
  list.innerHTML = "";
  data.forEach((item, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.addEventListener("dblclick", () => {
      data.splice(index, 1);
      localStorage.setItem("userData", JSON.stringify(data));
      renderList();
      count--;
    });
    list.appendChild(listItem);
  });
}
