document.addEventListener('DOMContentLoaded', () => {
    const editBtn = document.querySelectorAll('.edit-btn');
    const editForm = document.getElementById('edit-form');

    editBtn.forEach(btn => {
        btn.addEventListener('click', event => {
            const button = event.currentTarget;
            const id = button.getAttribute('data-id');
            const userId = button.getAttribute('data-user-id');
            const username = button.getAttribute('data-username');
            const date = button.getAttribute('data-date');
            const note = button.getAttribute('data-note');
            const mood = button.getAttribute('data-mood').substring(3);
            const weather = button.getAttribute('data-weather');
            const tags = JSON.parse(button.getAttribute('data-tags'));

            const usernameEl = document.getElementById('username');
            const userDate = document.getElementById('dateInput');
            const userNote = document.getElementById('note');
            const userMood = document.getElementById(mood);
            const userWeather = document.getElementById(weather);

            usernameEl.setAttribute('entryId', id);
            usernameEl.setAttribute('userId', userId);
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

    editForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Extract values
        const user = document.getElementById('username');
        const mood = document.getElementById('moods').value;
        const emojiMood = document.getElementById(mood).textContent;
        const weather = document.getElementById('weather').value;
        const date = document.getElementById('dateInput').value;
        const note = document.getElementById('note').value;
        console.log(document.getElementById('weather'));
        // Extract checked tags
        const checkedTags = Array.from(document.querySelectorAll('input[name="tags"]:checked'))
            .map(tagCheckbox => tagCheckbox.id);

        try {
            const response = await fetch(`/history`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: user.getAttribute('entryId'),
                    userId: user.getAttribute('userId'),
                    mood: emojiMood,
                    weather,
                    date,
                    note,
                    tags: checkedTags
                }),
                headers: { 'Content-Type': 'application/json' }
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
