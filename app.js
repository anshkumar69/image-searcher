let container = document.querySelector(".container2")
let inputFilled = document.querySelector("#image-input")
let searchBtn = document.querySelector("#searchbtn")
let pageNo = 1
let apiKey = "Gu0hNPrc825E3SbU5eOg19JviDrfOpZM5rMsOl9Rz_Y"
let showMoreBtn = document.getElementById("morebtn")
let loader = document.querySelector(".hide") 

async function searchImage() {
    let keyword = inputFilled.value.trim();
    try {
    const finalApi = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${keyword}&per_page=12&client_id=${apiKey}`
    const response = await fetch(finalApi)
    const data = await response.json()
    console.log(data);
    
    if (data.total == 0)alert("Plz enter a write keyword")
    let result = data.results;

    result.map(element => {
    let img=document.createElement("img")
    img.src=element.urls.small
    let achors = document.createElement("a")
    achors.href = element.links.html
    achors.append(img)
    container.append(achors)
    showMoreBtn.style.display = "inline-block"
    });

}catch (error) {
    console.error("Error fetching images:", error);
    alert("Something went wrong! Check your internet connection.");
    }
}

searchBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    container.innerHTML=""
    pageNo = 1
    if (inputFilled.value === "") {
        alert("put some value on input box")
    }
    searchImage()
})  

showMoreBtn.addEventListener("click", ()=> {
    pageNo++
    searchImage()
})