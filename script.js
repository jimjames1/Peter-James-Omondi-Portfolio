document.getElementById('contactform').addEventListener('submit', function(event)) {
    Event.preventDefault();
    

    //Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById(message).value;

    //Display a simple alert with the form data (you can intergrate backbground here)
    alert('Thank you ${name}, your meassage has been received. We will get back to you at ${email}.');

    //clear the form
    document.getElementById('contactform').reset();
    
    }
    
    

