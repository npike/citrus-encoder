function createLink() {
    const phoneNumber1 = document.getElementById('phoneNumber').value;
    const phoneNumber2 = document.getElementById('phoneNumber2').value;
    const second_site_url = 'https://www.tapforemergencycontact.com/';

    if (phoneNumber1) {
        // Base64 encode the phone number
        const encodedNumber1 = btoa(phoneNumber1);
        let linkURL = `${second_site_url}?phone=${encodedNumber1}`;

        if (phoneNumber2) {
            const encodedNumber2 = btoa(phoneNumber2);
            linkURL += `&phone2=${encodedNumber2}`;
        }

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