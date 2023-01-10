const button = document.querySelectorAll(".input");
const submitBtn = document.querySelector(".btn-submit");
let finalRate = document.querySelector("#rating-final");

for (let i=0; i<button.length; i++) {
    button[i].addEventListener("click", () => {
        console.log(button[i].value);
        finalRate = button[i].value;

    })
}



submitBtn.addEventListener("click", () =>{
    window.location.href = "rating.html";
})
console.log(button[0].value);