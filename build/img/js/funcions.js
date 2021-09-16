const d = document;
const w = window;

function hamburgerMenu() {
    const hamburgerButton = d.querySelector(".hamburger-menu");
    const navBar = d.querySelector(".main-nav")
    const linesButton = d.querySelectorAll(".line")
    const body = d.querySelector(".body")
    const closeButton = d.querySelector(".close-nav")

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
        closeButton.onclick = function() {
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
    const socialMedia = d.querySelector(".social-media-bar")
    const closeButton = d.querySelector(".close-nav")


    if (w.innerWidth > 1024) {
        logoImg.parentNode.insertBefore(navBar, logoImg.nextSibling)
        socialMedia.style.display ="none"
        closeButton.style.visibility ="hidden"
    } else {
        body.appendChild(navBar)
        socialMedia.style.display ="flex"
        closeButton.style.visibility ="visible"
    }
    w.addEventListener("resize", ()=>{
        if (w.innerWidth > 1024) {
            logoImg.parentNode.insertBefore(navBar, logoImg.nextSibling)
            socialMedia.style.display ="none"
            closeButton.style.visibility ="hidden"
        } else {
            body.appendChild(navBar)
            socialMedia.style.display ="flex"
            closeButton.style.visibility ="visible"
        }
    })
}

function userWindow() {
    const openButton = d.querySelector("#user-icon");
    const userContainer = d.querySelector(".user");

    openButton.addEventListener("click", function() {
        
        const loginWindow = d.createElement("div");
        loginWindow.classList.add("login-window");
        userContainer.appendChild(loginWindow)

        const closeButton = d.createElement("i");
        closeButton.classList.add("fas", "fa-times", "close-button")
        loginWindow.appendChild(closeButton);

        const welcomeText = d.createElement("p");
        welcomeText.textContent = "¡Bienvenido!"
        welcomeText.classList.add("text-user")
        loginWindow.appendChild(welcomeText);


        const buttonsContainer = d.createElement("div");
        buttonsContainer.classList.add("buttons");
        loginWindow.appendChild(buttonsContainer);


        const buttonLogin = d.createElement("a");
        buttonLogin.textContent = "Iniciar Sesion";
        buttonLogin.href="#"
        buttonLogin.classList.add("login", "button")
        buttonsContainer.appendChild(buttonLogin);
        preventDefault(buttonLogin);

        const buttonRegister = d.createElement("a");
        buttonRegister.classList.add("register", "button")
        buttonRegister.href="#"
        buttonRegister.textContent = "Registrarme";
        buttonsContainer.appendChild(buttonRegister);
        preventDefault(buttonRegister);


        openButton.disabled = true;

        closeButton.onclick = function() {
            loginWindow.remove();
            openButton.disabled = false;   
        }
        
        d.addEventListener("mouseup", function(e) {
            if (!loginWindow.contains(e.target)) {
                loginWindow.remove();
                openButton.disabled = false;
            }
        })
    })
        
}




function runFunctions() {
    hamburgerMenu();
    userWindow();
    appendChildNavBar();
}

window.onload = runFunctions;




