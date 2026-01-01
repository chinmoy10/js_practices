console.log("Happy New Year 2026");

const count = document.getElementById("count");

function increaseCount(){
    let currentCount = Number(count.innerText);
    if(currentCount < 26){

        currentCount++;// currentcount = currentCount + 1
    }
    count.innerText = currentCount;
    // console.log("increase", currentCount);
}

function decreaseCount(){
    let currentCount = Number(count.innerText);
    if(currentCount > 0){
        currentCount--;
        // console.log("invalid number"); 
    }
    count.innerText = currentCount;
    // console.log(currentCount);
}