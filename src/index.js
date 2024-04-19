// Check if init function is already defined
if (typeof init === 'undefined') {
    // Define init function only if it's not already defined
    const init = () => {
      const inputForm = document.querySelector("form");
  
      inputForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const input = document.querySelector("input#searchByID");
        const inputValue = input.value;
  
        // Fetch data based on user input
        fetch(`http://localhost:3000/movies/${inputValue}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Display fetched data on the page
            const movieTitle = document.querySelector("#movieDetails h4");
            const movieSummary = document.querySelector("#movieDetails p");
  
            movieTitle.innerText = data.title;
            movieSummary.innerText = data.summary;
          })
          .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
          });
      });
    };
  
    // Call the init function when the DOM is loaded
    document.addEventListener("DOMContentLoaded", init);
  }