const featureArrow = document.getElementById("up-arrow-feature");
const companyArrow = document.getElementById("up-arrow-company");
const featureA = document.getElementById("feature-a");
const companyA = document.getElementById("company-a");
const feature = document.querySelector(".features");
const company = document.querySelector(".company");
const mainContainer = document.querySelector("main");
const navBar = document.querySelector("nav");
const navigation = document.querySelector(".container");
const dropDown = document.querySelector(".drop-down");
const closeMenu = document.querySelector(".cancel-img");

function styleAdded(image, tab, list) {
  if (list.style.display === "none") {
    image.src = "images/icon-arrow-up.svg";
    tab.style.color = "black";
    list.style.display = "block";
  } else {
    image.src = "images/icon-arrow-down.svg";
    tab.style.color = "hsl(0, 0%, 41%)";
    list.style.display = "none";
  }
}

featureA.addEventListener("click", () => {
  styleAdded(featureArrow, featureA, feature);
});

companyA.addEventListener("click", () => {
  styleAdded(companyArrow, companyA, company);
});

dropDown.addEventListener("click", () => {
  navigation.style.display = "block";
  navBar.style.backgroundColor = "hsl(0, 0%, 60%)";
  mainContainer.style.backgroundColor = "hsl(0, 0%, 60%)";
});

closeMenu.addEventListener("click", () => {
  navigation.style.display = "none";
  navBar.style.backgroundColor = "hsl(0, 0%, 98%)";
  mainContainer.style.backgroundColor = "hsl(0, 0%, 98%)";
});
