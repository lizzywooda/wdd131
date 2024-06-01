let articlesContainer = document.getElementById('articles-container');

articles.forEach(article => {
    const articleElement = document.createElement('article'); 
    articleElement.innerHTML = `
        <div class="book-info">
            <div class="book-meta">
                <p>${article.date}</p>
                <p>${article.ages}</p>
                <p>${article.genre}</p>
                <p>${article.stars}</p>
            </div>
            <div class="book-content">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
                <p>${article.description} <a href="#">Read More...</a></p>
            </div>
        </div>
    `;
    articlesContainer.appendChild(articleElement);
});
