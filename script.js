function createLink() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const second_site_url = 'https://npike.github.io/citrus-phone/index.html';

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