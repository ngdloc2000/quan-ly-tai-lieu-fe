const sidebar = document.querySelector('.side-bar-1');
const toggleButton = document.querySelector('.sidebar-toggle');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
toggleButton.addEventListener('click', () => {
    const isSidebarActive = sidebar.classList.contains('active');
    sidebar.classList.toggle('active');
    toggleButton.classList.toggle('active');
    dropdownToggles.forEach(function(toggle) {
        toggle.classList.toggle('disabled', !isSidebarActive);
    });
    dropdownToggles.forEach((toggle) => {
        const dropdownMenu = toggle.nextElementSibling;
        if (dropdownMenu.style.display === 'block') {
            toggle.parentNode.classList.remove('open');
            dropdownMenu.style.display = 'none';
        }
    });
    // Cuộn sidebar lên đầu trang
    sidebar.scrollTop = 0;
});
dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        if (!sidebar.classList.contains('active')) {
            return;
        }
        this.parentNode.classList.toggle('open');
        var dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});
