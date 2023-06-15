let cardFiles = document.querySelectorAll(".card-file");
let fileInputs = document.querySelectorAll(".file-input");
let uploadedAreas = document.querySelectorAll(".uploaded-area");
let fileImg = document.querySelectorAll(".file-img");

// 为每个卡片绑定点击事件
cardFiles.forEach((cardFile, index) => {
  cardFile.addEventListener("click", () => {
    fileInputs[index].click();
  });
});

// 监听文件选择事件
fileInputs.forEach((fileInput, index) => {
  fileInput.onchange = ({ target }) => {
    let success = true;
    let file = target.files[0];
    if (file) {
      let fileName = file.name;
      if (fileName.length >= 11) {
        let splitName = fileName.split(".");
        splitName = splitName[0].substring(0, 11) + "... ." + splitName[1];
        fileName = splitName;
      }

      let fileSize = file.size;
      let fileSizeString = "";

      if (fileSize < 1024) {
        fileSizeString = fileSize + " B"; // 小于1KB，以字节为单位
      } else if (fileSize < 1024 * 1024) {
        fileSizeString = (fileSize / 1024).toFixed(2) + " KB"; // 小于1MB，以KB为单位，保留两位小数
      } else if (fileSize < 30 * 1024 * 1024) {
        fileSizeString = (fileSize / (1024 * 1024)).toFixed(2) + " MB"; // 小于30MB，以MB为单位，保留两位小数
      } else {
        fileName = "文件大小超过30MB";
        success = false;
      }

      // 检查文件格式和文件名
      let allowedFormats = ["jpg", "jpeg"];
      let fileFormat = fileName.split(".").pop().toLowerCase();

      if (!allowedFormats.includes(fileFormat)) {
        fileName = "上传文件格式限制为 JPG、JPEG";
        success = false;
      }

      let imageURL = URL.createObjectURL(file); // 获取图像的 URL

      uploadFile(fileName, fileSizeString, imageURL, index, success);
    }
  };
});

function uploadFile(name, size, image, index, success) {
  let uploadedHTML;
  if (success) {
    uploadedHTML = `<li class="row" style="background: #e9f0ff;">
                        <div class="col-2"><i class="fas fa-file-alt"></i></div>
                        <div class="col-10">
                          <div class="content">
                            <div class="details">
                              <span class="name">${name}．Uploaded</span>
                              <span class="size">${size}</span>
                            </div>
                            <i class="fas fa-check" style="color: #6990f2;"></i>
                          </div>
                        </div>
                      </li>`;
    fileImg[index].src = image;
    fileImg[index].classList.add("d-block");
    fileImg[index].classList.remove("d-none");
  } else {
    uploadedHTML = `<li class="row" style="background: #ff99ba;">
                        <div class="col-12">
                          <div class="content">
                            <div class="details">
                              <span class="name">${name}</span>
                            </div>
                            <i class="fa-solid fa-xmark" style="color: #DC143C;"></i>
                          </div>
                        </div>
                      </li>`;
    fileImg[index].classList.add("d-none");
    fileImg[index].classList.remove("d-block");
  }
  uploadedAreas[index].innerHTML = ""; // 清空对应的 uploadedArea 的内容
  uploadedAreas[index].insertAdjacentHTML("afterbegin", uploadedHTML);
}

// -----------------------------

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

// -----------------------------

const addCard = document.querySelector("#add-card");

addCard.addEventListener("click", function () {
  // 创建新的HTML内容
  var newContent = `
      <div class="row px-3">
        <div class="col-md-6 d-flex justify-content-center">
          <div class="card text-center" style="width: 18rem; cursor: pointer;">
            <div class="card-file card-body d-flex flex-column justify-content-center align-items-center" style="height: 11rem; background: #f6f6f6; flex: unset;">
              <input type="file" class="file-input" hidden />
              <i class="fa-regular fa-hand-pointer mb-2" style="font-size: 3.5em; color: #3b3b3b96"></i>
              <a href="javascript:;" class="btn btn-primary rounded-0 border-0" style="background-color: #3a95ce">上傳財力證明</a>
              <img src="" class="file-img img-fluid position-absolute p-3 d-none" alt="...">
            </div>
            <div class="uploaded-area"></div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="card text-center" style="width: 18rem; cursor: pointer;">
            <div class="card-file card-body d-flex flex-column justify-content-center align-items-center" style="height: 11rem; background: #f6f6f6; flex: unset;">
              <input type="file" class="file-input" hidden />
              <i class="fa-regular fa-hand-pointer mb-2" style="font-size: 3.5em; color: #3b3b3b96"></i>
              <a href="javascript:;" class="btn btn-primary rounded-0 border-0" style="background-color: #3a95ce">上傳財力證明</a>
              <img src="" class="file-img img-fluid position-absolute p-3 d-none" alt="...">
            </div>
            <div class="uploaded-area"></div>
          </div>
        </div>
      </div>
    `;

  // 在指定的元素前插入新的HTML内容
  addCard.insertAdjacentHTML("beforebegin", newContent);

  cardFiles = document.querySelectorAll(".card-file");
  fileInputs = document.querySelectorAll(".file-input");
  uploadedAreas = document.querySelectorAll(".uploaded-area");
  fileImg = document.querySelectorAll(".file-img");

  let lastTwoCardFiles = Array.from(cardFiles).slice(-2);
  let lastTwoFileInputs = Array.from(fileInputs).slice(-2);
  let lastTwoUploadedAreas = Array.from(uploadedAreas).slice(-2);
  let lastTwoFileImg = Array.from(fileImg).slice(-2);

  lastTwoCardFiles.forEach((cardFile, index) => {
    cardFile.addEventListener("click", () => {
      lastTwoFileInputs[index].click();
    });
  });

  lastTwoFileInputs.forEach((fileInput, index) => {
    fileInput.onchange = ({ target }) => {
      let success = true;
      let file = target.files[0];
      if (file) {
        let fileName = file.name;
        if (fileName.length >= 11) {
          let splitName = fileName.split(".");
          splitName = splitName[0].substring(0, 11) + "... ." + splitName[1];
          fileName = splitName;
        }

        let fileSize = file.size;
        let fileSizeString = "";

        if (fileSize < 1024) {
          fileSizeString = fileSize + " B"; // 小于1KB，以字节为单位
        } else if (fileSize < 1024 * 1024) {
          fileSizeString = (fileSize / 1024).toFixed(2) + " KB"; // 小于1MB，以KB为单位，保留两位小数
        } else if (fileSize < 30 * 1024 * 1024) {
          fileSizeString = (fileSize / (1024 * 1024)).toFixed(2) + " MB"; // 小于30MB，以MB为单位，保留两位小数
        } else {
          fileName = "文件大小超过30MB";
          success = false;
        }

        // 检查文件格式和文件名
        let allowedFormats = ["jpg", "jpeg"];
        let fileFormat = fileName.split(".").pop().toLowerCase();

        if (!allowedFormats.includes(fileFormat)) {
          fileName = "上传文件格式限制为 JPG、JPEG";
          success = false;
        }

        let imageURL = URL.createObjectURL(file); // 获取图像的 URL

        NewUploadFile(fileName, fileSizeString, imageURL, index, success);
      }
    };
  });

  function NewUploadFile(name, size, image, index, success) {
    let uploadedHTML;
    if (success) {
      uploadedHTML = `<li class="row" style="background: #e9f0ff;">
      <div class="col-2"><i class="fas fa-file-alt"></i></div>
      <div class="col-10">
        <div class="content">
          <div class="details">
            <span class="name">${name}．Uploaded</span>
            <span class="size">${size}</span>
          </div>
          <i class="fas fa-check" style="color: #6990f2;"></i>
        </div>
      </div>
    </li>`;

      lastTwoFileImg[index].src = image;
      lastTwoFileImg[index].classList.add("d-block");
      lastTwoFileImg[index].classList.remove("d-none");
    } else {
      uploadedHTML = `<li class="row" style="background: #ff99ba;">
                          <div class="col-12">
                            <div class="content">
                              <div class="details">
                                <span class="name">${name}．Uploaded</span>
                              </div>
                              <i class="fas fa-check" style="color: #DC143C;"></i>
                            </div>
                          </div>
                        </li>`;
      lastTwoUploadedAreas[index].innerHTML = ""; // 清空对应的 uploadedArea 的内容
      lastTwoUploadedAreas[index].insertAdjacentHTML(
        "afterbegin",
        uploadedHTML
      );
      lastTwoFileImg[index].classList.add("d-none");
      lastTwoFileImg[index].classList.remove("d-block");
    }

    lastTwoUploadedAreas[index].innerHTML = ""; // 清空对应的 uploadedArea 的内容
    lastTwoUploadedAreas[index].insertAdjacentHTML("afterbegin", uploadedHTML);
  }
});
