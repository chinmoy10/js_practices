const ulTag = document.getElementById("nav-containe");

const listItems = document.getElementsByTagName("li");

let lastClicked = null;

for(let singleListItem of listItems){
    singleListItem.addEventListener("click", function(){

        if(lastClicked == null){
            singleListItem.classList.add("bg-slate-600", "hover:text-red-400");
            lastClicked = singleListItem
        }else{
            lastClicked.classList.remove("bg-slate-600", "hover:text-red-400")
            singleListItem.classList.add("bg-slate-600", "hover:text-red-400");
            lastClicked = singleListItem
        }


    })
}