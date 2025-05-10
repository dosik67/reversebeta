const generateCards = () => {
    const cardsData = [{
            type: 'movie',
            rating: 9.2,
            title: 'Дюна: Часть вторая',
            year: '2024',
            author: 'Дени Вильнёв',
            views: '1.2K',
            comments: 124,
            imageUrl: 'https://m.media-amazon.com/images/I/81UA6mArHJL.jpg',
            link: '/старницы попюлярно сейчас/1.html'
        },
        {
            type: 'anime',
            rating: 9.4,
            title: 'Атака титанов: Финал',
            year: '2022',
            author: 'Хадзимэ Исаяма',
            views: '2.8K',
            comments: 891,
            imageUrl: 'https://media.kg-portal.ru/anime/a/attack4/posters/attack4_2.jpg',
            link: '/старницы попюлярно сейчас/2.html'
        },
        {
            type: 'game',
            rating: 8.9,
            title: 'The Last of Us Part II',
            year: '2020',
            author: 'Naughty Dog',
            views: '3.1K',
            comments: 456,
            imageUrl: 'https://i.ebayimg.com/images/g/PxwAAOSwpgdjhEKM/s-l1200.jpg',
            link: '/старницы попюлярно сейчас/3.html'
        },
        {
            type: 'book',
            rating: 9.1,
            title: '1984',
            year: '1949',
            author: 'Джордж Оруэлл',
            views: '4.5K',
            comments: 672,
            imageUrl: 'https://m.media-amazon.com/images/I/61j8-1aNizL._AC_UF894,1000_QL80_.jpg',
            link: '/старницы попюлярно сейчас/4.html'
        },
        {
            type: 'drama',
            rating: 8.7,
            title: 'Во все тяжкие',
            year: '2008-2013',
            author: 'Винс Гиллиган',
            views: '5.2K',
            comments: 923,
            imageUrl: 'https://ru-images.kinorium.com/movie/1080/400796.jpg?1642150944',
            link: '/старницы попюлярно сейчас/5.html'
        },
        {
            type: 'movie',
            rating: 8.8,
            title: 'Оппенгеймер',
            year: '2023',
            author: 'Кристофер Нолан',
            views: '2.3K',
            comments: 345,
            imageUrl: 'https://ru-images.kinorium.com/movie/1080/2828885.jpg?1690229381',
            link: '/старницы попюлярно сейчас/6.html'
        },
        {
            type: 'anime',
            rating: 9.0,
            title: 'Ковбой Бибоп',
            year: '1998',
            author: 'Синъитиро Ватанабэ',
            views: '1.9K',
            comments: 278,
            imageUrl: 'https://cdn.ananasposter.ru/image/cache/catalog/poster/anime/79/30316-1000x830.jpg',
            link: '/старницы попюлярно сейчас/7.html'
        },
        {
            type: 'book',
            rating: 9.3,
            title: 'Мастер и Маргарита',
            year: '1966',
            author: 'Михаил Булгаков',
            views: '3.7K',
            comments: 512,
            imageUrl: 'https://cdn.ananasposter.ru/image/cache/catalog/poster/pos23/38/73594-1000x830.jpg',
            link: '/старницы попюлярно сейчас/8.html'
        },
        {
            type: 'game',
            rating: 9.5,
            title: 'Red Dead Redemption 2',
            year: '2018',
            author: 'Rockstar Games',
            views: '4.8K',
            comments: 789,
            imageUrl: 'https://ir-3.ozone.ru/s3/multimedia-l/c1000/6362123301.jpg',
            link: '/старницы попюлярно сейчас/9.html'
        },
        {
            type: 'drama',
            rating: 8.5,
            title: 'Игра престолов',
            year: '2011-2019',
            author: 'HBO',
            views: '6.7K',
            comments: 1203,
            imageUrl: 'https://booqua.de/images/product_gallery/811620960781_serverpicture.aspximageiddc3pictures493209.jpg',
            link: '/старницы попюлярно сейчас/10.html'
        },
        {
            type: 'anime',
            rating: 9.9,
            title: 'Rezero',
            year: '2014-*',
            author: 'Таппэй Нагацуки',
            views: '998.7K',
            comments: 145453,
            imageUrl: 'https://i.pinimg.com/736x/b5/ff/41/b5ff41a3774c7ecebef8bb909a5e068d.jpg',
            link: '/старницы попюлярно сейчас/11.html'
        },
        {
            type: 'anime',
            rating: 9.9,
            title: 'Наруто',
            year: '2004-2017',
            author: 'Масаси Кисимото',
            views: '1.7b',
            comments: 520054,
            imageUrl: 'https://i.pinimg.com/736x/26/66/5c/26665c12d6c84f439e0b9dc35b01a58a.jpg',
            link: '/старницы попюлярно сейчас/12.html'
        },
    ];

    const typeLabels = {
        movie: 'Фильм',
        anime: 'Аниме',
        game: 'Игра',
        book: 'Книга',
        drama: 'Сериал'
    };

    const container = document.getElementById('cardsContainer');
    if (!container) {
        console.error('Контейнер для карточек не найден');
        return;
    }

    container.innerHTML = '';

    // Добавим стили для кликабельных карточек
    const style = document.createElement('style');
    style.textContent = `
        .card a {
            display: block;
            text-decoration: none;
            color: inherit;
            height: 100%;
        }
        .card {
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
    `;
    document.head.appendChild(style);

    cardsData.forEach((item, index) => {
        try {
            // Проверяем и устанавливаем значения по умолчанию для всех полей
            const safeItem = {
                type: item.type || 'other',
                rating: item.rating || 0,
                title: item.title || 'Без названия',
                year: item.year || 'Н/Д',
                author: item.author || 'Неизвестно',
                views: item.views || '0',
                comments: item.comments || 0,
                imageUrl: item.imageUrl || '/api/placeholder/300/400',
                link: item.link || 'https://вашсайт.ru' // URL вашего сайта по умолчанию
            };

            const card = document.createElement('div');
            card.className = 'card';
            card.style.animationDelay = `${index * 0.1}s`;

            // Оборачиваем содержимое карточки в тег <a>
            card.innerHTML = `
                <a href="${safeItem.link}" title="${safeItem.title}">
                    <div class="card-image">
                        <img src="${safeItem.imageUrl}" 
                             alt="${safeItem.title}"
                             onerror="this.onerror=null; this.src='/default-poster.jpg'">
                        <div class="card-type type-${safeItem.type}">${typeLabels[safeItem.type] || 'Прочее'}</div>
                        <div class="card-rating">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#FF3B30"/>
                            </svg>
                            ${safeItem.rating}
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${safeItem.title}</h3>
                        <div class="card-meta">${safeItem.year} • ${safeItem.author}</div>
                        <div class="card-stats">
                            <div class="card-stat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#888"/>
                                </svg>
                                ${safeItem.views}
                            </div>
                            <div class="card-stat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="#888"/>
                                </svg>
                                ${safeItem.comments}
                            </div>
                        </div>
                    </div>
                </a>
            `;
            container.appendChild(card);
        } catch (error) {
            console.error(`Ошибка при создании карточки ${index}:`, error);
        }
    });
};

const initRecommendations = () => {
    const recommendations = [{
            title: "Дюна. Часть вторая",
            category: "Фильм",
            quote: "Я видел такое, во что вы, люди, просто не поверите.",
            author: "Бегущий по лезвию (1982)"
        },
        {
            title: "Атака титанов. Финал",
            category: "Аниме",
            quote: "Судьба человека в его собственных руках",
            author: "Последний самурай"
        },
        {
            title: "The Last of Us Part II",
            category: "Игра",
            quote: "Выживание требует жертв",
            author: "The Last of Us"
        },
        {
            title: "1984",
            category: "Книга",
            quote: "Истинная сила в мудрости",
            author: "Лев Толстой"
        },
        {
            title: "Во все тяжкие",
            category: "Сериал",
            quote: "Технологии меняют мир",
            author: "Кремниевая долина"
        },
        {
            title: "Оппенгеймер",
            category: "Фильм",
            quote: "Искусство не имеет границ",
            author: "Музей воображения"
        },
        {
            title: "Мастер и Маргарита",
            category: "Книга",
            quote: "Деньги - лишь инструмент",
            author: "Роберт Кийосаки"
        },
        {
            title: "Red Dead Redemption 2",
            category: "Игра",
            quote: "Каждое решение имеет последствия",
            author: "Witcher 4"
        },
        {
            title: "Игра престолов",
            category: "Сериал",
            quote: "Смелость - это не отсутствие страха",
            author: "Star Trek: Discovery"
        },
        {
            title: "Наруто",
            category: "Аниме",
            quote: "Мечты делают нас живыми",
            author: "Студия Ghibli"
        }
    ];

    try {
        const mainElement = document.querySelector('main');
        if (!mainElement) {
            console.error('Элемент main не найден');
            return;
        }

        const recSection = document.createElement('section');
        recSection.className = 'recommendations';
        recSection.innerHTML = `
            <div class="section">
                <div class="section-title">
                    <h2>Рекомендуем вам</h2>
                </div>
                <div class="cards-container" id="recsContainer"></div>
            </div>
        `;
        mainElement.appendChild(recSection);

        const style = document.createElement('style');
        style.textContent = `
            .recommendations {
                opacity: 0;
                transform: translateY(50px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                padding: 40px 20px;
            }
            .recommendations.visible {
                opacity: 1;
                transform: translateY(0);
            }
            .recommendation-card {
                background: rgba(255,255,255,0.05);
                border-radius: 12px;
                padding: 20px;
                margin: 10px 0;
                border-left: 4px solid #E50914;
            }
        `;
        document.head.appendChild(style);

        const showRecommendations = () => {
            try {
                const shuffled = [...recommendations].sort(() => Math.random() - 0.5);
                const selected = shuffled.slice(0, Math.min(6, shuffled.length));
                const container = document.getElementById('recsContainer');

                if (!container) {
                    console.error('Контейнер для рекомендаций не найден');
                    return;
                }

                container.innerHTML = selected.map(item => {
                    const safeItem = {
                        title: item.title || 'Без названия',
                        category: item.category || 'Прочее',
                        quote: item.quote || 'Нет цитаты',
                        author: item.author || 'Неизвестный автор'
                    };

                    return `
                        <div class="recommendation-card">
                            <h3>${safeItem.title}</h3>
                            <div class="category">${safeItem.category}</div>
                            <div class="quote">"${safeItem.quote}"</div>
                            <div class="author">– ${safeItem.author}</div>
                        </div>
                    `;
                }).join('');
            } catch (error) {
                console.error('Ошибка при отображении рекомендаций:', error);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    showRecommendations();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(recSection);
    } catch (error) {
        console.error('Ошибка при инициализации рекомендаций:', error);
    }
};

// Обработка ошибок при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    try {
        generateCards();
        initRecommendations();
    } catch (error) {
        console.error('Ошибка при загрузке страницы:', error);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach(btn => {
        btn.classList.add('loaded');
        setTimeout(() => btn.classList.remove('loaded'), 500);
    });

    function handleNavigation(event) {
        const targetUrl = event.currentTarget.dataset.url;
        if (targetUrl) window.location.href = targetUrl;
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', handleNavigation);
    });
});
// Объединенный код инициализации
document.addEventListener('DOMContentLoaded', function() {
    // Общие элементы
    const profileButton = document.getElementById('profileButton');
    const profileMenu = document.getElementById('profileMenu');
    const profileTrigger = document.getElementById('profileTrigger');
    const authContent = document.getElementById('authContent');
    const loginContent = document.getElementById('loginContent');
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');

    // Состояние меню
    let isMenuOpen = false;
    let menuTimer = null;
    const HOVER_DELAY = 300;

    // Проверка авторизации
    function checkAuth() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const username = localStorage.getItem('username');

        if (isLoggedIn) {
            if (authContent) authContent.classList.remove('hidden');
            if (loginContent) loginContent.classList.add('hidden');
            // Обновление информации профиля
            const profileUsername = document.getElementById('profileUsername');
            const profileUserLogin = document.getElementById('profileUserLogin');
            if (profileUsername) profileUsername.textContent = username || 'playlistplay';
            if (profileUserLogin) profileUserLogin.textContent = `@${username || 'playlistplay'}`;
        } else {
            if (authContent) authContent.classList.add('hidden');
            if (loginContent) loginContent.classList.remove('hidden');
        }
    }

    // Функции меню
    function openMenu() {
        if (!isMenuOpen) {
            profileMenu.classList.add('active');
            if (profileTrigger) profileTrigger.classList.add('active');
            isMenuOpen = true;
            profileButton.classList.remove('highlight');
        }
    }

    function closeMenu() {
        if (isMenuOpen) {
            profileMenu.classList.remove('active');
            if (profileTrigger) profileTrigger.classList.remove('active');
            isMenuOpen = false;
        }
    }

    // Обработчики меню
    if (profileButton) {
        profileButton.addEventListener('click', (e) => {
            e.stopPropagation();
            isMenuOpen ? closeMenu() : openMenu();
        });

        profileButton.addEventListener('mouseenter', () => {
            clearTimeout(menuTimer);
            if (!isMenuOpen) {
                profileButton.classList.add('highlight');
                menuTimer = setTimeout(openMenu, HOVER_DELAY);
            }
        });

        profileButton.addEventListener('mouseleave', () => {
            profileButton.classList.remove('highlight');
        });
    }

    document.addEventListener('mousemove', (e) => {
        if (isMenuOpen) {
            const overButton = isMouseOver(profileButton, e);
            const overMenu = isMouseOver(profileMenu, e);

            if (!overButton && !overMenu) {
                clearTimeout(menuTimer);
                menuTimer = setTimeout(closeMenu, HOVER_DELAY);
            } else {
                clearTimeout(menuTimer);
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (isMenuOpen && !profileMenu.contains(e.target) && !profileButton.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });

    // Авторизация
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const login = document.getElementById('loginInput').value;
            const password = document.getElementById('passwordInput').value;

            if (login === 'playlistplay' && password === 'Lifanicx123') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', login);
                checkAuth();
                closeMenu();
            } else {
                alert('Неверный логин или пароль');
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            window.location.href = '/login';
        });
    }

    // Вспомогательные функции
    function isMouseOver(element, event) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        );
    }

    // Инициализация
    checkAuth();
});


const avatar = document.querySelector('.avatar-wrapper');
const panel = document.querySelector('.profile-panel');

avatar.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !avatar.contains(e.target)) {
        panel.classList.remove('active');
    }
});

// Добавьте этот код для плавного закрытия при скролле
window.addEventListener('scroll', () => {
    panel.classList.remove('active');
});