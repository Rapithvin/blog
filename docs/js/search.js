document.addEventListener("DOMContentLoaded", () => {
    const searchOverlay = document.getElementById("searchOverlay");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    const posts = [
        { title: "Post 1", url: "/post1.html" },
        { title: "Post 2", url: "/post2.html" },
        { title: "Post 3", url: "/post3.html" },
        // Add more posts here
    ];

    // Open search overlay on Ctrl+P
    document.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.key === "o") {
            event.preventDefault();
            searchOverlay.style.display = "flex";
            searchInput.focus();
        }
    });

    // Close overlay on Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeSearchOverlay();
        }
    });

    function closeSearchOverlay() {
        searchOverlay.style.display = "none";
        searchInput.value = "";
        searchResults.innerHTML = "";
    }

    // Filter posts on input
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        const filteredPosts = posts.filter(post =>
            post.title.toLowerCase().includes(query)
        );

        filteredPosts.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            li.addEventListener("click", () => {
                window.location.href = post.url;
            });
            searchResults.appendChild(li);
        });
    });
});
