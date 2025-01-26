const folderPopup = document.getElementById("folder-popup");
const folderTitle = document.getElementById("popup-title");
const folderItems = document.getElementById("folder-items");
const shoppingItems = document.getElementById("shopping-items");

let folders = {};

// Toggle Tabs
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    sections.forEach((section) => section.classList.add("hidden"));
    sections[index].classList.remove("hidden");
  });
});

// Open Folder
function openFolder(name) {
  folderTitle.textContent = name;
  folderItems.innerHTML = ""; // Clear previous items
  if (!folders[name]) folders[name] = [];
  folders[name].forEach((item) => addItemToPopup(item));
  folderPopup.classList.remove("hidden");
}

// Close Popup
function closePopup() {
  folderPopup.classList.add("hidden");
}

// Add Folder
function addFolder() {
  const folderGrid = document.querySelector(".folder-grid");
  const folderName = prompt("Enter folder name:");
  if (folderName && !folders[folderName]) {
    folders[folderName] = [];
    const folderDiv = document.createElement("div");
    folderDiv.className = "folder";
    folderDiv.onclick = () => openFolder(folderName);
    folderDiv.innerHTML = `<div class="folder-name">${folderName}</div>`;
    folderGrid.insertBefore(folderDiv, folderGrid.lastElementChild);
  }
}

// Add Product
function addItem() {
  const itemName = prompt("Enter product name:");
  const quantity = prompt("Enter quantity:");
  const unit = prompt("Enter unit (oz/lb/bag/liter):");
  const item = { name: itemName, quantity, unit };

  if (itemName && !folders[folderTitle.textContent].some((i) => i.name === itemName)) {
    folders[folderTitle.textContent].push(item);
    addItemToPopup(item);
  }
}

// Add Product to Popup
function addItemToPopup(item) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${item.name} - ${item.quantity} ${item.unit}
    <button onclick="addToShoppingList('${item.name}')">✔</button>
  `;
  folderItems.appendChild(li);
}

// Add Product to Shopping List
function addToShoppingList(itemName) {
  const item = folders[folderTitle.textContent].find((i) => i.name === itemName);
  if (item && !Array.from(shoppingItems.children).some((li) => li.textContent.includes(item.name))) {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.quantity} ${item.unit}`;
    shoppingItems.appendChild(li);
  }
}
