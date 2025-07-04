document.addEventListener('DOMContentLoaded', function() {
    // Select all parent containers of the country cards
    const countriesContainers = document.querySelectorAll('.countries, .countries.2, .countries.3');

    // Create an array to hold all the country cards
    let allCountries = [];

    // Loop through each container to get the flip-cards
    countriesContainers.forEach(container => {
        const countries = container.querySelectorAll('.flip-card, .flip-card.2, .flip-card.3, .flip-card.33');
        countries.forEach(country => {
            allCountries.push(country);
        });
    });

    // Sort the country cards based on the country name
    allCountries.sort((a, b) => {
        const countryNameA = a.querySelector('a').textContent.trim().toLowerCase();
        const countryNameB = b.querySelector('a').textContent.trim().toLowerCase();

        if (countryNameA < countryNameB) {
            return -1;
        }
        if (countryNameA > countryNameB) {
            return 1;
        }
        return 0;
    });

    // Clear the existing content of the containers
    countriesContainers.forEach(container => {
        container.innerHTML = '';
    });

    // Append the sorted country cards to the first container
    const firstContainer = document.querySelector('.countries');
    allCountries.forEach(country => {
        firstContainer.appendChild(country);
    });
});












// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  const searchInput = document.querySelector('.input');

  searchInput.addEventListener('keyup', (event) => {

    const searchQuery = event.target.value.toLowerCase();

    const allCountries = document.querySelectorAll('.flip-card, .flip-card-2, .flip-card-3, .flip-card-33');

    allCountries.forEach((country) => {

      // Get the name of the country from the link's text content, and convert it to lowercase
      const countryName = country.querySelector('a').textContent.toLowerCase();

      if (countryName.startsWith(searchQuery)) {
        // If it matches, make sure the country card is visible
        country.style.display = 'block';
      } else {
        // If it doesn't match, hide the country card
        country.style.display = 'none';
      }
    });
  });
});
