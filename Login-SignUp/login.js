const btns = document.querySelectorAll(".btn");
const acc = document.querySelector(".login");
acc.classList.add("active");

btns.forEach(btn => {

    btn.onclick = function () {

        btns.forEach(b => {
            b.classList.remove("active");
        });

        this.classList.add("active");

    };

});


let select = document.getElementById("select-option");
let btn = document.getElementById("login-btn");

btn.onclick = function () {

    if (select.value == "User") {

        window.location.href = "#";

    }

    else if (select.value == "Collector") {

        window.location.href = "../Collector/collector.html";

    }
    else if (select.value == "Recycling Center") {

        window.location.href = "#";

    }
    else if (select.value == "Admin") {

        window.location.href = "#";

    }

}