console.log("hello");
const ulTag = document.getElementById("nav-container");

const listItems = document.getElementsByTagName("li");

let lastClicked = null;

for (let singleListItem of listItems) {
    singleListItem.addEventListener("click", function () {
        if(lastClicked == null){
            singleListItem.classList.add("bg-red-600");
            lastClicked = singleListItem;
        }else{
            lastClicked.classList.remove("bg-red-600");
            singleListItem.classList.add("bg-red-600");
            lastClicked = singleListItem;
        }
    })
}