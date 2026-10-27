const searchBar = document.querySelector(".search");
const searchBtn = document.querySelector(".find");
const moviesDisplay = document.querySelector(".mov-icon");
const downloadBtn = document.querySelector(".download-box");

searchBtn.addEventListener("click", moviesSearch);

function moviesSearch() {
    const enterTxt = searchBar.value;

    if(enterTxt.trim() === ""){
        return;
    }

    const formattedName = enterTxt[0].toUpperCase + enterTxt.slice(1).toLowerCase();
    console.log(enterTxt);


}

searchBar.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        moviesSearch();
    }
});