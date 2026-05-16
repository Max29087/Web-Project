let btn =
    document.getElementById("btn-logut");

let frame =
    document.getElementById("frame");





btn.onclick = function () {

    let result =
        confirm("Do you want to Logout!");



    if (result) {

        localStorage.removeItem(
            "currentAdminPage"
        );

        localStorage.removeItem(
            "activeMenu"
        );



        window.location.replace(
            "../Login-SignUp/login.html"
        );
    }
};





function setActive(clickedItem) {

    let items =
        document.querySelectorAll(".element");



    items.forEach(item => {

        item.classList.remove("active");

    });



    clickedItem.classList.add("active");



    let index =
        clickedItem.getAttribute("data-index");



    localStorage.setItem(
        "activeMenu",
        index
    );
}





function changePage(page) {

    frame.src = page;



    localStorage.setItem(
        "currentAdminPage",
        page
    );
}






function statisticPage(clickedItem) {

    setActive(clickedItem);

    changePage("statistics.html");
}



function approvalPage(clickedItem) {

    setActive(clickedItem);

    changePage("approvals.html");
}



function campaignsPage(clickedItem) {

    setActive(clickedItem);

    changePage("campaigns.html");
}






window.onload = function () {

    let savedPage =
        localStorage.getItem(
            "currentAdminPage"
        );



    let savedActive =
        localStorage.getItem(
            "activeMenu"
        );



    let items =
        document.querySelectorAll(".element");




    if (savedPage == null) {

        frame.src = "statistics.html";
    }

    else {

        frame.src = savedPage;
    }




    items.forEach(item => {

        item.classList.remove("active");

    });




    if (savedActive == null) {

        items[0].classList.add("active");
    }

    else {

        items[savedActive]
            .classList.add("active");
    }
};