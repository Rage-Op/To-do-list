let list = document.querySelector(".to-do-bottom ul");
let button = document.querySelector("button");
let text = document.querySelector("Input");
let count = 0;

button.addEventListener("click", () => {
  if (text.value === "") {
    alert("Please enter something first");
  } else if (count >= 6) {
    alert("List limit reached");
  } else {
    let newList = document.createElement("li");
    newList.innerText = text.value;
    list.append(newList);
    console.log(text.value);
    text.value = "";
    console.log(document.querySelectorAll("li"));
    let listItems = document.querySelectorAll("li");
    toRemove(listItems);
    count++;
  }
});

function toRemove(listItems) {
  for (const item of listItems) {
    item.addEventListener("dblclick", (event) => {
      event.target.remove();
      count--;
    });
  }
}
