var pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let message = document.getElementById("pw1_check");
let message2 = document.getElementById("pw2_check");

pass1.onkeydown = function () {

    if (pass1.value.length === 0)
        message.textContent = "set your password!";
    else if (pass1.value != "")
        message.textContent = "";

    if (pass1.value.length < 6)
        message.textContent = "the password should be more than 6 charcter!";
    else password = true;
};



function submitForm(e) {
    var password = false;
  
    if (pass2.value.length === 0) {
        message2.textContent = "validate your password!";
    } else if (pass2.value != "")
        message2.textContent = "";

    if (pass2.value !== pass1.value)
        message2.textContent = "The tow passwords didn't match!";
    else {
        password = true;


    }
    if (password === false) {
        e.preventDefault();
    } else {
        e.defaultPrevented = false;
    }

}
pass2.onkeyup = function () {
    if (pass2.value === pass1.value)
        document.getElementById("submitBtn").style.display = "block";
}

window.onload = function () {
    document.getElementById("submitBtn").style.display = "none";
};