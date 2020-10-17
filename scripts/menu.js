window.onscroll = function() {fixHeader()};
var header = document.getElementById("headerMenu");
var sticky = header.offsetTop;

function fixHeader() {
    header.classList.remove("sticky");

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }
}