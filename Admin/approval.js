let users = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    status: "Approved"
  },

  {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1234567891",
    status: "Approved"
  },

  {
    name: "Mike Wilson",
    email: "mike@example.com",
    phone: "+1234567892",
    status: "Pending"
  }
];

let table = document.getElementById("userTable");

function showUsers() {

  table.innerHTML = "";

  for (let i = 0; i < users.length; i++) {

    let buttons = "";

    if (users[i].status == "Pending") {

      buttons = `
        <div class="actions">

          <button
          class="approve-btn"
          onclick="approve(${i})">

            Approve

          </button>

          <button
          class="reject-btn"
          onclick="reject(${i})">

            Reject

          </button>

        </div>
      `;
    }

    table.innerHTML += `

      <tr>

        <td>${users[i].name}</td>

        <td>${users[i].email}</td>

        <td>${users[i].phone}</td>

        <td>
          <span class="user-status ${users[i].status.toLowerCase()}">
            ${users[i].status}
          </span>
        </td>

        <td>${buttons}</td>

      </tr>

    `;
  }
}

function approve(index) {

  users[index].status = "Approved";

  showUsers();
}

function reject(index) {

  users.splice(index, 1);

  showUsers();
}

showUsers();




let centers = [

  {
    name: "GreenTech Recycling",
    address: "123 Eco Street, Green City",
    capacity: "500 tons/month",
    status: "Approved"
  },

  {
    name: "EcoCycle Center",
    address: "45 River Road, Clean Town",
    capacity: "320 tons/month",
    status: "Pending"
  },

  {
    name: "Urban Recycle Hub",
    address: "78 Main Avenue, Metro City",
    capacity: "700 tons/month",
    status: "Pending"
  }

];

let centerTable = document.getElementById("centerTable");

function showCenters() {

  centerTable.innerHTML = "";

  for (let i = 0; i < centers.length; i++) {

    let button = "";

    if (centers[i].status == "Pending") {

      button = `

                <button
                class="approve-btn"
                onclick="approveCenter(${i})">

                    Approve

                </button>

            `;
    }

    centerTable.innerHTML += `

            <tr>

                <td>${centers[i].name}</td>

                <td>${centers[i].address}</td>

                <td>${centers[i].capacity}</td>

                <td>

                    <span class="user-status ${centers[i].status.toLowerCase()}">

                        ${centers[i].status}

                    </span>

                </td>

                <td>

                    ${button}

                </td>

            </tr>

        `;
  }
}

function approveCenter(index) {

  centers[index].status = "Approved";

  showCenters();
}

showCenters();

let collectors = [

  {
    name: "Rahim Ahmed",
    phone: "+8801712345678",
    vehicle: "Pickup Van",
    area: "Dhaka North",
    status: "Pending"
  },

  {
    name: "Karim Hasan",
    phone: "+8801811122233",
    vehicle: "Truck",
    area: "Chittagong",
    status: "Approved"
  },

  {
    name: "Sakib Khan",
    phone: "+8801912345678",
    vehicle: "Mini Truck",
    area: "Khulna",
    status: "Pending"
  }

];

let collectorTable = document.getElementById("collectorTable");

function showCollectors() {

  collectorTable.innerHTML = "";

  for (let i = 0; i < collectors.length; i++) {

    let button = "";

    if (collectors[i].status == "Pending") {

      button = `

                <button
                class="approve-btn"
                onclick="approveCollector(${i})">

                    Approve

                </button>

            `;
    }

    collectorTable.innerHTML += `

            <tr>

                <td>${collectors[i].name}</td>

                <td>${collectors[i].phone}</td>

                <td>${collectors[i].vehicle}</td>

                <td>${collectors[i].area}</td>

                <td>

                    <span class="user-status ${collectors[i].status.toLowerCase()}">

                        ${collectors[i].status}

                    </span>

                </td>

                <td>

                    ${button}

                </td>

            </tr>

        `;
  }
}

function approveCollector(index) {

  collectors[index].status = "Approved";

  showCollectors();
}

showCollectors();