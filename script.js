window.onload = function() {
    fetch('/data')
    .then(response => response.json())
    .then(data => {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `
            <h2>Understanding Chronic Conditions</h2>
            <p>${data.chronicConditions}</p>
            
            <h2>Challenges in Healthcare</h2>
            <p>${data.healthcareChallenges}</p>
            
            <h2>Conclusion</h2>
            <p>${data.conclusion}</p>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));
};
