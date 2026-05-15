let btn = document.getElementById("btn-logut");
btn.onclick = function () {
    let result = confirm("Do you want to Logout!");
    if (result) {
        window.location.href = "../Login-SignUp/login.html";
    }
}

function setActive(clickedItem) {
    let items = document.querySelectorAll(".element");

    items.forEach(item => {
        item.classList.remove("active");
    });

    clickedItem.classList.add("active");
}