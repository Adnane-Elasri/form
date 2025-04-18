document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formCheck').addEventListener('change', function () {
      document.getElementById('submitBtn').disabled = !this.checked;
    });
  });
  


document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var phone = document.getElementById('phoneNumber');
    var mail = document.getElementById('emailAdress');
    var atmail = /@gmail.com/;  /* Regex */
    var onlynumbers = /^[0-9]{10}$/;
    
    
    var error1 = document.getElementById('firstNameError');
    var error2 = document.getElementById('lastNameError');
    var error3 = document.getElementById('mailError');
    var error4 = document.getElementById('numberError');
  
    
    
    if (firstName.length < 6) {
      error1.textContent = "First Name must contain 6 or more characters.";
    } else {
      error1.textContent = "";
    }
  
    if (lastName.length < 6) {
      error2.textContent = "Last Name must contain 6 or more characters.";
    } else {
      error2.textContent = "";
    }

    if (!atmail.test(mail.value)) {
        error3.textContent = "E-mail address must contain '@gmail.com'";
    } else {
        error3.textContent = "";
    }
      
    if (!onlynumbers.test(phone.value)) {
        error4.textContent = "Must contain 10 or more Numbers.";
    } else {
        error4.textContent = "";
    }
}
  