function createCardHTML(article, isLarge = false, link = "") {
    let cardClass = isLarge ? "card large-card" : "card";
    let tagName = link ? "a" : "div";
    let linkAttribute = link ? ` href="${link}"` : "";
    let imagePath = "article.jpg";
    
    return `
        <${tagName} class="${cardClass}"${linkAttribute}>
            <div class="bookmark-icon">Save</div>
            <img src="${imagePath}" alt="News Image">
            <div class="card-content">
                <div>
                    <h3>${article.title}</h3>
                    <p class="card-meta">${article.date} • Author: ${article.author}</p>
                </div>
                <div class="bias-bar-container">
                    <div class="bias-left" style="width: ${article.bias.left}"></div>
                    <div class="bias-center" style="width: ${article.bias.center}"></div>
                    <div class="bias-right" style="width: ${article.bias.right}"></div>
                </div>
            </div>
        </${tagName}>
    `;
}
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        //Today's News
        const todayContainer = document.getElementById('today-news-container');
        todayContainer.innerHTML = 
            createCardHTML(data[0], false, '../article/article.html') + 
            createCardHTML(data[1], true) + 
            createCardHTML(data[2]);

        //Featured News
        const featuredTop = document.getElementById('featured-top-container');
        featuredTop.innerHTML = 
            createCardHTML(data[3], true) + 
            createCardHTML(data[0], true);

        const featuredBottom = document.getElementById('featured-bottom-container');
        featuredBottom.innerHTML = 
            createCardHTML(data[4]) + 
            createCardHTML(data[2]) + 
            createCardHTML(data[5]) + 
            createCardHTML(data[1]);

        //Latest News
        const latestTop = document.getElementById('latest-top-container');
        latestTop.innerHTML = 
            createCardHTML(data[3], true) + 
            createCardHTML(data[0], true); 

        const latestBottom = document.getElementById('latest-bottom-container');
        latestBottom.innerHTML = 
            createCardHTML(data[4]) + 
            createCardHTML(data[2]) + 
            createCardHTML(data[5]) + 
            createCardHTML(data[1]); 

        // --- 4. Saved News (4 small cards) ---
        const savedContainer = document.getElementById('saved-news-container');
        savedContainer.innerHTML = 
            createCardHTML(data[4]) + 
            createCardHTML(data[2]) + 
            createCardHTML(data[5]) + 
            createCardHTML(data[1]); 
    })
    .catch(error => {
        console.error("Error loading news data:", error);
        document.querySelector('main').innerHTML = "<p style='text-align:center;'>Please run this code using a local web server (like Live Server in VSCode) to allow fetch() to load the JSON file.</p>";
    });
