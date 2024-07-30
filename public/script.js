// document.addEventListener("DOMContentLoaded", function () {
//     fetch('/api/ip')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             document.getElementById('ip-address').textContent = `Your IP Address is: ${data.ip}`;
//         })
//         .catch(error => {
//             console.error('Error fetching IP address:', error);
//             document.getElementById('ip-address').textContent = 'Error loading IP address.';
//         });
// });

document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/ip')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Para depuración
            document.getElementById('ip-address').textContent = `IP Address: ${data.ip}`;
            document.getElementById('location').textContent = `Location: ${data.city || 'N/A'}, ${data.country || 'N/A'}`;
        })
        .catch(error => {
            console.error('Error fetching IP information:', error);
            document.getElementById('ip-address').textContent = 'Error loading IP address.';
            document.getElementById('location').textContent = 'Error loading location.';
        });
});
