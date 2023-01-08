const button = document.querySelectorAll(".score");
const submitBtn = document.querySelector(".btn-submit")

for (let i=0; i<button.length; i++) {
    button[i].addEventListener("click", (e) =>{
        localStorage.setItem('score', e.target.value);
    }) 
}

submitBtn.addEventListener("click", () =>{
    window.location.href = "rating.html";
})
