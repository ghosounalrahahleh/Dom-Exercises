// change font-family from dropdown menu
var text = document.getElementById("text");
document
    .getElementById("font_family")
    .addEventListener("change", function changeFont(val) {
        text.style.fontFamily = val.target.value;
    });
// change font-size from dropdown menu
document
    .getElementById("font_size")
    .addEventListener("change", function changeFont(val) {
        text.style.fontSize = val.target.value;
    });
// change font-weight when checkbox ckecked
var checkBox = document.getElementById("font_bold");
document
    .getElementById("font_bold")
    .addEventListener("change", function changeFont(val) {
        if (checkBox.checked)
            text.style.fontWeight = "bold";
        else text.style.fontWeight = "normal";
    });
// change text-decoration when checkbox ckecked
var checkBox2 = document.getElementById("font_underline")
document
    .getElementById("font_underline")
    .addEventListener("change", function changeFont(val) {
        if (checkBox2.checked)
            text.style.textDecoration = "underline";
        else text.style.textDecoration = "none";

    });
// change font-style when checkbox ckecked
var checkbox3 = document.getElementById("font_italic")
document
    .getElementById("font_italic")
    .addEventListener("change", function changeFont(val) {
        if (checkbox3.checked)
            text.style.fontStyle = "italic";
        else text.style.fontStyle = "normal";

    });