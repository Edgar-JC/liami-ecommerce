const d = document;
const w = window;

function hamburgerMenu() {
    const hamburgerButton = d.querySelector(".hamburger-menu");
    const navBar = d.querySelector(".main-nav")
    const linesButton = d.querySelectorAll(".line")
    const bodyPage = d.querySelector(".body-page")
    hamburgerButton.addEventListener("click",()=>{
        navBar.classList.toggle("is-active");
        linesButton.forEach(element => {
            element.classList.toggle("toggle")
        });
        bodyPage.classList.toggle("hidden")
    })
}

function openWindowUser() {
    const iconUser = d.querySelector("#user-icon");
    const loginWindow = d.querySelector(".login-window");
    d.onclick = function(e) {
        console.log();
        if (e.target !== loginWindow) {
            loginWindow.style.display = "none"
        }
        if (e.target === loginWindow || e.target === iconUser) {
            loginWindow.style.display= "block";
        }
    }
}


function closeWindowUser() {
    const closeButton = d.querySelector(".close-button");
    const loginWindow = d.querySelector(".login-window");
    closeButton.addEventListener("click",()=>{
        loginWindow.style.display = "none"
    })
    
}



function runFunctions() {
    hamburgerMenu();
    openWindowUser();
    closeWindowUser();

}

window.onload = runFunctions;