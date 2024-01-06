const jokeContainer = document.getElementById("jokeContent");
const newBtn = document.getElementById("btn");

const jokeAPIurl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () =>{
   fetch(jokeAPIurl)
   .then(data => data.json())
   .then(item => {
      // console.log(item.joke);
      jokeContainer.innerHTML = `${item.joke}`;
   })
   .catch(console.error());
}
newBtn.addEventListener('click', getJoke);
getJoke();