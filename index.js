const bugerContain = document.getElementById("bugerContain");
const buger = document.getElementById("buger");
const nav = document.getElementById("nav");
const home = document.getElementById("home");
const cases = document.getElementById("cases");
const faq = document.getElementById("faq");
const pricing = document.getElementById("pricing");
const locatio = document.getElementById("location");
const company = document.getElementById("company");
const navLinks = document.querySelectorAll(".navLinks")


bugerContain.addEventListener("click", () => {
    if(buger.classList.contains("fa-bars")){
        buger.classList.remove("fa-bars")
        buger.classList.add("fa-x")
        nav.style.left = "0"
    }else{
        buger.classList.remove("fa-x")
        buger.classList.add("fa-bars")
        nav.style.left = ""        
    }    
})

// console.log(navLinks);  

const removeAll = (e) => {
    if (e) e.preventDefault()
    navLinks.forEach(links  => {
        links.classList.remove("lg:text-white");
    });
};

navLinks.forEach(links =>{
    links.addEventListener("click", (e) =>{
        e.preventDefault();
        removeAll();
        home.classList.remove("text-white")
        links.classList.remove("text-zinc-500")
        links.classList.add("lg:text-white")
    })
});