// function sendMessage() {
//     var phonenumber = "+7806844491"; // Your WhatsApp phone number
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var adults = document.getElementById("adults").value;
//     var children = document.getElementById("children").value;
//     var checkin_date = document.getElementById("checkin_date").value;
//     var checkout_date = document.getElementById("checkout_date").value;
//     var message = document.getElementById("message").value;

//     var url = "https://wa.me/" + phonenumber + "?text=" +
//         "Name: " + name + "%0a" +
//         "Email: " + email + "%0a" +
//         "Phone: " + phone + "%0a" +
//         "Message: " + message + "%0a" +
//         "Adults: " + adults + "%0a" +
//         "Checkin_date: " + checkin_date + "%0a" +
//         "Checkout_date: " + checkout_date + "%0a" +
//         "Children: " + children + "%0a%0a" +
//         "This message is sent via the contact form on our website.";

//     window.open(url, '_blank').focus();
// }


          
function sendData() {
    sendMessage();
    sendemail();
  }

  function sendMessage() {
    var phonenumber = "+9486032329"; // Your WhatsApp phone number
  
    var name = document.getElementById("name").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var checkin_date = document.getElementById("checkin_date").value;
    var checkout_date = document.getElementById("checkout_date").value;

    var url = "https://wa.me/" + phonenumber + "?text=" +
     
      "Name: " + name+ "%0a" +
      "Checkin_date: " + checkin_date + "%0a" +
      "Checkout_date: " + checkout_date + "%0a" +
      "Adults: " + adults + "%0a" +
      "Children: " + children + "%0a%0a" +
      "This message is sent via the contact form on our website.";

    window.open(url, '_blank').focus();
  }

  function sendemail() {
    
    var name = document.getElementById("name").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var checkin_date = document.getElementById("checkin_date").value;
    var checkout_date = document.getElementById("checkout_date").value;

    var templateParams = {
      name: name,
      adults: adults,
      children: children,
      checkin_date: checkin_date,
      checkout_date: checkout_date,
    };

    emailjs
      .send("service_q3v5y3m", "template_iybzqqw", templateParams)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        window.alert("Sent successfully!");
      });
  }