function toggleFolder(folderId) {
  const folder = document.getElementById(folderId);
  folder.style.display = (folder.style.display === 'block') ? 'none' : 'block';
}

function closeFolder(folderId) {
  
  document.getElementById(folderId).style.display = 'none';
}