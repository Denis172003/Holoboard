// Get all key elements
const keyElements = document.querySelectorAll('.key');

async function fetchKeyData(keyName) {
    try {
        const response = await fetch(`/api/keys/${keyName}`);
        if (!response.ok) {
            throw new Error('Failed to fetch key data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching key data:', error.message);
    }
}

// Iterate over each key element
keyElements.forEach(function(keyElement) {
    // Add click event listener to the key element
    keyElement.addEventListener('click', async function() {
        // Get the current image source and functionality
        const keyName = keyElement.id; // Get the id of the key
        const keyData = await fetchKeyData(keyName); // Fetch data for the key from the database
        // Create a modal or small window to display the current image and functionality

        if (!keyData) {
            console.error('Key data not found');
            return;
        }

        const currentImage = keyData.image_url; // Get the image URL from the fetched data
        let currentFunctionality = keyData.functionality || ''; // Get the functionality from the fetched data, default to empty string if null

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
