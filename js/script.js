const btnEl = document.querySelector('#btn');
const joke = document.querySelector('#joke');

const apikey = "tMQAE8stFTPhlkH4ld1ilw==YYMzJ7Ms42XSA1zS";

const options = {
    method:'GET',
    headers:{
        "X-Api-Key": apikey,
    }
}

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    joke.innerHTML = "Updating...";
    btnEl.disabled = true;
    btnEl.innerHTML = "Loading";
    const response = await fetch(apiUrl,options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerHTML = "TELL ME A JOKE";

    joke.innerHTML= data[0].joke;
}
btnEl.addEventListener('click', getJoke);

