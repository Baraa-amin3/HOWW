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
