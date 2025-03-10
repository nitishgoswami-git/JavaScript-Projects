
const loadJoke = async () => {
    try{
    const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random', {
        headers: {
            Accept: "application/json"
          }
    });    
    const data = await chuckNorrisFetch.json()
    document.querySelector('.joke').innerHTML = data.value;
}
catch(error){
    console.log(error)
}
};

document.querySelector('.refresh-button').addEventListener("click",loadJoke);

loadJoke();