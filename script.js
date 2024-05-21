let myCount = 0;
let friendCount = 0;

function increment(counter) {
    if (counter === 'zaid') {
        myCount++;
        document.getElementById('zaidCount').innerText = myCount;
    } else if (counter === 'furqan') {
        friendCount++;
        document.getElementById('furqanCount').innerText = friendCount;
    }
}
