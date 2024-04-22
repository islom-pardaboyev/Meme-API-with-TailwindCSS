"use strict";

// Get the meme container where the meme will be displayed
const memeContainer = document.querySelector("#memeContainer");
const generateBtn = document.querySelector("#generateBtn")

// URL of the meme API
const url = "https://meme-api.com/gimme";

// Function to fetch a meme and update the HTML
const getMeme = () => {
  fetch(url) // Fetch data from the URL
    .then((response) => response.json()) // Parse the JSON response
    .then((item) => {
      // Update the HTML with the meme information
      memeContainer.innerHTML = `
      <div class="text-left bg-[#161A30] border-2 rounded-2xl text-md overflow-hidden">
        <img src="${item.url}" width='500px' alt="${item.title}" />
        <div class="flex flex-col gap-1 p-3">
          <p class="font-bold">Title: <span class="font-normal">${item.title}</span></p>
          <p class="font-bold">Author: <span class="font-normal">${item.author}</span></p>
        </div>
      </div>`;
    }) // End of the then block
    .catch((error) => {
      console.error("Error fetching meme:", error); // Handle errors
    });
};

// Call the function when the window loads
window.addEventListener("load", getMeme);
generateBtn.addEventListener("click", getMeme)
