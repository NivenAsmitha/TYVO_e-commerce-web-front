const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// Function to add the 'active' class to the navbar when the bar icon is clicked
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

// Function to remove the 'active' class from the navbar when the close icon is clicked
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
