function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function expandItem(item) {
    item.classList.add("expanded");
}

function minimizeItem(event, closeBtn) {
    event.stopPropagation();
    var item = closeBtn.parentElement.parentElement;
    item.classList.remove("expanded");
}

// Swipe functionality
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('touchstart', handleTouchStart, false);
    item.addEventListener('touchmove', handleTouchMove, false);
});

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        let item = evt.currentTarget;
        if (xDiff > 0) {
            // Swipe left to delete
            item.remove();
        } else {
            // Swipe right to add to shopping list
            let productName = item.querySelector('input[type="text"]').value;
            let quantity = item.querySelector('input[type="number"]').value;
            if (productName && quantity) {
                let shoppingList = document.getElementById('shopping-list');
                let listItem = document.createElement('li');
                listItem.textContent = `${productName} - ${quantity}`;
                shoppingList.appendChild(listItem);
                item.remove();
            }
        }
    }

    xDown = null;
    yDown = null;
}