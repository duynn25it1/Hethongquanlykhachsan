let rooms =
JSON.parse(localStorage.getItem("rooms")) || [

    {
        id:"P001",
        name:"Deluxe Room",
        price:"1200000"
    },

    {
        id:"P002",
        name:"Premium Room",
        price:"2000000"
    }

];

function saveData()
{
    localStorage.setItem(
        "rooms",
        JSON.stringify(rooms)
    );
}

function displayRooms()
{
    let table =
    document.getElementById("roomTable");

    table.innerHTML = "";

    rooms.forEach((room,index)=>{

        table.innerHTML += `

        <tr>

            <td>${room.id}</td>

            <td>${room.name}</td>

            <td>${room.price} VNĐ</td>

            <td>

                <button onclick="editRoom(${index})">
                    Sửa
                </button>

                <button onclick="deleteRoom(${index})">
                    Xóa
                </button>

            </td>

        </tr>

        `;
    });
}

function addRoom()
{
    let id =
    document.getElementById("roomId").value;

    let name =
    document.getElementById("roomName").value;

    let price =
    document.getElementById("roomPrice").value;

    if(id === "" || name === "" || price === "")
    {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    rooms.push({

        id:id,
        name:name,
        price:price

    });

    saveData();

    displayRooms();

    document.getElementById("roomId").value="";
    document.getElementById("roomName").value="";
    document.getElementById("roomPrice").value="";
}

function deleteRoom(index)
{
    if(confirm("Bạn có chắc muốn xóa phòng này?"))
    {
        rooms.splice(index,1);

        saveData();

        displayRooms();
    }
}

function editRoom(index)
{
    let room = rooms[index];

    let newName =
    prompt(
        "Tên phòng mới:",
        room.name
    );

    let newPrice =
    prompt(
        "Giá phòng mới:",
        room.price
    );

    if(newName && newPrice)
    {
        room.name = newName;

        room.price = newPrice;

        saveData();

        displayRooms();
    }
}

displayRooms();