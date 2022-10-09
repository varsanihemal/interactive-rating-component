const mainContainer = document.querySelector(".container-main")
const thanksContainer = document.querySelector(".thank-you")
const submit = document.getElementsByClassName("submit-button")[0];
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submit.addEventListener('click', ()=>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none";
})

rates.forEach((rates)=>{
    rates.addEventListener('click', ()=>{
        rating.innerHTML = rates.innerHTML
    })
})

