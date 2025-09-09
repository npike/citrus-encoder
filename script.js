function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

function phoneNumberInputHandler(event) {
    const input = event.target;
    const formattedInputValue = formatPhoneNumber(input.value);
    input.value = formattedInputValue;
}

document.getElementById('phoneNumber').addEventListener('input', phoneNumberInputHandler);
document.getElementById('phoneNumber2').addEventListener('input', phoneNumberInputHandler);

function createLink() {
    const phoneNumber1 = document.getElementById('phoneNumber').value;
    const phoneNumber2 = document.getElementById('phoneNumber2').value;
    const second_site_url = 'https://www.tapforemergencycontact.com/';

    if (phoneNumber1) {
        // Strip non-numeric characters before encoding
        const strippedNumber1 = phoneNumber1.replace(/[^\d]/g, '');
        const encodedNumber1 = btoa(strippedNumber1);
        let linkURL = `${second_site_url}?phone=${encodedNumber1}`;

        if (phoneNumber2) {
            const strippedNumber2 = phoneNumber2.replace(/[^\d]/g, '');
            const encodedNumber2 = btoa(strippedNumber2);
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