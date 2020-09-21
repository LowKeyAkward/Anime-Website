// base api path https://api.jikan.moe/v3
// search anime by title https://api.jikan.moe/v3/search/anime?q=${userInput}
// search manga by title https://api.jikan.moe/v3/search/manga?q=${userInput}

let input = document.querySelector("#search")
let button = document.querySelector("#button")
let userInput = input.value

// let test = async () => {
//   try {
//     let response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=kimetsu`)
//     console.log(response.data.results);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }

// test()

let getTitle = async () => {
  try {
    let response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${userInput}`)
    console.log(response)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}