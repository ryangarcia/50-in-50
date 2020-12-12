const jokeEl = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

generateJoke()
btn.addEventListener('click', () => generateJoke())


async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  // fetch('https://icanhazdadjoke.com', config)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     jokeEl.innerHTML = data.joke
  //   })

  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}