// alert("ASd");
const showBtn = document.getElementById("showBtn");
const listBox = document.getElementById("list");
const linkBox = document.querySelectorAll(".navigation-list-item-link");

showBtn.className = "no_active";
listBox.className = "no_active_list";

showBtn.addEventListener("click", () => {
  if (showBtn.className.includes("no_active")) {
    showBtn.className = "active";
    listBox.className = "active_list";
    linkBox.className = "no_active_link";
  } else {
    showBtn.className = "no_active";
    listBox.className = "no_active_list";
  }
});

linkBox.forEach((a) => {
  a.addEventListener("click", () => {
    listBox.className = "no_active_list";
    showBtn.className = "no_active";
  });
});
