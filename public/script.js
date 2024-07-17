document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/ip')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('ip-address').textContent = `Your IP Address is: ${data.ip}`;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            document.getElementById('ip-address').textContent = 'Error loading IP address.';
        });
});
