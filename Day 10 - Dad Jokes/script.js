const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn,addEventListener('click', genertateJoke)

genertateJoke()

async function genertateJoke(){
    const config = {
        headers:{
            'Accept':'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}