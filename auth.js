// auth.js
const correctUsername = 'admin'; // Replace with your actual username
const correctHashedPassword = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'; // Replace with the actual hashed password
// default password is password
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashedPassword;
}

async function authenticate() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
    const hashedPassword = await hashPassword(password); // Hash the entered password

    if (username === correctUsername && hashedPassword === correctHashedPassword) {
        localStorage.setItem('authenticated', 'true'); // Set authentication flag
        document.getElementById('protectedContent').style.display = 'block';
        refreshImage(); // Start refreshing the image after successful login
    } else {
        alert("Invalid credentials. Access denied.");
        document.body.innerHTML = "<h1>Access Denied</h1>";
    }
}
