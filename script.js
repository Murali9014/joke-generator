/* script.js */


function getJoke() {
    // Fallback to a random joke from a predefined array
    const jokes = [
        'Why are barbers some of the best drivers around?  Because they know all the short cuts.!',
        'What do you get if you cross a snowman and a vampire? Frostbite.',
        'How does a penguin build its house? Igloos it together.',
        'szdxgfhcj',
        'dgh',
        'fdgxhjkuih',

    ];
    document.getElementById('jokeDisplay').innerText = jokes[Math.floor(Math.random() * jokes.length)];
}
document.getElementById('jokeButton').addEventListener('click', getJoke);