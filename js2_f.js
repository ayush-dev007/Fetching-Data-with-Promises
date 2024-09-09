// JavaScript file: fetch-data.js

// Get references to the HTML elements
const fetchDataButton = document.getElementById('fetchData');
const dataDiv = document.getElementById('data');
const errorDiv = document.getElementById('error');

// Function to fetch data from Dog API
function fetchData() {
    // Clear any previous data or error messages
    dataDiv.innerHTML = '';
    errorDiv.innerHTML = '';

    // URL of the public API (in this case, Dog API for a random image)
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is OK
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            // Convert the response into JSON format
            return response.json();
        })
        .then(data => {
            // Process the data and display it in the HTML
            const imageUrl = data.message;
            dataDiv.innerHTML = `<img src="${imageUrl}" alt="Random Dog Image" style="max-width: 100%;">`;
        })
        .catch(error => {
            // Handle any errors that occur during fetch and display an error message
            errorDiv.innerHTML = `An error occurred: ${error.message}`;
        });
}

// Add event listener to the button to trigger data fetch when clicked
fetchDataButton.addEventListener('click', fetchData);
