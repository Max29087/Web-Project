let btn1 = document.getElementById("login1-btn");
let btn2 = document.getElementById("signup1-btn");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn1.onclick = function () {
    window.location.href = "login.html";
}

btn2.onclick = function () {
    window.location.href = "signup.html";
}



let select = document.getElementById("select-option");
let btn = document.getElementById("login-btn");

btn.onclick = function () {

    if (email.value == "") {
        alert("Please Enter Your Email!")
    }

    else if (!emailPattern.test(email.value)) {
        alert("Invalid email format!");
    }

    else if (pass.value == "") {
        alert("Please Enter Your Password!")
    }

    else if (select.value == "") {
        alert("Please Select Your Account Type!");
    }

    else {

        if (select.value == "user") {

            window.location.href = "#";

        }

        else if (select.value == "collector") {

            window.location.href = "../Collector/collector.html";

        }
        else if (select.value == "recycling") {

            window.location.href = "#";

        }
        else if (select.value == "admin") {

            window.location.href = "../Admin/admin.html";

        }
    }

}