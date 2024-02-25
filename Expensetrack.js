function handleTracker(event){

    event.preventDefault();
    const expenseAmount = document.getElementById("expenseAmount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;

    const details = {
        expenseAmount ,
        description ,
        category
    };

    localStorage.setItem(details.category, JSON.stringify(details));
    displayDetails(details);

    document.getElementById("expenseAmount").value = '';
    document.getElementById("description").value = '';
    document.getElementById("category").value = '';
}

function displayDetails(details) {
    const userList = document.getElementById("userList");
    const listItem = document.createElement("li");
    listItem.textContent = `${details.expenseAmount}-${details.category}-${details.description}`;
    userList.appendChild(listItem);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Expense";
    deleteButton.onclick = () => {
        localStorage.removeItem(details.category);
        userList.removeChild(listItem);
    }
    listItem.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit Expense";
    editButton.onclick = () => {
        const storedDetails = JSON.parse(localStorage.getItem(details.category));
        document.getElementById("expenseAmount").value = storedDetails.expenseAmount;
        document.getElementById("description").value = storedDetails.description;
        document.getElementById("category").value = storedDetails.category;

        localStorage.removeItem(details.category);
        userList.removeChild(listItem);
    }
    listItem.appendChild(editButton);
    userList.appendChild(listItem);
}

window.onload = function () {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedDetails = JSON.parse(localStorage.getItem(key));
        displayDetails(storedDetails);
    }
}