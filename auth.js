// auth.js
const correctUsername = 'admin'; // Replace with your actual username
const correctHashedPassword = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'; // Replace with the actual hashed password

function hashPassword(password) {
    return CryptoJS.SHA256(password).toString(); // Hash the password using SHA-256
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

async function submitCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hashedPassword = hashPassword(password); // Hash the entered password

    if (username === correctUsername && hashedPassword === correctHashedPassword) {
        setCookie('authenticated', 'true', 1); // Set cookie for 1 day
        document.getElementById('protectedContent').style.display = 'block';
        refreshImage(); // Start refreshing the image after successful login
        closeModal(); // Close the modal
    } else {
        alert("Invalid credentials. Access denied.");
        document.body.innerHTML = "<h1>Access Denied</h1>";
    }
}

function checkAuthentication() {
    const isAuthenticated = getCookie('authenticated');
    if (isAuthenticated === 'true') {
        document.getElementById('protectedContent').style.display = 'block';
        refreshImage(); // Start refreshing the image if already authenticated
    } else {
        authenticate(); // Show modal for credentials if not authenticated
    }
}
