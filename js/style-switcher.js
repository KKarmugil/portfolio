const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open")
})
window.addEventListener("scroll" , () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
// theme colors
const alternateStyles= document.querySelectorAll(".alternative-style")
function setActiveStyle(color)
{
    alternateStyles.forEach((style)=>{
        if(color  === style.getAttribute("title"))
    {
        style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }

    })
}
//theme
document.querySelector(".day-night").addEventListener("click",()=>{
    document.querySelector(".day-night").querySelector("i").classList.toggle("fa-sun");
    document.querySelector(".day-night").querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    
    if(document.body.classList.contains("dark"))
    {
        console.log("dark")
        document.querySelector(".day-night").querySelector("i").classList.add("fa-sun");
    }
    else
    {
        console.log("light")
        document.querySelector(".day-night").querySelector("i").classList.add("fa-moon")
    }
})