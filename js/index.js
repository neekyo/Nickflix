document.querySelector("form").onsubmit = function (e) {
    e.preventDefault();

    let movieName = document.querySelector("#navbarSupportedContent > form > input").value;

    axios.get(`http://www.omdbapi.com/?apikey=cb06939&s=${movieName}`).then((result) => {
        console.log(result)

        // axios.get(`http://www.omdbapi.com/?apikey=cb06939&i=${result.data.Search[0].imdbID}`).then(result2=>{
        //     console.log(result2)
        // }).catch((err) => {console.log(err)});

    }).catch((err) => {
        console.log(err)
    });
}

document.querySelector("#navbarSupportedContent > form > input").unclick

const myList = document.querySelectorAll("#s1 img");
const action = document.querySelectorAll("#s2 img");
const thrillers = document.querySelectorAll("#s3 img");
const horror = document.querySelectorAll("#s4 img");
const animated = document.querySelectorAll("#s5 img");
const comedies = document.querySelectorAll("#s6 img");
const tvShows = document.querySelectorAll("#s7 img");
const recentlyAdded = document.querySelectorAll("#s8 img");


for(let i = 1; i< myList.length; i++){
    myList[i].onclick = getOneRegister;
}
for(let i = 1; i< action.length; i++){
    action[i].onclick = getOneRegister;
}
for(let i = 1; i< thrillers.length; i++){
    thrillers[i].onclick = getOneRegister;
}
for(let i = 1; i< horror.length; i++){
    horror[i].onclick = getOneRegister;
}
for(let i = 1; i< animated.length; i++){
    animated[i].onclick = getOneRegister;
}
for(let i = 1; i< comedies.length; i++){
    comedies[i].onclick = getOneRegister;
}
for(let i = 1; i< tvShows.length; i++){
    tvShows[i].onclick = getOneRegister;
}
for(let i = 1; i< recentlyAdded.length; i++){
    recentlyAdded[i].onclick = getOneRegister;
}

// function getOneRegister(e) {
//     let id = Number(e.target.alt);
//     console.log(id)
//     axios.get("http://localhost:8000/movies/" +id)
//       .then((response) => {
//         console.log(response.data)
//       }).catch(err => console.error(err))
//   }
function getOneRegister(e) {
    let id = Number(e.target.alt);
    console.log(id, "+)_+_+_+_+_+")
    axios.get("db.json")
      .then((response) => {
        console.log(response.data)
        let movie = response.data.filter(id=>id===e.target.alt)
        console.log('the specific id is ',movie)
      }).catch(err => console.error(err))
  }