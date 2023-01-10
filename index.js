const button = document.querySelectorAll(".input");
const submitBtn = document.querySelector(".btn-submit");

for (let i=0; i<button.length; i++) {
    button[i].addEventListener("click", () => {
        localStorage.setItem('input', button[i].value)

    })
}

submitBtn.addEventListener("click", () =>{
    window.location.href = "rating.html";
})
