// scripts.js
document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.toggle('expanded');
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.folder')) {
        document.querySelectorAll('.folder.expanded').forEach(folder => {
            folder.classList.remove('expanded');
        });
    }
});