document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    button.addEventListener('click', function () {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            li.textContent = input.value;
            deleteButton.textContent = '❌';
            deleteButton.classList.add('delete');

            li.appendChild(deleteButton);
            list.appendChild(li);

            input.value = ''; // Clear input field after adding the chapter
        }
    });

    list.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete')) {
            const li = event.target.parentElement;
            list.removeChild(li);
        }
    });
});