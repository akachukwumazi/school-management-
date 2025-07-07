const humber = document.getElementById("humber");
const asideNav = document.getElementById("asideNav");
const dashboardBtn = document.getElementById("dashboard");
const teacherBtn = document.getElementById("teacher");
const studentBtn = document.getElementById("student");
const dashboards = document.getElementById("dashboards");
const teachers = document.getElementById("teachers");
const students = document.getElementById("students");
const AddTeacherBtn = document.getElementById("AddTeacherBtn");
const AddStudentBtn = document.getElementById("AddStudentBtn");
const addTeachers = document.getElementById("addTeachers");
const addStudents = document.getElementById("addStudents");
const techerCancel = document.getElementById("techerCancel");
const studentCancel = document.getElementById("studentCancel");
let isClosed = asideNav.classList.contains("collapsed")
const navLinks = document.querySelectorAll(".nav-link");

humber.addEventListener("click", () => {
    const isMenu = humber.getAttribute("icon") === "iconamoon:menu-burger-horizontal";
    if (isMenu) {
        humber.setAttribute("icon", "mdi:close"); 
        asideNav.classList.add("collapsed")
    } else {
        humber.setAttribute("icon", "iconamoon:menu-burger-horizontal"); 
        asideNav.classList.remove("collapsed")
    }
});



function clearNavActiveState() {
    navLinks.forEach(link => {
        link.classList.remove("bg-[#509CDB]");
    });
}

function hideAllSections() {
    dashboards.classList.add("hidden");
    teachers.classList.add("hidden");
    students.classList.add("hidden");
}

// Function to hide all sections


// Event listeners
dashboardBtn.addEventListener("click", () => {
    hideAllSections();
    dashboards.classList.remove("hidden");
    clearNavActiveState();
    dashboardBtn.classList.add("bg-[#509CDB]");
});

teacherBtn.addEventListener("click", () => {
    hideAllSections();
    teachers.classList.remove("hidden");
    clearNavActiveState();
    teacherBtn.classList.add("bg-[#509CDB]");
});

studentBtn.addEventListener("click", () => {
    hideAllSections();
    students.classList.remove("hidden");
    clearNavActiveState();
    studentBtn.classList.add("bg-[#509CDB]");
});


AddTeacherBtn.addEventListener("click", () => {
    addTeachers.classList.remove("hidden")
})
AddStudentBtn.addEventListener("click", () => {
    addStudents.classList.remove("hidden")
})
addTeachers.onclick = (e) => {
    if (!e.target.closest(".modal-content")) {
    addTeachers.classList.add("hidden");
  }
}
addStudents.onclick = (e) => {
    if (!e.target.closest(".modal-content")) {
    addStudents.classList.add("hidden");
  }
}

techerCancel.onclick = () => {
    addTeachers.classList.add("hidden");
}
studentCancel.onclick = () => {
    addStudents.classList.add("hidden");
}