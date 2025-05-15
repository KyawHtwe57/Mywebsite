const profileBtn = document.querySelector('#profile');
const dropdownMenu = document.querySelector('#dropdownMenu');

profileBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    if (!profileBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
}
);

