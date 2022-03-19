window.addEventListener("scroll", function() {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


const body = document.querySelector('body');
document.querySelector(".toggle").onclick = function() {
    body.classList.toggle('dark');
}


document.getElementById("btn__right").onclick = function() {
    document.getElementById("right-sidebar").style.width = "90px";

}