// 获取模态框
var modal = document.getElementById("modal");

// 获取打开模态框的按钮
var btn = document.getElementById("subscribe-btn");

// 获取 <span> 元素，用于关闭模态框
var span = document.getElementsByClassName("close")[0];

// 当用户点击按钮时，打开模态框
btn.onclick = function() {
  modal.style.display = "block";
}

// 当用户点击 <span> (x), 关闭模态框
span.onclick = function() {
  modal.style.display = "none";
}

// 在用户点击模态框外部时，关闭它
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 处理邮箱提交
document.getElementById("submit-email").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    if (email) {
        alert("感谢您的订阅！我们会将更新发送到：" + email);
        modal.style.display = "none";
    } else {
        alert("请输入有效的邮箱地址。");
    }
});
