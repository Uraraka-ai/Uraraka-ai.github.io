
//Генерація карточок перукарів

const barbers = [
    {
        name: "Марлон Макдональд",
        photo: "../img/barber1.png",
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        name: "Джені Бенкс",
        photo: "../img/barber2.png",
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        name: "Джон Бейлі",
        photo: "../img/barber3.png",
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        name: "Діана Джордан",
        photo: "../img/barber4.png",
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        name: "Джеррі Бенкс",
        photo: "../img/barber5.png",
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    },
    {
        name: "Памела Бейлі",
        photo: "../img/barber6.png",
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#"
        }
    }
];

// Вибираємо контейнер для командних карток
const teamCardsContainer = document.getElementById('team-cards');

// Функція для створення та додавання карток на сторінку
function displayBarbers(barbers) {
    barbers.forEach(barber => {
        const card = document.createElement('div');
        card.classList.add('team-card');

        card.innerHTML = `
            <img src="${barber.photo}" alt="${barber.name}">
            <h3 class="team-name">${barber.name}</h3>
            <div class="social-icons">
                <a href="${barber.socials.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="${barber.socials.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="${barber.socials.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
            <a href="#" class="order-btn">Замовити</a>
        `;

        teamCardsContainer.appendChild(card);
    });
}

// Викликаємо функцію для відображення карток
displayBarbers(barbers);
