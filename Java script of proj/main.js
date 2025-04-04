function searchInPage() {
    let searchText = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll(".country"); // Select all country items

    items.forEach(item => {
        let countryName = item.querySelector("p").innerText.toLowerCase();
        if (countryName.includes(searchText) || searchText === "") {
            item.style.display = "block"; // Show matching country
        } else {
            item.style.display = "none"; // Hide others
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchInput").addEventListener("input", searchInPage);
});
