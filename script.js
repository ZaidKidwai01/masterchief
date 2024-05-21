// Initialize counters from localStorage if they exist
let zaidCount = localStorage.getItem('zaidCount') ? parseInt(localStorage.getItem('zaidCount')) : 0;
let furqanCount = localStorage.getItem('') ? parseInt(localStorage.getItem('furqanCount')) : 0;

// Display the initial values
document.getElementById('zaidCount').innerText = myCount;
document.getElementById('furqanCount').innerText = friendCount;

function increment(counter) {
    if (counter === 'zaid') {
        zaidCount++;
        document.getElementById('zaidCount').innerText = zaidCount;
        localStorage.setItem('zaidCount', zaidCount); // Save to localStorage
    } else if (counter === 'furqan') {
        furqanCount++;
        document.getElementById('furqanCount').innerText = furqanCount;
        localStorage.setItem('furqanCount', furqanCount); // Save to localStorage
    }
}
