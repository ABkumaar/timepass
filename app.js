document.getElementById('yesBtn').addEventListener('click', function() {
    
    document.getElementById('gifFrame').src = 'https://giphy.com/embed/kLe9PygrSqB4oO4tYV';
    
    document.body.style.backgroundColor = '#ffcc00';
    document.querySelector('h1').textContent = 'Shukriya';
});
document.getElementById('noBtn').addEventListener('click', function() {
    
    var confirmPopup = window.confirm("Are you this Nirdayi");

    if (confirmPopup) {
        alert("no u r not");
    } else {
        alert("I trusted good people");
    }
});


