const requestBtn = document.getElementById("requestBtn");
const historyBtn = document.getElementById("historyBtn");

const requestSection = document.getElementById("requestSection");
const historySection = document.getElementById("historySection");



requestBtn.addEventListener("click", function () {

    requestBtn.classList.add("active");
    historyBtn.classList.remove("active");

    requestSection.classList.remove("hidden");
    historySection.classList.add("hidden");

});



historyBtn.addEventListener("click", function () {

    historyBtn.classList.add("active");
    requestBtn.classList.remove("active");

    historySection.classList.remove("hidden");
    requestSection.classList.add("hidden");

});


let btn = document.getElementById("btn-logut");
btn.onclick = function () {
    let result = confirm("Do you want to Logout!");
    if (result) {
        window.location.href = "../Login-SignUp/login.html";
    }
}