// scripts.js
function openTab(tabName) {
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
}

document.querySelectorAll('.container .label').forEach(label => {
    label.addEventListener('click', function() {
        var container = this.parentElement;
        container.classList.toggle('expanded');
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.container')) {
        document.querySelectorAll('.container.expanded').forEach(container => {
            container.classList.remove('expanded');
        });
    }
});

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropTarget = event.target.closest('.container');
    if (dropTarget && dropTarget !== draggedElement) {
        var parent = draggedElement.parentElement;
        parent.insertBefore(draggedElement, dropTarget.nextSibling);
    }
}

document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('dragover', allowDrop);
    container.addEventListener('drop', drop);
});