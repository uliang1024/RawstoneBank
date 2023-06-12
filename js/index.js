// 获取需要点击的链接和需要显示/隐藏的元素
let cardBrand1 = document.querySelector("#card-brand1");
let cardBrand2 = document.querySelector("#card-brand2");
let visa = document.querySelectorAll(".VISA");
let element1 = document.getElementById("carouselExampleIndicators");
let element2 = document.getElementById("carouselExampleIndicators2");
let cardType = document.getElementById("cardType");

// 为第一个链接添加点击事件处理程序
cardBrand1.addEventListener("click", function (event) {
  event.preventDefault(); // 阻止默认链接行为
  // 取消所有被选中的单选框
  clearRadioSelection();
  // 显示第一个元素
  element1.classList.add("active");
  // 隐藏第二个元素
  element2.classList.remove("active");
  // 添加/移除 active 焦点类名
  cardBrand1.classList.add("active");
  cardBrand2.classList.remove("active");
});

// 为第二个链接添加点击事件处理程序
cardBrand2.addEventListener("click", function (event) {
  event.preventDefault(); // 阻止默认链接行为
  // 取消所有被选中的单选框
  clearRadioSelection();
  // 显示第一个元素
  element2.classList.add("active");
  // 隐藏第二个元素
  element1.classList.remove("active");
  // 添加/移除 active 焦点类名
  cardBrand2.classList.add("active");
  cardBrand1.classList.remove("active");
});

// 取消所有被选中的单选框
function clearRadioSelection() {
  visa.forEach((visa) => {
    visa.checked = false;
  });
  // 隐藏 cardType
  cardType.style.display = "none";
}

// --------------------------

// 選取所有單選按鈕元素
const radioButtons = document.querySelectorAll('input[type="radio"]');

// 單選按鈕點擊事件處理函式
function handleRadioButtonClick(event) {
  // 取消其他單選按鈕的選取狀態
  radioButtons.forEach((button) => {
    if (button !== event.target) {
      button.checked = false;
    }
    // 显示 cardType
    cardType.style.display = "block";
  });
}

// 綁定單選按鈕的點擊事件監聽器
radioButtons.forEach((button) => {
  button.addEventListener("click", handleRadioButtonClick);
});

// --------------------

const IDNumber = document.querySelector("#ID-number");

IDNumber.addEventListener("input", function () {
  let value = IDNumber.value;

  // 验证第一个字符是否为英文字母
  let firstChar = value.charAt(0);
  if (!/[a-zA-Z]/.test(firstChar)) {
    IDNumber.value = "";
    return;
  }

  // 将第一个字符转换为大写
  IDNumber.value = firstChar.toUpperCase() + value.slice(1);

  // 验证后面九个字符是否为数字
  let numericPart = value.slice(1);
  if (numericPart.length > 9 || !/^\d+$/.test(numericPart)) {
    let validNumericPart = numericPart.replace(/\D/g, ""); // 删除非数字字符
    IDNumber.value = firstChar.toUpperCase() + validNumericPart;
    return;
  }
});

const IDAlert = document.querySelector("#ID-alert");

IDNumber.addEventListener("blur", function () {
  // 获取输入框的值
  var idNumber = IDNumber.value;

  // 验证身份证有效性
  var isValid = isTWIDValid(idNumber);
  console.log(isValid);
  // 根据验证结果执行操作
  if (isValid) {
    IDAlert.classList.remove("show");
  } else {
    IDAlert.classList.add("show");
  }
});

function isTWIDValid(idStr) {
  // 依照字母的編號排列，存入陣列備用。
  var letters = new Array(
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "W",
    "Z",
    "I",
    "O"
  );
  // 儲存各個乘數
  var multiply = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1);
  var nums = new Array(2);
  var firstChar;
  var firstNum;
  var lastNum;
  var total = 0;
  // 撰寫「正規表達式」。第一個字為英文字母，
  // 第二個字為1或2，後面跟著8個數字，不分大小寫。
  var regExpID = /^[a-z](1|2)\d{8}$/i;
  // 使用「正規表達式」檢驗格式
  if (idStr.search(regExpID) == -1) {
    // 基本格式錯誤
    return false;
  } else {
    // 取出第一個字元和最後一個數字。
    firstChar = idStr.charAt(0).toUpperCase();
    lastNum = idStr.charAt(9);
  }
  // 找出第一個字母對應的數字，並轉換成兩位數數字。
  for (var i = 0; i < 26; i++) {
    if (firstChar == letters[i]) {
      firstNum = i + 10;
      nums[0] = Math.floor(firstNum / 10);
      nums[1] = firstNum - nums[0] * 10;
      break;
    }
  }
  // 執行加總計算
  for (var i = 0; i < multiply.length; i++) {
    if (i < 2) {
      total += nums[i] * multiply[i];
    } else {
      total += parseInt(idStr.charAt(i - 1)) * multiply[i];
    }
  }
  // 和最後一個數字比對
  if (10 - (total % 10) != lastNum) {
    return false;
  }
  return true;
}

const birthday = document.querySelector("#birthday");

birthday.addEventListener("input", function () {
  let value = birthday.value;

  // 移除非数字字符
  let numericValue = value.replace(/\D/g, "");

  // 根据数字长度添加斜杠
  if (numericValue.length >= 5) {
    numericValue = numericValue.slice(0, 4) + "/" + numericValue.slice(4);
  }
  if (numericValue.length >= 8) {
    numericValue = numericValue.slice(0, 7) + "/" + numericValue.slice(7);
  }

  // 更新输入框的值
  birthday.value = numericValue;
});

birthday.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    let value = birthday.value;
    if (value.length === 6 || value.length === 9) {
      birthday.value = value.slice(0, -1);
    }
  }
});

// --------------------

//驗證碼
let captcha = "";

// 定义验证码字符集
const captchaChars = "0123456789";

// 获取刷新按钮和验证码图片元素
let refreshBtn = document.getElementById("refresh-btn");
let captchaImg = document.getElementById("captcha-img");

window.onload = function () {
  // 随机生成新的验证码图片的 base64 编码
  generateRandomCaptcha(function (newCaptchaBase64) {
    // 更新验证码图片的 src 属性
    captchaImg.src = newCaptchaBase64;
  });
};

// 刷新按钮点击事件处理程序
refreshBtn.addEventListener("click", function () {
  // 随机生成新的验证码图片的 base64 编码
  generateRandomCaptcha(function (newCaptchaBase64) {
    // 更新验证码图片的 src 属性
    captchaImg.src = newCaptchaBase64;
  });
});

// 生成随机验证码图片的函数
function generateRandomCaptcha(callback) {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  // 设置画布尺寸
  canvas.width = 100;
  canvas.height = 40;

  // 创建一个新的Image对象
  let backgroundImage = new Image();

  // 设置背景图像的源
  backgroundImage.src = "../images/verificationCodeBg.jpg";

  // 当背景图像加载完成后，在画布上绘制图像
  backgroundImage.onload = function () {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    captcha = "";
    // 随机生成四位数字验证码
    for (let i = 0; i < 4; i++) {
      let digit = Math.floor(Math.random() * 10);
      captcha += digit;
    }

    // 绘制验证码文本
    ctx.font = "bold 35px Arial";
    ctx.fillStyle = "#000"; // 设置文本颜色为黑色
    ctx.fillText(captcha, 10, 30);

    // 将绘制好的验证码图片转换为 base64 编码
    let newCaptchaBase64 = canvas.toDataURL("image/png");

    // 将新的验证码图片传递给回调函数
    callback(newCaptchaBase64);
  };
}

// ---------------------

// // 获取表单和按钮元素
// const form = document.querySelector("#myForm");
// const btnArea = document.querySelector(".btn_area");

// // 添加输入字段的事件监听器
// form.addEventListener("input", function () {
//   // 进行表单验证
//   var isValid = validateForm();

//   // 根据验证结果更新按钮状态
//   if (isValid) {
//     button.classList.remove("disable");
//   } else {
//     button.classList.add("disable");
//   }
// });

// // 表单验证函数
// function validateForm() {
//   // 根据您的验证逻辑判断表单字段是否有效
//   // 返回 true 或 false，表示表单是否有效
//   // 示例中的逻辑是检查两个输入字段是否都有值
//   var input1 = document.getElementById("input1").value;
//   var input2 = document.getElementById("input2").value;

//   return input1 !== "" && input2 !== "";
// }
