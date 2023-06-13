const addCard = document.querySelector("#add-card");

addCard.addEventListener("click", function () {
  // 创建新的HTML内容
  var newContent = `
      <div class="row px-3">
        <div class="col-md-6 d-flex justify-content-center">
          <div class="card text-center" style="width: 18rem; height: 11rem; cursor: pointer;">
            <div class="card-body d-flex flex-column justify-content-center align-items-center" style="background: #f6f6f6">
              <i class="fa-regular fa-hand-pointer mb-2" style="font-size: 3.5em; color: #3b3b3b96"></i>
              <a href="#" class="btn btn-primary rounded-0 border-0" style="background-color: #3a95ce">上傳財力證明</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="card text-center" style="width: 18rem; height: 11rem; cursor: pointer;">
            <div class="card-body d-flex flex-column justify-content-center align-items-center" style="background: #f6f6f6">
              <i class="fa-regular fa-hand-pointer mb-2" style="font-size: 3.5em; color: #3b3b3b96"></i>
              <a href="#" class="btn btn-primary rounded-0 border-0" style="background-color: #3a95ce">上傳財力證明</a>
            </div>
          </div>
        </div>
      </div>
    `;

  // 在指定的元素前插入新的HTML内容
  addCard.insertAdjacentHTML("beforebegin", newContent);
});

const openCloseMoney = document.querySelector("#open-close-money");
const openCloseId = document.querySelector("#open-close-id");
const idBox = document.querySelector("#id-box");
const moneyBox = document.querySelector("#money-box");

const openCloseMoneyIcon = document.querySelector("#open-close-money i");
const openCloseIdIcon = document.querySelector("#open-close-id i");

openCloseId.addEventListener("click", function () {
  if (idBox.classList.contains("show")) {
    idBox.classList.remove("show");
    openCloseIdIcon.classList.remove("fa-minus");
    openCloseIdIcon.classList.add("fa-plus");
  } else {
    idBox.classList.add("show");
    openCloseIdIcon.classList.add("fa-minus");
    openCloseIdIcon.classList.remove("fa-plus");
  }
});

openCloseMoney.addEventListener("click", function () {
  if (moneyBox.classList.contains("show")) {
    moneyBox.classList.remove("show");
    openCloseMoneyIcon.classList.remove("fa-minus");
    openCloseMoneyIcon.classList.add("fa-plus");
  } else {
    moneyBox.classList.add("show");
    openCloseMoneyIcon.classList.add("fa-minus");
    openCloseMoneyIcon.classList.remove("fa-plus");
  }
});
