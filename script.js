const numbers = document.getElementsByClassName("num");
const btn = document.getElementById("button");
const hidden = document.getElementsByClassName("hidden");
const rate = document.getElementById("rate");

let initial_value = 0;
for (let num of numbers) {
    
  num.addEventListener("click", (e) => {
    initial_value = e.target.innerText;
    num.className = "num num-selected";
    });
}


btn.addEventListener("click", () => {
  hidden[0].className = "container";
  rate.textContent = initial_value;
});


