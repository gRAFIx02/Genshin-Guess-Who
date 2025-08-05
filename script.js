document.addEventListener('DOMContentLoaded', function()
{
    const avatarContainer = document.querySelectorAll('.grid-items');
    avatarContainer.forEach(container => {
        container.addEventListener('click', function()
        {
            const avatar = container.querySelector('img');
            avatar.classList.toggle('toggle-avatar');
        });
    })
});