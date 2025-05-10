// Скрипт для обновления профиля пользователя в index.html
// Сохраните этот файл как profile-updater.js и подключите к index.html

document.addEventListener('DOMContentLoaded', function() {
    // Элементы профиля в боковой панели
    const profileName = document.querySelector('.profile-info h3');
    const profileHandle = document.querySelector('.profile-info p');
    const profileAvatars = document.querySelectorAll('.user-avatar img, .profile-avatar img');
    const watchedCount = document.querySelector('.stat:nth-child(1) .stat-value');
    const listsCount = document.querySelector('.stat:nth-child(2) .stat-value');
    const reviewsCount = document.querySelector('.stat:nth-child(3) .stat-value');

    // Проверка авторизации пользователя
    function updateUserProfile() {
        // Получаем данные из localStorage или sessionStorage
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) ||
            JSON.parse(sessionStorage.getItem('currentUser'));

        // Если пользователь не авторизован, перенаправляем на страницу входа
        if (!currentUser) {
            // Если мы находимся не на странице логина, перенаправляем
            if (!window.location.href.includes('login.html')) {
                window.location.href = 'login.html';
            }
            return;
        }

        // Обновляем информацию профиля в боковом меню
        if (profileName) profileName.textContent = currentUser.displayName;
        if (profileHandle) profileHandle.textContent = currentUser.handle;

        // Обновляем аватар пользователя во всех местах
        if (profileAvatars.length > 0) {
            profileAvatars.forEach(avatar => {
                avatar.src = currentUser.avatarUrl;
                avatar.alt = `${currentUser.displayName} avatar`;
            });
        }

        // Обновляем статистику
        if (watchedCount) watchedCount.textContent = currentUser.stats.watched;
        if (listsCount) listsCount.textContent = currentUser.stats.lists;
        if (reviewsCount) reviewsCount.textContent = currentUser.stats.reviews;
    }

    // Обработчик для кнопки выхода
    function setupLogoutButton() {
        const logoutButton = document.querySelector('.menu-section:last-child .menu-item');

        if (logoutButton) {
            logoutButton.addEventListener('click', function(e) {
                e.preventDefault();

                // Удаляем данные пользователя
                localStorage.removeItem('currentUser');
                sessionStorage.removeItem('currentUser');

                // Перенаправляем на страницу входа
                window.location.href = 'login.html';
            });
        }
    }

    // Инициализация
    updateUserProfile();
    setupLogoutButton();
});