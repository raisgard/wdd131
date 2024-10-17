//Hamburger Button and Navigation Menu
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Johannesburg South Africa Temple",
        location: "Johannesburg, South Africa Temple",
        dedicated: "1985, Augest, 24",
        area: 19184,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1550159-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('temple-gallery');
    const navLinks = document.querySelectorAll('nav ul li a');

    function createTempleCard(temple) {
        const figure = document.createElement('figure');

        const details = document.createElement('div');
        details.className = 'temple-details';
        
        const templeName = document.createElement('p');
        templeName.textContent = `Temple Name: ${temple.templeName}`;
        
        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;
        
        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        
        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area} sq ft`;

        details.appendChild(templeName);
        details.appendChild(location);
        details.appendChild(dedicated);
        details.appendChild(area);
        
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';

        figure.appendChild(details);
        figure.appendChild(img);

        return figure;
    }

    function displayTemples(filteredTemples) {
        gallery.innerHTML = '';
        filteredTemples.forEach(temple => {
            const templeCard = createTempleCard(temple);
            gallery.appendChild(templeCard);
        });
    }

    function filterTemples(criteria) {
        let filteredTemples = [];
        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(', ')[0]).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(', ')[0]).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;
                break;
        }
        displayTemples(filteredTemples);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
            const filterCriteria = event.target.getAttribute('data-filter');
            filterTemples(filterCriteria);
        });
    });

    // Initial display
    displayTemples(temples);

    // Update footer dates
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});