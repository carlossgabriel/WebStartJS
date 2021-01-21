function showTime() {
    var today = new Date();
    document.getElementById('time').innerHTML = today.getDate() + "/" + today.getMonth() + 1 + "/" + today.getFullYear();
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}