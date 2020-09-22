// base api path https://api.jikan.moe/v3
// search anime by title https://api.jikan.moe/v3/search/anime?q=${userInput}
// search manga by title https://api.jikan.moe/v3/search/manga?q=${userInput}

let input = document.querySelector("#search")
let button = document.querySelector("#button")
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
    let userInput = input.value
    let response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${userInput}&limit=10`)
    console.log(response.data.results)
    // searchResult(response.data.results)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
})

let resultDisplay = document.querySelector("result")

let searchResult = searches => {
  searches.forEach(search => {
    let searchContainer = document.createElement("div")
    searchContainer.className = "search-result"

    // let image = document.createElement("img")
    // image.setAttribute("src", search.image_url)
    // searchContainer.appendChild(image)

    let title = document.createElement("h3")
    title.innerHTML = `${search.title}`
    searchContainer.appendChild(title)

  })
  resultDisplay.appendChild(searchContainer)
}