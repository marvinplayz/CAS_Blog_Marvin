document.getElementById("alertButton").addEventListener("click", function() {
    let box = document.getElementById("alertBox");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
});
