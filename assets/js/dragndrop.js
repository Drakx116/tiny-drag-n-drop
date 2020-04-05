let draggedTask = null;

document.querySelectorAll('.task').forEach((task) => {
    task.addEventListener('dragstart', () => {
        draggedTask = task;
    });

    task.addEventListener('dragend', () => {
        draggedTask = null;
    });

    document.querySelectorAll('.container').forEach((container) => {
        container.addEventListener('dragover', (event) => {
             event.preventDefault();
        });

        container.addEventListener('drop', () => {
            container.append(draggedTask);
        });
    });
});
