let campaigns = [

    {
        type: "Awareness",

        title: "E-Waste Awareness Week",

        message:
            "Join us for E-Waste Awareness Week! Learn about proper electronic waste recycling.",

        date: "15/03/2025"
    }

];



let campaignList =
    document.getElementById("campaignList");



function showCampaigns() {

    campaignList.innerHTML = "";

    for (let i = 0; i < campaigns.length; i++) {

        campaignList.innerHTML += `

            <div class="campaign-card">

                <div class="card-top">

                    <span class="badge">

                        ${campaigns[i].type}

                    </span>

                    <span class="date">

                        ${campaigns[i].date}

                    </span>

                </div>



                <h3 class="card-title">

                    ${campaigns[i].title}

                </h3>



                <p class="card-desc">

                    ${campaigns[i].message}

                </p>



                <div class="actions">

                    <button
                    class="edit-btn"
                    onclick="editCampaign(${i})">

                        Edit

                    </button>



                    <button
                    class="delete-btn"
                    onclick="deleteCampaign(${i})">

                        Delete

                    </button>

                </div>

            </div>

        `;
    }
}




function openPopup() {

    document.getElementById("popup")
        .style.display = "flex";
}




function closePopup() {

    document.getElementById("popup")
        .style.display = "none";
}




function addCampaign() {

    let type =
        document.getElementById("campaignType").value;

    let title =
        document.getElementById("campaignTitle").value;

    let message =
        document.getElementById("campaignMessage").value;

    let today =
        new Date().toLocaleDateString();



    if (title == "" || message == "") {

        alert("Fill all fields");

        return;
    }



    campaigns.unshift({

        type: type,
        title: title,
        message: message,
        date: today

    });



    showCampaigns();

    closePopup();



    document.getElementById("campaignTitle").value = "";

    document.getElementById("campaignMessage").value = "";




    alert("Campaign Broadcast Successfully!");
}




function editCampaign(index) {

    let newTitle =
        prompt(
            "Edit Title",
            campaigns[index].title
        );

    let newMessage =
        prompt(
            "Edit Message",
            campaigns[index].message
        );



    if (newTitle && newMessage) {

        campaigns[index].title = newTitle;

        campaigns[index].message = newMessage;

        showCampaigns();
    }
}





function deleteCampaign(index) {

    campaigns.splice(index, 1);

    showCampaigns();
}



showCampaigns();