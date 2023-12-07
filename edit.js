document.addEventListener("DOMContentLoaded", function () {
    // Retrieve articles from local storage
    var articles = JSON.parse(localStorage.getItem('articles')) || [];

    // Display articles on the page
    var newsContainer = document.getElementById('newsContainer');
    articles.forEach(function (article) {
        var articleEntry = "<div><h2>" + article.title + "</h2><p><strong>Author:</strong> " + article.author + "</p><p>" + article.content + "</p></div>";
        newsContainer.innerHTML += articleEntry;
    });

    // Show modal when the "Send Email" button is clicked
    document.getElementById("sendEmailButton").addEventListener("click", function () {
        var emailContent = "Articles:\n";
        articles.forEach(function (article) {
            emailContent += "\nTitle: " + article.title + "\nAuthor: " + article.author + "\nContent: " + article.content + "\n\n";
        });

        // Show modal
        showModal(emailContent);
    });

    // Function to show the modal
    function showModal(emailContent) {
        var modal = document.getElementById('myModal');
        var modalContent = document.getElementById('modalContent');
        var emailBody = document.getElementById('emailBody');

        // Set the email content in the modal
        emailBody.textContent = emailContent;

        // Show the modal
        modal.style.display = 'block';

        // Close the modal when the close button is clicked
        document.getElementById('closeModalButton').addEventListener('click', function () {
            modal.style.display = 'none';
        });

        // Close the modal if the user clicks outside of it
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
