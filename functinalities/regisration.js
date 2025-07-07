const createNewAccountBtn = document.getElementById("createNewAccountBtn");
const createNewAccount = document.getElementById("createNewAccount");
const choosePassword = document.getElementById("choosePassword");
const choosePasswordBtn = document.getElementById("choosePasswordBtn");
const staffSelection = document.getElementById("staffSelection")
const staffSelectionBtn = document.getElementById("staffSelectionBtn")
const logIn = document.getElementById("logIn")
const backBtnl = document.getElementById("backBtnl");
const backBtn2 = document.getElementById("backBtn2");
const back1 = document.getElementById("back1");
const yourPassin = document.getElementById("yourPassin");
const yourpass = document.getElementById("yourpass");
const Confirmin = document.getElementById("Confirmin");
const confirmh = document.getElementById("confirm");
const   dot2 = document.getElementById("dot2");
const   dot3 = document.getElementById("dot3");
const   dot4 = document.getElementById("dot4");
const   progressLine = document.getElementById("progressLine");

let currentPageId;




createNewAccountBtn.addEventListener("click", (e) => {
    e.preventDefault();
     createNewAccount.classList.remove("translate-x-0", "opacity-100");
     createNewAccount.classList.add("-translate-x-full", "opacity-0");

    choosePassword.classList.remove("translate-x-full", "opacity-0");
    choosePassword.classList.add("translate-x-0", "opacity-100");

    dot2.style.background = "green"
    progressLine.style.width = "33.33%";
});

back1.addEventListener("click", (e) => {
    e.preventDefault();
    choosePassword.classList.remove("translate-x-0", "opacity-100");
    choosePassword.classList.add("translate-x-full", "opacity-0");

    createNewAccount.classList.remove("-translate-x-full", "opacity-0");
    createNewAccount.classList.add("translate-x-0", "opacity-100");

    dot2.style.background = "#2D88D4"
    progressLine.style.width = "0";

})


choosePasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();
     choosePassword.classList.remove("translate-x-0", "opacity-100");
     choosePassword.classList.add("-translate-x-full", "opacity-0");

    staffSelection.classList.remove("translate-x-full", "opacity-0");
    staffSelection.classList.add("translate-x-0", "opacity-100");

    dot3.style.background = "green"
    progressLine.style.width = "66.66%";
});

backBtn2.addEventListener("click", (e) => {
    e.preventDefault();
    staffSelection.classList.remove("translate-x-0", "opacity-100");
    staffSelection.classList.add("translate-x-full", "opacity-0");

    choosePassword.classList.remove("-translate-x-full", "opacity-0");
    choosePassword.classList.add("translate-x-0", "opacity-100");

    dot3.style.background = "#2D88D4"
    progressLine.style.width = "33.33%";

})


staffSelectionBtn.addEventListener("click", (e) => {
    e.preventDefault();
     staffSelection.classList.remove("translate-x-0", "opacity-100");
     staffSelection.classList.add("-translate-x-full", "opacity-0");

    logIn.classList.remove("translate-x-full", "opacity-0");
    logIn.classList.add("translate-x-0", "opacity-100");

    dot4.style.background = "green"
    progressLine.style.width = "100%";


});

backBtnl.addEventListener("click", (e) => {
    e.preventDefault();
    logIn.classList.remove("translate-x-0", "opacity-100");
     logIn.classList.add("translate-x-full", "opacity-0");

     staffSelection.classList.remove("-translate-x-full", "opacity-0");
     staffSelection.classList.add("translate-x-0", "opacity-100");

    dot4.style.background = "#2D88D4"
    progressLine.style.width = "66.66%";


})


yourpass.onclick = () => {
    // console.log("dfdvjfkvn");
    
    if (yourPassin.type === "password") {
        yourPassin.type = "text";
        yourpass.setAttribute("icon", "la:eye-slash")
    }
    else{
        yourPassin.type = "password";
        yourpass.setAttribute("icon", "typcn:eye-outline")
    };
};
confirmh.onclick = () => {
    // console.log("dfdvjfkvn");
    
    if (Confirmin.type === "password") {
        Confirmin.type = "text";
        confirmh.setAttribute("icon", "la:eye-slash")
    }
    else{
        Confirmin.type = "password";
        confirmh.setAttribute("icon", "typcn:eye-outline");
    }
}