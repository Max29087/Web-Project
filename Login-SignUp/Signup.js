let btn = document.getElementById("login1-btn");
let btn2 = document.getElementById("signup1-btn");
let btn3 = document.getElementById("create-btn");
let Name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let pass = document.getElementById("pass");
let select = document.getElementById("select-option");
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let phonePattern = /^[0-9]{11}$/;


btn.onclick = function () {
    window.location.href = "login.html";
}

btn2.onclick = function () {
    window.location.href = "signup.html";
}


btn3.onclick = function () {
    btn3.onclick = function () {

        if (Name.value == "") {
            alert("Please Enter Your Full Name!");
        }
        else if (email.value == "") {
            alert("Please Enter Your Email!");
        }
        else if (!emailPattern.test(email.value)) {
            alert("Invalid email format!");
        }
        else if (phone.value == "") {
            alert("Please Enter Your Phone!");
        }
        else if (!phonePattern.test(phone.value)) {
            alert("Phone number must be 11 digits!");
        }
        else if (pass.value == "") {
            alert("Please Enter Your Password!");
        }
        else if (select.value == "") {
            alert("Please Select Your Account Type!");
        }
        else {
            alert("Account Created Successfully!");
            window.location.href = "login.html";
        }

    }
}
