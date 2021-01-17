function changeTitle() {
    var x = document.getElementById('title');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("buttonTitle").innerHTML = "Click to hide the title"
    } else {
        x.style.display = 'none';
        document.getElementById("buttonTitle").innerHTML = "Click to display the title"
    }
}