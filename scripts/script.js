// JavaScript Document

//hamburgermenu
let menuOpenButton = document.querySelector("header menu button");
menuOpenButton.addEventListener("click", openMenu);

function openMenu() {
  let deNav = document.querySelector("header nav");
  deNav.classList.add("is-open");
}

let menuSluitButton = document.querySelector("header nav ul li:first-of-type > button");
menuSluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  let deNav = document.querySelector("header nav");
  deNav.classList.remove("is-open");
}

// header

let searchInput = document.querySelector("input[type='search']");

let mediaQuery = window.matchMedia("(min-width: 75em)");

function showSearch() {
  if (mediaQuery.matches) {
    searchInput.classList.remove("visually-hidden");
  } else {
    searchInput.classList.add("visually-hidden");
  }
}

showSearch();

mediaQuery.addEventListener("change", showSearch);

// main
let openMain = window.matchMedia("(min-width: 37.5em)");

  function toggleMainDetails(openMain) {
    let details = document.querySelectorAll("main section:last-of-type ul li details");

    details.forEach(d => {
      if (openMain.matches) {
        d.setAttribute("open", "");
      } else {
        d.removeAttribute("open");
      }
    });
  }

  toggleMainDetails(openMain);

  openMain.addEventListener("change", toggleFooterDetails);

// footer 

let open = window.matchMedia("(min-width: 60em)");

  function toggleFooterDetails(openen) {
    let details = document.querySelectorAll("footer section:first-of-type details");

    details.forEach(d => {
      if (openen.matches) {
        d.setAttribute("open", "");
      } else {
        d.removeAttribute("open");
      }
    });
  }

  toggleFooterDetails(open);

  open.addEventListener("change", toggleFooterDetails);