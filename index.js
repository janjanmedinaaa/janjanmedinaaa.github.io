function sendEmail() {
  let validation = 0;

  let email = (document.getElementById('email').value != "") ? 
                document.getElementById('email').value : 
                validation++;
  let subject = (document.getElementById('subject').value != "") ? 
                document.getElementById('subject').value : 
                validation++;
                
  let fname = (document.getElementById('fname').value != "") ? 
                document.getElementById('fname').value : 
                validation++;
  
  let lname = (document.getElementById('lname').value != "") ? 
                document.getElementById('lname').value : 
                validation++;
                
  let message = (document.getElementById('message').value != "") ? 
                document.getElementById('message').value : 
                validation++;

  var template_params = {
    "email": email,
    "reply_to": email,
    "subject": subject,
    "first_name": fname,
    "last_name": lname,
    "message": message
  }

  var data = {
      service_id: 'gmail',
      template_id: 'default_template_v1',
      user_id: 'user_Zy7dboUT6wWHWVHpMoHaI',
      template_params: template_params
  };

  let headers = {
      "Content-type": "application/json"
  };

  let options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
  };

  if (validation == 0){
    fetch('https://api.emailjs.com/api/v1.0/email/send', options)
    .then((httpResponse) => {
        if (httpResponse.ok) {
            successMessage();
        } else {
            return httpResponse.text()
                .then(text => Promise.reject(text));
        }
    })
    .catch((error) => {
        console.log(error);
        failMessage();
    });
  }
  else {
    failMessage();
  }
}

function successMessage(){
    document.getElementById('message-success').style.display = "inline-flex";
}

function failMessage(){
    document.getElementById('message-fail').style.display = "inline-flex";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}