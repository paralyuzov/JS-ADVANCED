function getArticleGenerator(articles) {
    let arrArticles = articles;

    return function display() {
        if (arrArticles.length === 0) {
            return;
        }
        let divRef = document.getElementById("content");
        let article = document.createElement("article");
        let line = arrArticles[0];
        article.textContent = line;
        divRef.appendChild(article);
        arrArticles.shift();


    }
}
