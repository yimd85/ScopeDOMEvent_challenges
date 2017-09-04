// Create an HTML page with a form. The form should include inputs for a
// username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the
// form is correct, have Javascript change the text in the H1.

function checkForm(){
  if ( (checkuser() == true) && (validateForm() == true) ){
    document.getElementById("main").innerHTML = "<h3>you've sucessfully did it!! but you still suck!!</h3>"
  }else {
    alert("incorrect")
  }
}

function validateForm() {
  var x = document.forms["myForm"]["password1"].value;
    // if(input2.matches(/^[0-9]+$/) != null){
    if (x == "12345678") {
    // alert("password accepted")
    return true;
  } else {
    return false
    // alert("password needs to be 12345678")
  }
}

function checkuser(){
  var pass = /^(?=.*\d)/;
  var password = document.getElementById('userx');
  if (password.value.match(pass)){
    // alert("user accepted")
    return true;
  }else{
    return false;
    // alert("username needs 1 digit")
  }
}
