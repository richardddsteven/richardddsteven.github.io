// app.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Service Worker registered!', reg))
        .catch(err => console.log('Service Worker registration failed:', err));
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            const container = document.getElementById("posts");
            posts.slice(0, 10).forEach(post => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                container.appendChild(card);
            });
        });
});