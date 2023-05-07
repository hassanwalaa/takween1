let barsBotton = document.querySelector(".header .container i ");
let sections = document.querySelectorAll(".header .links li");
let articlesBoxs = document.querySelectorAll(".articles .box ");
let landingPage = document.querySelector(".introduce-seciton");

barsBotton.onclick = () => {
  if (barsBotton.classList.contains("active")) {
    barsBotton.classList.remove("active");
  } else {
    barsBotton.classList.add("active");
  }
};
handleSections();
function handleSections() {
  activeFirst();
  sections.forEach((ele) => {
    ele.onclick = function () {
      filterSections(ele);

      active(ele);
    };
  });
}

function active(element) {
  sections.forEach((ele) => {
    ele.classList.remove("active");
  });
  element.classList.add("active");
  window.open("../../index.html", "_self");
}
function filterSections(element) {
  if (element.classList[0] === "main") {
    articlesBoxs.forEach((ele) => {
      ele.classList.remove("unactive");
    });
    sessionStorage.setItem("section", element.classList[0]);
  } else {
    articlesBoxs.forEach((ele) => {
      if (ele.classList[1] !== element.classList[0]) {
        ele.classList.add("unactive");
      } else {
        ele.classList.remove("unactive");
      }
    });
    sessionStorage.setItem("section", element.classList[0]);
  }
}

function activeFirst() {
  sections.forEach((element) => {
    if (element.classList[0] === sessionStorage.getItem("section")) {
      element.classList.add("active");
      filterSections(element);
    }
  });
}
