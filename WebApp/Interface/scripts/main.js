// Get the key element
const keyElement = document.getElementById('key1');

// Add click event listener to the key element
keyElement.addEventListener('click', function() {
    // Get the current image source and functionality (you can retrieve them from the DOM or maintain them in variables)
    const currentImage = keyElement.querySelector('img').src;
    const currentFunctionality = 'Functionality: Ctrl+C'; // Example, replace with actual functionality

    // Create a modal or small window to display the current image and functionality
    const modalContent = `
        <div class="modal">
            <div class="modal-content">
                <h2>Current Image:</h2>
                <img src="${currentImage}" alt="Current Image">
                <h2>Current Functionality:</h2>
                <p>${currentFunctionality}</p>
                <button id="changeImageBtn">Change Image</button>
                <button id="changeFunctionalityBtn">Change Functionality</button>
            </div>
        </div>
    `;

    // Append the modal content to the body
    document.body.insertAdjacentHTML('beforeend', modalContent);

    // Get the buttons within the modal
    const changeImageBtn = document.getElementById('changeImageBtn');
    const changeFunctionalityBtn = document.getElementById('changeFunctionalityBtn');

// Add click event listeners to the buttons
changeImageBtn.addEventListener('click', function() {
    // Prompt the user to enter a new image URL
    const newImageUrl = prompt('Enter the URL of the new image:', currentImage);

    // Update the image source if the user provided a new URL
    if (newImageUrl !== null && newImageUrl !== '') {
        keyElement.querySelector('img').src = newImageUrl;
    }
});

changeFunctionalityBtn.addEventListener('click', function() {
    // Prompt the user to enter new functionality text
    const newFunctionality = prompt('Enter the new functionality:', currentFunctionality);

    // Update the functionality text if the user provided new text
    if (newFunctionality !== null && newFunctionality !== '') {
        currentFunctionality = newFunctionality;
        // Update the functionality text in the modal
        document.querySelector('.modal-content p').textContent = currentFunctionality;
    }
});
});
