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

//Code for navigation menu
function openNav() {
    document.getElementById("mySidenav").style.width = "28%";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "#59323C";
    
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "#59323C";
}