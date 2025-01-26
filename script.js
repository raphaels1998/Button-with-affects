// Toggle between tabs
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    sections.forEach((section) => section.classList.remove('active'));
    sections[index].classList.add('active');
  });
});

// Folder functionality
const folderPopup = document.getElementById('folder-popup');
const folderTitle = document.getElementById('popup-title');
const folderItems = document.getElementById('folder-items');
let folders = {};

// Open a folder
function openFolder(folderName) {
  folderTitle.textContent = folderName;
  folderItems.innerHTML = '';
  if (!folders[folderName]) folders[folderName] = [];
  folders[folderName].forEach((item) => addItemToPopup(item));
  folderPopup.classList.remove('hidden');
}

// Close the popup
function closePopup() {
  folderPopup.classList.add('hidden');
}

// Add a new folder
function addFolder() {
  const folderGrid = document.querySelector('.folder-grid');
  const folderName = `Folder ${Object.keys(folders).length + 1}`;
  folders[folderName] = [];

  const folderDiv = document.createElement('div');
  folderDiv.className = 'folder';
  folderDiv.onclick = () => openFolder(folderName);
  folderDiv.innerHTML = `<div class="folder-title">${folderName}</div>`;
  folderGrid.insertBefore(folderDiv, folderGrid.lastElementChild);
}

// Add a new item to the folder
function addItem() {
  const itemName = prompt('Enter item name:');
  if (itemName && !folders[folderTitle.textContent].includes(itemName)) {
    folders[folderTitle.textContent].push(itemName);
    addItemToPopup(itemName);
  }
}

function addItemToPopup(itemName) {
  const li = document.createElement('li');
  li.textContent = itemName;
  folderItems.appendChild(li);
}
