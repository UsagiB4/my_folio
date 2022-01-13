const menuBtn = document.getElementById('toggleBtn');
const navList = document.getElementById('holder');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
})
