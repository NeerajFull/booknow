const submitBtn = document.getElementById("submitBtn");
const bookNowInput = document.getElementById("bookNowInput");
const bookNowBtn = document.getElementById("bookNowBtn");
const deleteBtn = document.getElementById("deleteBtn");


bookNowBtn.innerHTML = localStorage.getItem("bookNowString");


const displayBtn = () => {

    const val = bookNowInput.value;

    if (val.includes("</a>")) {
        localStorage.setItem("bookNowString", val);
    }

    bookNowBtn.innerHTML = localStorage.getItem("bookNowString");
    
}

submitBtn.addEventListener("click", () => {
    displayBtn();
    bookNowInput.value = ""
})


deleteBtn.addEventListener("click", () => {
    localStorage.removeItem("bookNowString");
    displayBtn();
})