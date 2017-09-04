// Create an HTML page with a large element on the page
// that says "Don't hover over me" inside of it.
// When you hover over the element, send an alert to the user
// that says, "Hey, I told you not to hover over me!"


function button1(){
   document.getElementById('messagebox1').innerHTML = "I'm right";
   document.getElementById('messagebox2').innerHTML = "";
}

function botton2(){
   document.getElementById('messagebox1').innerHTML = "";
   document.getElementById('messagebox2').innerHTML = "No, I'm right!";
}
