document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/ip')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').textContent = data.ip;
        })
        .catch(error => {
            console.error('Error fetching the IP address:', error);
        });
});
