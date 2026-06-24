function bookRoom(roomName)
{
    alert("Bạn đã chọn: " + roomName);
    window.location.href = "booking.html";
}

document.addEventListener("DOMContentLoaded", function(){

    let form = document.getElementById("bookingForm");

    if(form){

        form.addEventListener("submit", function(event){

            event.preventDefault();

            let fullname =
                document.getElementById("fullname").value;

            let phone =
                document.getElementById("phone").value;

            let checkin =
                document.getElementById("checkin").value;

            let checkout =
                document.getElementById("checkout").value;

            if(fullname === ""){
                alert("Vui lòng nhập họ tên");
                return;
            }

            if(phone === ""){
                alert("Vui lòng nhập số điện thoại");
                return;
            }

            if(checkin === ""){
                alert("Vui lòng chọn ngày nhận phòng");
                return;
            }

            if(checkout === ""){
                alert("Vui lòng chọn ngày trả phòng");
                return;
            }

            window.location.href = "thankyou.html";
        });

    }

});


let contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",
    function(event){

        event.preventDefault();

        let name =
        document.getElementById("name").value;

        let email =
        document.getElementById("email").value;

        let message =
        document.getElementById("message").value;

        if(name === "" ||
           email === "" ||
           message === ""){

            alert("Vui lòng nhập đầy đủ thông tin!");

            return;
        }

        alert("Cảm ơn bạn đã liên hệ với Luxury Hotel!");

        contactForm.reset();

    });

}