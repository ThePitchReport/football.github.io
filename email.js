document.addEventListener("DOMContentLoaded", function () {
    // Retrieve articles from local storage
    var articles = JSON.parse(localStorage.getItem('articles')) || [];

    // Display articles on the page
    var newsContainer = document.getElementById('newsContainer');
    articles.forEach(function (article) {
        var articleEntry = "<div><h2>" + article.title + "</h2><p><strong>Author:</strong> " + article.author + "</p><p>" + article.content + "</p></div>";
        newsContainer.innerHTML += articleEntry;
    });

    // Simulate sending an email
    document.getElementById("sendEmailButton").addEventListener("click", function () {
        var emailContent = "Articles:\n";
        articles.forEach(function (article) {
            emailContent += "\nTitle: " + article.title + "\nAuthor: " + article.author + "\nContent: " + article.content + "\n\n";
        });

        // Simulate opening an email client
        window.location.href = "mailto:infoatthepitchreport@gmail.com?subject=New Articles&body=" + encodeURIComponent(emailContent);
    });
});
