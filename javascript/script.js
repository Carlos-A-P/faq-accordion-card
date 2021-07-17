const acc = document.getElementsByClassName("accordion");

for(let i = 0; i<acc.length ; i++){
    // will run five times
    acc[i].addEventListener("click", function() {
        // if active is set remove it, otherwise add it => .classList.toggle("active")
        // toggle between adding and removing the active class,
        // to highlight the button that controls the panel
        this.classList.toggle("active");

        // Toggle between hiding and showing the active panel
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        //adding transition to panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}