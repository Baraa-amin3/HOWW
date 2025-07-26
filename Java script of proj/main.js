document.addEventListener('DOMContentLoaded', () => {
    const countriesContainer = document.querySelector('.countries');
    const flipCards = Array.from(countriesContainer.querySelectorAll('.flip-card'));

    flipCards.sort((a, b) => {
        const countryNameA = a.querySelector('a').textContent.trim();
        const countryNameB = b.querySelector('a').textContent.trim();
        return countryNameA.localeCompare(countryNameB);
    });

    // Clear the current content and append sorted cards
    countriesContainer.innerHTML = '';
    flipCards.forEach(card => {
        countriesContainer.appendChild(card);
    });
});







// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  const searchInput = document.querySelector('.input');

  searchInput.addEventListener('keyup', (event) => {

    const searchQuery = event.target.value.toLowerCase();

    const allCountries = document.querySelectorAll('.flip-card');

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






let btn = document.querySelector(".UP")

window.onscroll = function (){

    if(window.scrollY >= 2000){


        btn.style.display ="block"
    }
    else{
        btn.style.display ="none"

    }
}
btn.onclick = function(){
    window.scrollTo({
        left: 0,top: 0,
        behavior:"smooth"
    })
}



document.querySelector('.Log-in').addEventListener('click', function () {
    window.location.href = "log in/LogIn.html";
  });

  document.querySelector('.Sign-Up').addEventListener('click', function () {
    window.location.href = "sign up/SignUp.html";
  });







