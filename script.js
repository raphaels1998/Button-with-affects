// Expand/Collapse Folders with Animation
document.querySelectorAll('.expand-btn').forEach(button => {
  button.addEventListener('click', () => {
    const folderContent = button.closest('.folder').querySelector('.folder-content');
    folderContent.classList.toggle('expanded');
    button.classList.toggle('rotated');
  });
});

// Add New Item to Folder (no changes)
document.querySelectorAll('.add-item-btn').forEach(button => {
  button.addEventListener('click', () => {
    const folderContent = button.closest('.folder-content');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
      <input type="text" class="item-name" placeholder="Product Name">
      <input type="number" class="item-quantity" placeholder="Qty" min="1">
      <input type="checkbox" class="add-to-list">
    `;
    folderContent.insertBefore(newItem, button);
  });
});

// Add New Folder (no changes)
document.querySelector('.add-folder-btn').addEventListener('click', () => {
  const masterListTab = document.getElementById('master-list-tab');
  const newFolder = document.createElement('div');
  newFolder.classList.add('folder');
  newFolder.setAttribute('data-folder-id', Date.now());
  newFolder.innerHTML = `
    <div class="folder-header">
      <span class="folder-name" contenteditable="true">New Folder</span>
      <button class="expand-btn">▼</button>
    </div>
    <div class="folder-content">
      <div class="item">
        <input type="text" class="item-name" placeholder="Product Name">
        <input type="number" class="item-quantity" placeholder="Qty" min="1">
        <input type="checkbox" class="add-to-list">
      </div>
      <button class="add-item-btn">+ Add Item</button>
    </div>
  `;
  masterListTab.insertBefore(newFolder, document.querySelector('.add-folder-btn'));

  // Attach event listeners to the new folder
  newFolder.querySelector('.expand-btn').addEventListener('click', () => {
    const folderContent = newFolder.querySelector('.folder-content');
    folderContent.classList.toggle('expanded');
    newFolder.querySelector('.expand-btn').classList.toggle('rotated');
  });

  newFolder.querySelector('.add-item-btn').addEventListener('click', () => {
    const folderContent = newFolder.querySelector('.folder-content');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
      <input type="text" class="item-name" placeholder="Product Name">
      <input type="number" class="item-quantity" placeholder="Qty" min="1">
      <input type="checkbox" class="add-to-list">
    `;
    folderContent.insertBefore(newItem, newFolder.querySelector('.add-item-btn'));
  });
});

// Update Shopping List (no changes)
document.addEventListener('change', (e) => {
  if (e.target.classList.contains('add-to-list')) {
    const shoppingList = document.querySelector('.shopping-list');
    const item = e.target.closest('.item');
    const itemName = item.querySelector('.item-name').value;
    const itemQuantity = item.querySelector('.item-quantity').value;

    if (e.target.checked) {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.innerHTML = `
        <span>${itemName} (${itemQuantity})</span>
      `;
      shoppingList.appendChild(newItem);
    } else {
      const items = shoppingList.querySelectorAll('.item');
      items.forEach(shoppingItem => {
        if (shoppingItem.textContent.includes(`${itemName} (${itemQuantity})`)) {
          shoppingItem.remove();
        }
      });
    }
  }
});