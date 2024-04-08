let inventory = [];

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);

    if (itemName.trim() === '' || isNaN(itemQuantity) || itemQuantity <= 0) {
        alert('Please enter location name and pincode.');
        return;
    }

    const newItem = {
        name: itemName,
        quantity: itemQuantity
    };

    inventory.push(newItem);
    updateInventoryList();
}

function updateInventoryList() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    
    inventory.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.quantity}`;
        inventoryList.appendChild(li);
    });
}