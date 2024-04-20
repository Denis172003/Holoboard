// Get all key elements
const keyElements = document.querySelectorAll('.key');

// Iterate over each key element
keyElements.forEach(function(keyElement) {
    // Add click event listener to the key element
    keyElement.addEventListener('click', function() {
        // Get the current image source and functionality
        const currentImage = keyElement.querySelector('img').src;
        let currentFunctionality = ''; // Placeholder for current functionality, you can update this based on your actual implementation

        // Create a modal or small window to display the current image and functionality
        const modalContent = `
            <div class="modal">
                <div class="modal-content">
                    <h2>Current Image:</h2>
                    <img src="${currentImage}" alt="Current Image">
                    <h2>Current Functionality:</h2>
                    <p>${currentFunctionality}</p>
                    <button class="changeImageBtn">Change Image</button>
                    <button class="changeFunctionalityBtn">Change Functionality</button>
                </div>
            </div>
        `;

        // Append the modal content to the body
        document.body.insertAdjacentHTML('beforeend', modalContent);

        // Get the buttons within the modal
        const changeImageBtn = document.querySelector('.changeImageBtn');
        const changeFunctionalityBtn = document.querySelector('.changeFunctionalityBtn');

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
});

changeFunctionalityBtn.addEventListener('click', function() {
    // Prompt the user to enter new functionality text
    const newFunctionality = prompt('Enter the new functionality:', currentFunctionality);

    // Update the functionality text if the user provided new texts
    if (newFunctionality !== null && newFunctionality !== '') {
        currentFunctionality = newFunctionality;
        // Update the functionality text in the modal
        document.querySelector('.modal-content p').textContent = currentFunctionality;
    }
});

