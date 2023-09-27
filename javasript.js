document.getElementById('searchBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    const length = document.getElementById('lengthInput').value;
    const date = document.getElementById('dateInput').value;
    const resultsDiv = document.getElementById('results');
    
    if(location && length && date) {
        resultsDiv.innerHTML = `<p>Results for ${location}, ${length}, ${date}</p>`;
    } else {
        resultsDiv.innerHTML = '<p>Please fill out all search fields</p>';
    }
});

// For the Locations and Voucher links, you would typically have event listeners that handle the display of the selection screen and popups respectively.
