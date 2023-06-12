// 获取需要点击的链接和需要显示/隐藏的元素
var link1 = document.querySelector("#cardbrand1");
var link2 = document.querySelector("#cardbrand2");
var element1 = document.getElementById("carouselExampleIndicators");
var element2 = document.getElementById("carouselExampleIndicators2");
var cardType = document.getElementById("cardType");

// 为第一个链接添加点击事件处理程序
link1.addEventListener("click", function (event) {
  event.preventDefault(); // 阻止默认链接行为
  // 取消所有被选中的单选框
  clearRadioSelection();
  // 显示第一个元素
  element1.classList.add("active");
  // 隐藏第二个元素
  element2.classList.remove("active");
  // 添加/移除 active 焦点类名
  link1.classList.add("active");
  link2.classList.remove("active");
});

// 为第二个链接添加点击事件处理程序
link2.addEventListener("click", function (event) {
  event.preventDefault(); // 阻止默认链接行为
  // 取消所有被选中的单选框
  clearRadioSelection();
  // 显示第一个元素
  element2.classList.add("active");
  // 隐藏第二个元素
  element1.classList.remove("active");
  // 添加/移除 active 焦点类名
  link2.classList.add("active");
  link1.classList.remove("active");
});

// 取消所有被选中的单选框
function clearRadioSelection() {
  cardbrand1.checked = false;
  cardbrand2.checked = false;
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

// 定义验证码字符集
const captchaChars = "0123456789";

// 获取刷新按钮和验证码图片元素
var refreshBtn = document.getElementById("refresh-btn");
var captchaImg = document.getElementById("captcha-img");

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
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  // 设置画布尺寸
  canvas.width = 100;
  canvas.height = 40;

  // 创建一个新的Image对象
  var backgroundImage = new Image();

  // 设置背景图像的源
  backgroundImage.src = "../images/verificationCodeBg.jpg"; // 替换为您网络上的图像URL

  // 当背景图像加载完成后，在画布上绘制图像
  backgroundImage.onload = function () {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // 随机生成四位数字验证码
    var captcha = "";
    for (var i = 0; i < 4; i++) {
      var digit = Math.floor(Math.random() * 10);
      captcha += digit;
    }

    // 绘制验证码文本
    ctx.font = "bold 35px Arial";
    ctx.fillStyle = "#000"; // 设置文本颜色为黑色
    ctx.fillText(captcha, 10, 30);

    // 将绘制好的验证码图片转换为 base64 编码
    var newCaptchaBase64 = canvas.toDataURL("image/png");

    // 将新的验证码图片传递给回调函数
    callback(newCaptchaBase64);
  };
}
