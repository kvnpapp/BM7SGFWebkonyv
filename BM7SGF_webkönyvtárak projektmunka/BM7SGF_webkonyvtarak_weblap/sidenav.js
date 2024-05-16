function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("sidenav").style.opacity = "1";
    document.body.classList.add("active-sidenav");
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("sidenav").style.opacity = "0";
    document.body.classList.remove("active-sidenav");
}
