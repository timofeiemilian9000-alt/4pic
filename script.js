// Hoisting 
const btnTheme = document.getElementById("toggle-theme")
const favicon = document.querySelector('link[rel="icon"]')
const imgLogo = document.querySelector("header img")

// events
btnTheme.addEventListener("click", toggleTheme)

// functions
function toggleTheme() {

    const isDark = document.body.classList.toggle("toggle-theme")
    
    favicon.href = isDark ? "./Logos/white_logo.png" : "./Logos/black_logo.png"
    
    if (imgLogo) {
        imgLogo.src = isDark ? "./Logos/black_logo.png" : "./Logos/white_logo.png"
    }

    btnTheme.classList.toggle("btn-theme")

}