// auth.js
const correctUsername = 'admin'; // Replace with your actual username
const correctBase64Password = 'cGFzc3dvcmQ='; // Base64-encoded password
// default password is password, default username is admin. Basic login. 
// Visit https://www.base64encode.org/ to make your own password. Then change the default password to an encoded base64 password.
function encodeToBase64(str) {
    return btoa(str); // Base64 encoding
}
