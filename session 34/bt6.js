document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('addItem').addEventListener('click', () => {
        var itemValue = document.getElementById('itemInput').value;
        if(itemValue) {
            var list = document.getElementById('itemList');
            var listItem = document.createElement('li');
            listItem.textContent = itemValue;
            list.appendChild(listItem);
            document.getElementById('itemInput').value = ''; // Clear input field
        }
    });
});