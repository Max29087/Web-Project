let btn = document.getElementById("btn-logut");
btn.onclick = function () {
    let result = confirm("Do you want to Logout!");
    if (result) {
        window.location.href = "../index.html";
    }
}