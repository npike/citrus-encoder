function createLink() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const second_site_url = 'https://your-second-site-bucket.s3.amazonaws.com/index.html'; // Replace with your S3 URL for the second site

    if (phoneNumber) {
        // Base64 encode the phone number
        const encodedNumber = btoa(phoneNumber);

        // Construct the full URL with the query parameter
        const linkURL = `${second_site_url}?phone=${encodedNumber}`;

        // Display the link to the user
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <p>Your link is ready:</p>
            <a href="${linkURL}">${linkURL}</a>
        `;
    } else {
        alert("Please enter a phone number.");
    }
}