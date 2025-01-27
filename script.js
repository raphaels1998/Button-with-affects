let isFolderOpen = false;

function toggleFolder() {
  const folderContent = document.getElementById('folderContent');
  const folder = document.querySelector('.folder');
  
  if (!isFolderOpen) {
    // Open folder
    folder.classList.add('active');
    folderContent.style.display = 'block';
    isFolderOpen = true;
  } else {
    // Close folder
    folder.classList.remove('active');
    folderContent.style.display = 'none';
    isFolderOpen = false;
  }
}

// Close folder when clicking outside
document.addEventListener('click', function(event) {
  const folderContent = document.getElementById('folderContent');
  const folder = document.querySelector('.folder');

  if (isFolderOpen && !folder.contains(event.target) && !folderContent.contains(event.target)) {
    folder.classList.remove('active');
    folderContent.style.display = 'none';
    isFolderOpen = false;
  }
});

function closeFolder() {
  const folderContent = document.getElementById('folderContent');
  const folder = document.querySelector('.folder');

  folder.classList.remove('active');
  folderContent.style.display = 'none';
  isFolderOpen = false;
}