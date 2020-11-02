// Alert Banner

const alertBanner = document.getElementById("alert");
const alert = alertBanner;

alertBanner.innerHTML = 
`
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
`

alertBanner.addEventListener( "click", e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alert.style.display = "none"
    }
});  

// Checks if the user input fields are filled in

const user = document.getElementById( "userField" );
const message = document.getElementById( "messageField" );
const send = document.getElementById( "sendUser" );

send.addEventListener( "click" , (e) => {
  
  e.preventDefault();
  if (user.value === "" && message.value === "" ) {
    window.alert( "Please fill out user and message fields before sending" );
  } else if (user.value === "" ) {
    window.alert( "Please fill out user field before sending" );
  } else if (message.value === "" ) {
    window.alert( "Please fill out message field before sending" );
  } else {
    window.alert( `Message successfully sent to: ${user.value}` );
  }
  });