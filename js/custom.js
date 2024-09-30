// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

function toggleReadMore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (moreText.style.display === "none") {
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
      btnText.style.display = "flex";
      btnText.style.justifyContent = "center"
      btnText.style.marginTop ="45px"
    } else {
      btnText.innerHTML = "Read less";
      btnText.style.display = "flex";
      btnText.style.justifyContent = "center"
      btnText.style.marginTop ="45px"
    }
  }
  

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(24.3640348, 54.5013499),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

document.getElementById("success").style.visibility = "hidden";
//Listen for submit
document.querySelector('.contact-form').addEventListener("submit",submitform);
function submitform(e){
    e.preventDefault();

    //Get inputs
    let name = document.querySelector("#tbname").value;
    let phone = document.querySelector("#tbphone").value;
    let email = document.querySelector("#tbemail").value;
    let message = document.querySelector("#tbmessage").value;
    sendEmail(name,phone,email,message);
    document.querySelector('.contact-form').reset();
}

function sendEmail(name,phone,email,message){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "equiryfromqmed@gmail.com",
        Password : "qexvadaocwqcyfbc",
        To : 'athuln10@gmail.com',
        From : "equiryfromqmed@gmail.com",
        Subject : `Enquiry from ${name}`,
        Body : `Name: ${name}<br/> Phone: ${phone} <br/> Email: ${email}<br/> Message:${message}`
        }).then((message) => showSuccessMessage());
}
var timeOutVar;

function showSuccessMessage(){
    document.getElementById("success").style.visibility = "visible";
    document.getElementById("success").style.opacity = 1;
    fadeOutEffect();
}

function fadeOutEffect() {
    var fadeTarget = document.getElementById("success");
     fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 1500);
}

