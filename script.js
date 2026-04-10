// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Resume Button Alert
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Opening Resume...");
    });
});