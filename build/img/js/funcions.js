const d = document;
const w = window;

function hamburgerMenu() {
    const hamburgerButton = d.querySelector(".hamburger-menu");
    const navBar = d.querySelector(".main-nav")
    const linesButton = d.querySelectorAll(".line")
    const body = d.querySelector(".body")
    hamburgerButton.addEventListener("click",()=>{
        navBar.classList.toggle("is-active");
        linesButton.forEach(element => {
            element.classList.toggle("toggle")
        });

        body.classList.toggle("hidden");
        const overlay = d.createElement("DIV")
        body.appendChild(overlay);
        overlay.classList.add("overlay");

        overlay.onclick = function() {
            navBar.classList.remove("is-active");
            overlay.remove();
            body.classList.remove("hidden")
            linesButton.forEach(element =>{
                element.classList.remove("toggle")
            })
        }
    })
}

function preventDefault(element) {
    element.addEventListener("click", function(e) {
        e.preventDefault()
    })
}

function appendChildNavBar() {
    const navBar = d.querySelector(".bar-nav")
    const logoImg = d.querySelector(".logo")
    const body = d.querySelector(".body")
    w.innerWidth > 1024 ? logoImg.parentNode.insertBefore(navBar, logoImg.nextSibling) : body.appendChild(navBar);
    w.addEventListener("resize", ()=>{
        w.innerWidth > 1024 ? logoImg.parentNode.insertBefore(navBar, logoImg.nextSibling) : body.appendChild(navBar);
    })
}

function openElement(button, elementOpen) {
    d.onclick = function(e) {
        if (e.target !== elementOpen && !elementOpen.contains(e.target)) {
            elementOpen.style.display = "none"
        }
        if (e.target === elementOpen || e.target === button) {
            elementOpen.style.display= "block";
        }
    }
}

function closeElement(button, elementClose) {
    button.addEventListener("click",()=>{
        elementClose.style.display = "none"
    })
}

function openWindowUser() {
    const iconUser = d.querySelector("#user-icon");
    const loginWindow = d.querySelector(".login-window");
    openElement(iconUser, loginWindow)
    preventDefault(iconUser)
}

function closeWindowUser() {
    const closeButton = d.querySelector(".close-button");
    const loginWindow = d.querySelector(".login-window");
    closeElement(closeButton, loginWindow);
}

function openShoppingCart() {
    const iconCart = d.querySelector(".shopping-cart")
    const shoppingWindow = d.querySelector(".shopping-window")
    openElement(iconCart, shoppingWindow)
    preventDefault(iconCart);
}




function runFunctions() {
    hamburgerMenu();
    openWindowUser();
    closeWindowUser();
    appendChildNavBar();
}

window.onload = runFunctions;