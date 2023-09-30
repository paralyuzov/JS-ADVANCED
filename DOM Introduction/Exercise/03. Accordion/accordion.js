function toggle() {

    let displayStyle = document.getElementById("extra").style.display;
    if (displayStyle === "block") {
        document.getElementById("extra").style.display = "none"
        document.getElementsByClassName("button")[0].textContent = "More"
    } else {
        document.getElementById("extra").style.display = "block"
        document.getElementsByClassName("button")[0].textContent = "Less"
    }

}