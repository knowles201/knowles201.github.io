// JavaScript source code


//Create new variable, assign date function
var d = new Date();
document.getElementById("date").innerHTML = d;

//Validation for contact us page
function validateForm() {
    var a = document.forms["myForm"]["fname"].value;
    var b = document.forms["myForm"]["lname"].value;
    var c = document.forms["myForm"]["email"].value;

    if (a == null || a == "" || b == null || b == "" || c == null || c == "") {
        alert("Please Complete All Fields");
        return false;
    }
}