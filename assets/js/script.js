const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

const changeTab = idx => {
  removeActive();

  tabs[idx].classList.add("tab-active");
  contents[idx].classList.add("content-active");
}

tabs.forEach((tab, idx) => tab.addEventListener("click", () => changeTab(idx)));

function removeActive(){
  const activeContent = document.querySelector(".content-active");
  const activeTab = document.querySelector(".tab-active");

  activeContent.classList.remove("content-active");
  activeTab.classList.remove("tab-active");
}