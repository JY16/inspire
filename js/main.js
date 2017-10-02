function showMenu() {
    let menuToggle = document.querySelector(".menu-toggle");
    let mainNav = document.querySelector(".main-nav");

    menuToggle.addEventListener("click", function() {
        if (mainNav.style.display === "flex") {
            mainNav.style.display = "none";
        }
        else {
            mainNav.style.display = "flex";
        }
    })
}

showMenu();