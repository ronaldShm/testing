document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/ip')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').textContent = `Your IP Address is: ${data.ip}`;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
        });
});