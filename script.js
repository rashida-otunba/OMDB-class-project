//1. create an API key 
// const key= '816f6e36'; 

//url http://www.omdbapi.com/?i=tt3896198&apikey=816f6e36

//2. pull data into the screen and make a list of it appear 



// // URL about the movie 

// //http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=816f6e36





const key = `816f6e36`;

const inputBox = document.getElementById("input");
const searchButton = document.getElementById("button");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let heroName = inputBox.value;
    console.log(heroName);

  const url= `https://www.omdbapi.com/?s=${heroName}&page=2&apikey=${key}`; 



    // console.log(url)

    fetch(url)
    .then((response) => response.json())
    .then(responseData => {
        // console.log(responseData.Search)
        showResults(responseData.Search)})
    .catch(error => alert("Make sure to put your API key in the code"));
    

});

function showResults(results) {
console.log(results)

  results.forEach(result => {
    let item = document.createElement("li");
    item.innerHTML = result.Title;
    document.getElementById("results").appendChild(item);

  
   
  });
}




// const key = "2a60d078f103c0c8e9dd58fd7257eddf"

// const inputBox = document.getElementById("input");
// const searchButton = document.getElementById("button");

// searchButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     let movieName = inputBox.value;
//     console.log(movieName);

//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${movieName}&page1&include_adult=false`

//     console.log(url)

//     fetch(url)
//     .then((response) => response.json())
//     .then(responseData => showResults(responseData.results))
//     .catch(error => alert("Make sure to put your API key in the code"));
    

// });

// function showResults(results) {
//   results.forEach(result => {
//     let item = document.createElement("li");
//     item.innerHTML = result.title;
//     document.getElementById("results").appendChild(item);
//   });
// }


//shayma code 


// function goFetch() {
//     // console.dir(url);
//     // console.dir(url.value);

//     fetch(url.value) //fetch request//
//     .then(response => response.json())
//     .then(data => {
//         console.dir(data);

//         for (key in data) {
//             console.dir(key);
//             console.dir(data[key]);


//             let tempP = document.createElement("p");
//             tempP.textContent =`${key}: ${data[key]}`;
//             resDIV.appendChild(tempP);
//         }