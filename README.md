# Project Overview

## Project Name

What's That Anime

## Project Description

This project uses HTML, CSS, JS, and the API which pulls it data from https://myanimelist.net/ in order to create a website that will give you information about your favorite anime, and potentially recommend you other anime that you should if interested!

## API and Data Sample

The API being used is Jikan (https://jikan.moe/)

	request_hash: "request:search:9a12998bc262504005c97fca79f3d17d34ae7f34",
	request_cached: true,
	request_cache_expiry: 431726,
	results: [
	{
	mal_id: 38000,
	url: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba",
	image_url: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda",
	title: "Kimetsu no Yaiba",
	airing: false,
	synopsis: "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjo...",
	type: "TV",
	episodes: 26,
	score: 8.69,
	start_date: "2019-04-06T00:00:00+00:00",
	end_date: "2019-09-28T00:00:00+00:00",
	members: 1039463,
	rated: "R"
	}

## Wireframes

![Wireframe](https://i.imgur.com/kEY8BtB.jpg)

#### MVP 

- Able to use the API https://jikan.moe/
- Renders the Anime and Manga data on the page 
- Has a functioning search input for titles
- Differentiate between Manga or Anime in the search
- Displays additional information about the title, not just the synopsis

#### PostMVP  

- Allows users to sort via Season, Genre, or Ratings
- Has a recommended Anime and Manga section, that will automatically scroll itself
- Have a well designed CSS page, that may include small animations
- Create additional Previews detailed by Genres

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval | Incomplete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://i.imgur.com/uIp8OJG.jpg)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Create a Searchbar | H | 1.5hrs | 1hrs | 45min |
| Recommended Section | M | 2hrs | 1hrs | 1hrs |
| Anime/Manga Filter | M | 2hrs| 20min | 20min |
| Search result | H | 1.5hrs | 7hrs | 7hrs |
| Make Recommended Carousel | L | 1hrs | 10min | 10min |
| Create a filter | L | 3hrs | N/A | N/A |
| Style Websiter | H | 3hrs | 4hrs | 4hrs |
| Media Query | H | 2hrs | 20min | 20min |
| Additonal stlying/animation | L | 3hrs | N/A | N/A |
| Preview images by Genre | L | 2hrs | N/A | N/A |
| Upon Load animation | L | 2hrs | N/A | N/A |
| Audio Ques | L | 1hrs | N/A | N/A |
| Additional Recommendation based of search| L | 3hrs | N/A | N/A |
| Seperate page Search Result | L | 3hrs | N/A | N/A |
| Total | H | 36hrs| 21hrs | 19.5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
