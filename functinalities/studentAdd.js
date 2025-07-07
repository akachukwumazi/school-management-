const nameInput = document.getElementById("name");
const classInput = document.getElementById("class");
const genderInput = document.getElementById("gender");
const email = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const addStudentBtn = document.getElementById("addStudentBtn");
const addStudent = document.getElementById("addStudents");
const noStudents = document.getElementById("noStudents");
const studentsList = document.getElementById("studentsList");
const deleteModal = document.getElementById("deleteModal");
const deleteYesBtn = document.getElementById("deleteYesBtn");
const numberOfStudents = document.getElementById("numberOfStudents");
const deleteNoBtn = document.getElementById("deleteNoBtn");



  

const studentList = [];
let selectedOne = null;
let n = 0;


// console.log(nameInput, classInput, genderInput, email, phoneInput, passwordInput, addStudentBtn);

function updateStudentbg() {
    [...studentsList.children].forEach((itm, index) => {
        if ((index + 1) % 2 === 0) {
            itm.classList.add("bg-gray-100");
        } else {
            itm.classList.remove("bg-gray-100");
        }
    });
}


addStudentBtn.addEventListener("click", () => {
    
    const student = {
        name: nameInput.value.trim(),
        class: classInput.value,
        Gender: genderInput.value,
        email: email.value.trim(), 
        Phone: phoneInput.value,
        password: passwordInput.value.trim(),
        id: n++
    };
    studentList.push(student);
    console.log(student.id);
    
    studentCount();

    
    
    studentsList.innerHTML += `
    
    <div class="flex w-full h-max items-center justify-between p-3 rounded mb-2 shadow-sm" id ="student-${student.id}">
    <div class="flex w-max h-max items-center gap-2">
    <img src="https://pbs.twimg.com/profile_images/1925304109835390976/VxKjB5oo_400x400.jpg" alt="cdcdc" class="h-[2em] w-[2em]">
    <h2 class="text-zinc-500 text-[1.2em]">${student.name}</h2>
    </div>
    <p class="text-zinc-500 text-[1em]">${3458574}</p>
    
    <p class="text-zinc-500 text-[1em]">${student.email}</p>
    
    <p class="text-zinc-500 text-[1em]">${student.class}</p>
    <p class="text-zinc-500 text-[1em]">${student.Gender}</p>
    <iconify-icon icon="mdi:delete" class="text-red-500 cursor-pointer deleteBtn"></iconify-icon>
    </div>
    ` 
    
    // studentsList.appendChild(studentItem);
    updateStudentbg();
    console.log(studentsList);
    // console.log(allDeleteBtn);
    addStudent.classList.add("hidden");

    
    if (studentList.length > 0) {
        noStudents.classList.add("hidden");
    } else {
        noStudents.classList.remove("hidden");
    };
    
    // Clear input fields after adding
    nameInput.value = '';
    classInput.value = '';
    genderInput.value = '';
    email.value = '';
    phoneInput.value = '';
    passwordInput.value = '';
    return n;
});


studentsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
        const studentItem = e.target.closest("[id^='student-']");
        const idString = studentItem?.id; // e.g., "student-3"
        const id = parseInt(idString?.split("-")[1]); // just 3

        // selectedOne = n-1; // Assuming the last added student is the one to be deleted
        selectedOne = id; // Set the selected ID to the one clicked
        console.log("Selected ID for deletion:", selectedOne);

        deleteModal.classList.remove("scale-0");
        deleteModal.classList.add("scale-100");

        console.log("Delete button clicked on ID:", selectedOne);
    }
});

deleteYesBtn.addEventListener("click", () => {
    const removeItem = document.getElementById(`student-${selectedOne}`);
    // n --; // Decrement the ID counter
    console.log("Removing student with ID:", selectedOne);
    if (removeItem) {
        removeItem.remove();
         const index = studentList.findIndex(s => s.id === selectedOne);
        if (index !== -1) {
            studentList.splice(index, 1);
        }// Remove the student from the list
        console.log("Student removed:", selectedOne);
    }
    updateStudentbg();
    if (studentList.length === 0) {
        noStudents.classList.remove("hidden");
        noStudents.classList.add("block");
    }
    deleteModal.classList.remove("scale-100");
    deleteModal.classList.add("scale-0");
    console.log(studentList);
    studentCount();
    // Clear selectedOne after deletion
});

deleteNoBtn.addEventListener("click", () => {
    deleteModal.classList.remove("scale-100");
    deleteModal.classList.add("scale-0");
});




deleteModal.addEventListener('click', (e) => {
    if (!e.target.closest('.nwa')) {
        deleteModal.classList.remove("scale-100");
        deleteModal.classList.add("scale-0");
    }
});

function studentCount() {
    numberOfStudents.textContent = `Number of Students: ${studentList.length}`;
    
};



//     function deleteF() {
//     deleteModal.classList.remove("scale-0");
//     deleteModal.classList.add("scale-100");
// };


