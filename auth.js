// Функция для проверки авторизации
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');

    // Если пользователь не вошел, перенаправляем на страницу входа
    if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return false;
    }

    // Обновляем UI для авторизованного пользователя
    updateUserUI(username);
    setupLogout();
    return true;
}

// Функция для обновления UI с информацией о пользователе
function updateUserUI(username) {
    // Если есть элементы профиля для обновления, обновляем их
    const profileName = document.querySelector('.profile-info h3');
    if (profileName) {
        profileName.textContent = username;
    }

    const profileUsername = document.querySelector('.profile-info p');
    if (profileUsername) {
        profileUsername.textContent = '@' + username;
    }
}

// Настройка обработчика для кнопки выхода
function setupLogout() {
    const logoutButton = document.querySelector('.menu-section a[href="#"]:has(.menu-icon svg[d*="9 21H5"])');

    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();

            // Удаляем данные о входе
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');

            // Перенаправляем на страницу входа
            window.location.href = 'login.html';
        });
    }
}

// Запускаем проверку авторизации при загрузке страницы
document.addEventListener('DOMContentLoaded', checkAuth);