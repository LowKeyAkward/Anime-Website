// base api path https://api.jikan.moe/v3
// search anime by title https://api.jikan.moe/v3/search/anime?q=${userInput}
// search manga by title https://api.jikan.moe/v3/search/manga?q=${userInput}

let input = document.querySelector("#search")
let button = document.querySelector("#button")
let resultDisplay = document.querySelector(".result")
let recommended = document.querySelector(".recommended")
let myIndex = 0

//Search Button Event
button.addEventListener("click", async (e) => {
  try {
    e.preventDefault();
    removeOldResult() //line 81
    let filtered = document.querySelector("#filter").value //value taken from select form
    let userInput = input.value
    let response = await axios.get(`https://api.jikan.moe/v3/search/${filtered}?q=${userInput}&limit=10`)
    searchResult(response.data.results) //line 26
  } catch (error) {
    console.log(`Error: ${error}`)
  }
})

//Function that loops through API than Appends results to results div
let searchResult = searches => {
  searches.forEach(search => {
    let searchContainer = document.createElement("div") //Main Div
    searchContainer.className = "search-result"

    let titleContainer = document.createElement("div") //Title Div
    titleContainer.className = "title-result"

    let imageContainer = document.createElement("div") //Image Div
    imageContainer.className = "image-result"

    let hiddenContainer = document.createElement("div") //Hidden Div
    hiddenContainer.className = "hidden"
    hiddenContainer.style.display = "none"

    let image = document.createElement("img") //grabs images from API than appends them to Image Div
    image.setAttribute("src", search.image_url)
    imageContainer.appendChild(image)

    let title = document.createElement("h3") //grabs title from API than appends them to Title Div
    title.innerHTML = `${search.title}`
    titleContainer.appendChild(title)

    let rating = document.createElement("p") //grabs rating from API than appends them to Hidden Div
    rating.innerHTML = `Rated: ${search.rated}`
    hiddenContainer.appendChild(rating)

    let episodes = document.createElement("p") //grabs episodes from API than appends them to Hidden Div
    episodes.innerHTML = `Episodes: ${search.episodes}`
    hiddenContainer.appendChild(episodes)

    let score = document.createElement("p") //grabs score from the API than appends them to Hidden Div
    score.innerHTML = `Score: ${search.score}`
    hiddenContainer.appendChild(score)

    let synopsis = document.createElement("p") //grabs synopsis from API than appends them to Hidden Div
    synopsis.innerHTML = `${search.synopsis}`
    hiddenContainer.appendChild(synopsis)

    searchContainer.addEventListener("click", () => { //an on click event that toggles the hidden divs display from "none" to "block"
      let hider = document.getElementsByClassName("hidden") //set hidden class to hider
      for (let i = 0; i < hider.length; i++) { //loop through the hider array
        let hiders = hider[i].style //set hiders to the value of wherever the loop is at in hiders style
        hiders.display = hiders.display === "none" ? "block" : "none" //if where ever in the hiders array style.display = none change it to block, if not = none change it none
      }
    })
    //this sections appends title, image, and hidden to the main search container, which is than appended to the result display.
    searchContainer.appendChild(imageContainer)
    searchContainer.appendChild(titleContainer)
    searchContainer.appendChild(hiddenContainer)
    resultDisplay.appendChild(searchContainer)
  })
}

//function to clear out old search results, used in line 15.
function removeOldResult() {
  let oldResult = document.querySelector(".result")
  while (oldResult.lastChild) {
    oldResult.removeChild(oldResult.lastChild)
  }
}

//a function that is made to loop through the APIs top airing and append it to the page
let recommendedPreview = previews => {
  previews.forEach(preview => {
    let previewContainer = document.createElement("div")
    previewContainer.className = "preview-result"

    let image = document.createElement("img")
    image.setAttribute("src", preview.image_url)
    previewContainer.appendChild(image)

    recommended.appendChild(previewContainer)
  })
}

//async function to call upon the API
async function previewBox() {
  let url = "https://api.jikan.moe/v3/top/anime/1/airing"
  try {
    let response = await axios.get(url)
    let previewImage = response.data.top
    recommendedPreview(previewImage) //line 88
    carousel() //line 118
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

previewBox()

//Carousel code is from w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
function carousel() {
  let i;
  let x = document.querySelectorAll(".preview-result")
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "flex"
  setTimeout(carousel, 3000)
}

