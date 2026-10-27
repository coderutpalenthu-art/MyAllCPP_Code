const searchBar = document.querySelector(".search");
const findCity = document.querySelector(".find");
const cityName = document.querySelector(".city-name");
const tempBar = document.querySelector(".temp");


findCity.addEventListener("click", searching);

function searching() {
    const enterTxt = searchBar.value;

    if (enterTxt.trim() === "") {
        return;
    }
    
    const formattedCity = enterTxt[0].toUpperCase()+enterTxt.slice(1).toLowerCase();
    console.log(enterTxt);
    
}

searchBar.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        searching();
        
    }
   
});




