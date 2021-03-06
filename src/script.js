const navMobile = document.querySelector("#nav-mobile")
const header = document.querySelector("#hero-body")
const container = document.getElementsByClassName("container")
const footer = document.querySelector("#footer")
const section = document.getElementById("section")
const iconLink = document.getElementById("icon-link")

const where = []
iconLink.toShow = false
iconLink.addEventListener("click", () => {
    if (iconLink.toShow === false) {
        const scroll = window.scrollY
        where.push(scroll)
        iconLink.toShow = true
        navMobile.style.display = "block"
        section.style.display = "none"
    }
    else {
        navMobile.style.display = "none"
        section.style.display = "block"
        iconLink.toShow = false
        window.scrollTo(0, where[0])
        where.pop()
    }
})
window.addEventListener("resize", () => {
    if (iconLink.style.display != "none") {
        navMobile.style.display = "none"
        section.style.display = "block"
    }
})

const goToAbout = () => console.log("go to about");
const goToProject = () => console.log("go to project");
const goToContact = () => console.log("go to contact");
