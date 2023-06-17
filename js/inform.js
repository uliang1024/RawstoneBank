const openClose1 = document.querySelector("#open-close1");
const openClose2 = document.querySelector("#open-close2");
const openClose3 = document.querySelector("#open-close3");
const openClose4 = document.querySelector("#open-close4");
const openClose5 = document.querySelector("#open-close5");

const hideArea1 = document.querySelector("#hide_area_1");
const hideArea2 = document.querySelector("#hide_area_2");
const hideArea3 = document.querySelector("#hide_area_3");
const hideArea4 = document.querySelector("#hide_area_4");
const hideArea5 = document.querySelector("#hide_area_5");

const openCloseIcon1 = document.querySelector("#open-close1 #plusMinus1");
const openCloseIcon2 = document.querySelector("#open-close2 #plusMinus2");
const openCloseIcon3 = document.querySelector("#open-close3 #plusMinus3");
const openCloseIcon4 = document.querySelector("#open-close4 #plusMinus4");
const openCloseIcon5 = document.querySelector("#open-close5 #plusMinus5");

openClose1.addEventListener("click", function () {
  if (hideArea1.classList.contains("show")) {
    hideArea1.classList.remove("show");
    openCloseIcon1.classList.remove("fa-minus");
    openCloseIcon1.classList.add("fa-plus");
  } else {
    hideArea1.classList.add("show");
    openCloseIcon1.classList.add("fa-minus");
    openCloseIcon1.classList.remove("fa-plus");
  }
});

openClose2.addEventListener("click", function () {
  if (hideArea2.classList.contains("show")) {
    hideArea2.classList.remove("show");
    openCloseIcon2.classList.remove("fa-minus");
    openCloseIcon2.classList.add("fa-plus");
  } else {
    hideArea2.classList.add("show");
    openCloseIcon2.classList.add("fa-minus");
    openCloseIcon2.classList.remove("fa-plus");
  }
});

openClose3.addEventListener("click", function () {
  if (hideArea3.classList.contains("show")) {
    hideArea3.classList.remove("show");
    openCloseIcon3.classList.remove("fa-minus");
    openCloseIcon3.classList.add("fa-plus");
  } else {
    hideArea3.classList.add("show");
    openCloseIcon3.classList.add("fa-minus");
    openCloseIcon3.classList.remove("fa-plus");
  }
});

openClose4.addEventListener("click", function () {
  if (hideArea4.classList.contains("show")) {
    hideArea4.classList.remove("show");
    openCloseIcon4.classList.remove("fa-minus");
    openCloseIcon4.classList.add("fa-plus");
  } else {
    hideArea4.classList.add("show");
    openCloseIcon4.classList.add("fa-minus");
    openCloseIcon4.classList.remove("fa-plus");
  }
});

openClose5.addEventListener("click", function () {
  if (hideArea5.classList.contains("show")) {
    hideArea5.classList.remove("show");
    openCloseIcon5.classList.remove("fa-minus");
    openCloseIcon5.classList.add("fa-plus");
  } else {
    hideArea5.classList.add("show");
    openCloseIcon5.classList.add("fa-minus");
    openCloseIcon5.classList.remove("fa-plus");
  }
});

// const hideArea2 = document.querySelector('#hide_area_2');
