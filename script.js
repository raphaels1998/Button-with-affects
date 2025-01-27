function toggleFolder(folderId) {
  const folder = document.getElementById(folderId);
  // Toggle the display of the folder content
  if (folder.style.display === 'block') {
    folder.style.display = 'none';
  } else {
    folder.style.display = 'block';
  }
}

function closeFolder(folderId) {
  const folder = document.getElementById(folderId);
  folder.style.display = 'none';
}

function toggleSize(appIcon) {
  // Toggle the active class to enlarge or shrink the app icon
  appIcon.classList.toggle('active');
}