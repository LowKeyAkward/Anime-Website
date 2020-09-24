// base api path https://api.jikan.moe/v3
// search anime by title https://api.jikan.moe/v3/search/anime?q=${userInput}
// search manga by title https://api.jikan.moe/v3/search/manga?q=${userInput}

let input = document.querySelector("#search")
let button = document.querySelector("#button")
// let filtered = document.querySelector("#filter").value
// console.log(filtered)
// let userInput = input.value

// let test = async () => {
//   try {
//     let response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=kimetsu`)
//     console.log(response.data.results);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }

// test()

button.addEventListener("click", async (e) => {
  try {
    e.preventDefault();
    removeOldResult()
    let filtered = document.querySelector("#filter").value
    let userInput = input.value
    let response = await axios.get(`https://api.jikan.moe/v3/search/${filtered}?q=${userInput}&limit=10`)
    // let response = await axios.get("https://api.jikan.moe/v3/top/anime/1/airing")
    // console.log(response.data.top)
    searchResult(response.data.results)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
})

let resultDisplay = document.querySelector(".result")

let searchResult = searches => {
  searches.forEach(search => {
    let searchContainer = document.createElement("div")
    searchContainer.className = "search-result"

    let titleContainer = document.createElement("div")
    titleContainer.className = "title-result"

    let imageContainer = document.createElement("div")
    imageContainer.className = "image-result"

    let hiddenContainer = document.createElement("div")
    hiddenContainer.className = "hidden"
    hiddenContainer.style.display = "none"

    let image = document.createElement("img")
    image.setAttribute("src", search.image_url)
    imageContainer.appendChild(image)

    let title = document.createElement("h3")
    title.innerHTML = `${search.title}`
    titleContainer.appendChild(title)

    let rating = document.createElement("p")
    rating.innerHTML = `Rated: ${search.rated}`
    hiddenContainer.appendChild(rating)

    let episodes = document.createElement("p")
    episodes.innerHTML = `Episodes: ${search.episodes}`
    hiddenContainer.appendChild(episodes)

    let score = document.createElement("p")
    score.innerHTML = `Score: ${search.score}`
    hiddenContainer.appendChild(score)

    let synopsis = document.createElement("p")
    synopsis.innerHTML = `${search.synopsis}`
    hiddenContainer.appendChild(synopsis)

    searchContainer.addEventListener("click", () => {
      let hider = document.getElementsByClassName("hidden")
      for (let i = 0; i < hider.length; i++) {
        let hiders = hider[i].style
        hiders.display = hiders.display === "none" ? "block" : "none"
      }
    })

    searchContainer.appendChild(imageContainer)
    searchContainer.appendChild(titleContainer)
    searchContainer.appendChild(hiddenContainer)
    resultDisplay.appendChild(searchContainer)
  })
}

function removeOldResult() {
  let oldResult = document.querySelector(".result")
  while (oldResult.lastChild) {
    oldResult.removeChild(oldResult.lastChild)
  }
}

let recommended = document.querySelector(".recommended")

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

async function previewBox() {
  let url = "https://api.jikan.moe/v3/top/anime/1/airing"
  try {
    let response = await axios.get(url)
    // console.log(response.data.message)
    let previewImage = response.data.top
    recommendedPreview(previewImage)
    carousel()
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

previewBox()

//Carousel code is from w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
let myIndex = 0
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

function toggle(cls) {
  let hider = document.getElementsByClassName(cls)
  for (let i = 0; i < hider.length; i++) {
    let hiders = hider[i].style
    hiders.display = hiders.display === "none" ? "block" : "none"
  }
}

