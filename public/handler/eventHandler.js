document.addEventListener('DOMContentLoaded', () => {
    const userDeleteBtn = document.querySelectorAll('.delete-btn');
    const editBtn = document.querySelectorAll('.edit-btn');

    userDeleteBtn.forEach(btn => {
        btn.addEventListener('click', async event => {
            event.stopPropagation();
            const dltBtn = event.target.closest('button');
            const id = dltBtn.getAttribute('data-id');
            const route = dltBtn.getAttribute('name');
            const confirmed = confirm('Are you sure you want to delete this user?');

            if (!confirmed) {
                return;
            }

            try {
                const response = await fetch(`/${route}/${id}`, {
                    method: 'DELETE',
                });
                if (response.redirected) {
                    window.location.href = response.url;
                } else {
                    window.location.reload();
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to delete user');
            }
        });
    });

    editBtn.forEach(btn => {
        btn.addEventListener('click', event => {
            const button = event.currentTarget;
            const username = button.getAttribute('data-username');
            const date = button.getAttribute('data-date');
            const note = button.getAttribute('data-note');
            const mood = button.getAttribute('data-mood').substring(3);
            const weather = button.getAttribute('data-weather');
            const tags = JSON.parse(button.getAttribute('data-tags'));

            console.log(tags)
            // tags.forEach(tag => console.log(tag));
            const usernameEl = document.getElementById('username');
            const userDate = document.getElementById('dateInput');
            const userNote = document.getElementById('note');
            const userMood = document.getElementById(mood);
            const userWeather = document.getElementById(weather);

            usernameEl.innerText = `User: ${username}`;
            userDate.value = date;
            userNote.value = note;
            userMood.selected = true;
            userWeather.selected = true;

            document.querySelectorAll('.form-check-input').forEach(checkbox => {
                checkbox.checked = false;
            });
            tags.forEach(tag => document.getElementById(tag).checked = true);
        });
    })
});
