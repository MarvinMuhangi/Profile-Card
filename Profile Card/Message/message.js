const sendBtn = document.querySelector('.send-btn');
const textarea = document.querySelector('.mytextarea');

sendBtn.addEventListener('click', send)

function send(){
    let message = textarea.value;
    if(message ==""){
        alert("Sorry, you can't send an empty text.")
    } else(alert("Thank you for taking your time to reach out! I've received your message saying, " + message));
    
};
