const userDeleteBtn = document.querySelectorAll('.delete-btn');

userDeleteBtn.forEach(btn => {
    btn.addEventListener('click', async event => {
        event.stopPropagation();
        const dltBtn = event.target.closest('button');
        const id = dltBtn.getAttribute('data-id');

        const confirmed = confirm('Are you sure you want to delete this user?');

        if (!confirmed) {
            return;
        }

           try {
                const response = await fetch(`/users/${id}`, {
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
