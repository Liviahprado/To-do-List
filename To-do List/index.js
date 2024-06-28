const toggleButton = document.getElementById('color'); // Access the theme toggle button
toggleButton.addEventListener('click', function() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        body.classList.remove('dark-theme');
        toggleButton.textContent = 'Dark Mode🌙';
    } else {
        body.classList.add('dark-theme');
        toggleButton.textContent = 'Light Mode☀️';
    }
});

function addTask() {
    const input = document.getElementById('todo-input'); // Get the input element
    const priority = document.getElementById('priority-input').value; // Get the selected priority value
    const newTask = input.value.trim(); // Trim whitespace from input
    const mirrorList = document.getElementById('mirror-list'); // Access the mirrored list

    if (newTask) { // Check if the new task is not an empty string
        const listItem = document.createElement('li'); // Create a new list item
        listItem.className = 'task-item'; // Assign class for styling

        const circle = document.createElement('div'); // Create a circle div for completion indicator
        circle.className = 'circle'; // Assign class for styling
        listItem.appendChild(circle); // Append circle to the list item

        const taskContent = document.createElement('div'); // Create a div for the task content
        taskContent.className = 'task-content'; // Assign class for styling
        taskContent.textContent = `${priority} ${newTask}`; // Set text with priority and task

        taskContent.addEventListener('click', function() { // Add click event for completion toggle
            taskContent.classList.toggle('completed'); // Toggle 'completed' class
            circle.classList.toggle('filled'); // Toggle 'filled' class for circle
        });

        const deleteButton = document.createElement('button'); // Create a delete button
        deleteButton.className = 'delete-btn'; // Assign class for styling
        deleteButton.textContent = 'Delete'; // Set button text

        deleteButton.onclick = function() { // Attach event handler for delete
            listItem.remove(); // Remove list item when button is clicked
        };

        listItem.appendChild(taskContent); // Append task content to list item
        listItem.appendChild(deleteButton); // Append delete button to list item
        mirrorList.appendChild(listItem); // Add list item to mirrored list

        document.getElementById('mirror-container').style.visibility = 'visible'; // Make mirror list visible
        input.value = ''; // Clear input field after adding task
        document.getElementById('priority-input').value = '!'; // Reset priority selector
    }
}
