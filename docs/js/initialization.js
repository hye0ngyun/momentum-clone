const elInitailBtn = document.createElement("button");
elInitailBtn.innerText = "↩";
elInitailBtn.setAttribute("id", "initial-btn");
elInitailBtn.setAttribute("title", "initial button");
elInitailBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
document.querySelector("#main-wrap").append(elInitailBtn);
