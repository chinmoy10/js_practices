const count = document.getElementById("count");
const counter = document.getElementById("counter");

const increaseBtn = document.getElementById("increaseCount");

const decreaseBtn = document.getElementById("decreaseCount")

counter.addEventListener("click", function () {
    if(increaseBtn.getAttribute("disabled") == null){
        increaseBtn.setAttribute("disabled", true);
        decreaseBtn.setAttribute("disabled", true);
        counter.style.backgroundColor = "yellow"
    } else{
        increaseBtn.removeAttribute("disabled");
        decreaseBtn.removeAttribute("disabled");
        counter.removeAttribute("style"); 

    }
})

increaseBtn.addEventListener("click", function (event) {
    let currentCount = Number(count.innerText);
    if (currentCount < 26) {
        currentCount++;
    }
    count.innerHTML = currentCount;
    event.stopPropagation();
})

decreaseBtn.addEventListener("click", function(event){
    let currentCount = Number(count.innerText);
    if(currentCount > 0){
        currentCount--;
    }
    count.innerText = currentCount;
    event.stopPropagation();
})

