const bugerContain = document.getElementById("bugerContain");
const buger = document.getElementById("buger");
const nav = document.getElementById("nav");

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