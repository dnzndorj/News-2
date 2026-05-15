document.addEventListener("DOMContentLoaded", () => {
    const cardImagePath = "../main/article.jpg";

    // Fetch similar news data from JSON to populate the bottom section
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('similar-news-container');
            data.forEach(article => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${cardImagePath}" alt="News Image">
                    <div class="card-content">
                        <h3>${article.title}</h3>
                        <p class="card-meta">${article.date} • Author: ${article.author}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading similar news:", error));
});

// Function to smoothly scroll back to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
