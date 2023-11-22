const data = {
    currentDate: "2023-01-01",
    events: [
        {
            _id: "639c723b992482e5f2834be9",
            name: "Collectivities Party",
            image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            date: "2022-12-12",
            description:
                "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            assistance: 42756,
            price: 5,
            __v: 0,
        },
        {
            _id: "639c723b992482e5f2834beb",
            name: "Korean style",
            image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            date: "2023-08-12",
            description:
                "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            price: 10,
            __v: 0,
            estimate: 42756,
        },
        {
            _id: "639c723c992482e5f2834bed",
            name: "Jurassic Park",
            image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            date: "2022-11-02",
            description:
                "Let's go meet the biggest dinosaurs in the paleontology museum.",
            category: "Museum",
            place: "Field",
            capacity: 82000,
            price: 15,
            __v: 0,
            assistance: 65892,
        },
        {
            _id: "639c723c992482e5f2834bef",
            name: "Parisian Museum",
            image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            date: "2023-11-02",
            description:
                "A unique tour in the city of lights, get to know one of the most iconic places.",
            category: "Museum",
            place: "Paris",
            capacity: 8200,
            estimate: 8200,
            price: 3500,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf1",
            name: "Comicon",
            image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            date: "2022-02-12",
            description:
                "For comic lovers, all your favourite characters gathered in one place.",
            category: "Costume Party",
            place: "Room C",
            capacity: 120000,
            assistance: 110000,
            price: 54,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf3",
            name: "Halloween Night",
            image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            date: "2023-02-12",
            description: "Come with your scariest costume and win incredible prizes.",
            category: "Costume Party",
            place: "Room C",
            capacity: 12000,
            estimate: 9000,
            price: 12,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf5",
            name: "Metallica in concert",
            image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            date: "2023-01-22",
            description: "The only concert of the most emblematic band in the world.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            estimate: 138000,
            price: 150,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf7",
            name: "Electronic Fest",
            image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            date: "2022-01-22",
            description:
                "The best national and international DJs gathered in one place.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            assistance: 110300,
            price: 250,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bf9",
            name: "10K for life",
            image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            date: "2022-03-01",
            description: "Come and exercise, improve your health and lifestyle.",
            category: "Race",
            place: "Soccer field",
            capacity: 30000,
            assistance: 25698,
            price: 3,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bfb",
            name: "15K NY",
            image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
            date: "2023-03-01",
            description:
                "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            category: "Race",
            place: "New York",
            capacity: 3000000,
            price: 3,
            __v: 0,
            estimate: 2569800,
        },
        {
            _id: "639c723d992482e5f2834bfd",
            name: "School's book fair",
            image: "https://i.postimg.cc/Sst763n6/book1.jpg",
            date: "2023-10-15",
            description: "Bring your unused school book and take the one you need.",
            category: "Book Exchange",
            place: "Room D1",
            capacity: 150000,
            estimate: 123286,
            price: 1,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bff",
            name: "Just for your kitchen",
            image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
            date: "2022-11-09",
            description:
                "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            category: "Book Exchange",
            place: "Room D6",
            capacity: 130000,
            assistance: 90000,
            price: 100,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c01",
            name: "Batman",
            image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
            date: "2022-3-11",
            description: "Come see Batman fight crime in Gotham City.",
            category: "Cinema",
            place: "Room D1",
            capacity: 11000,
            assistance: 9300,
            price: 225,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c03",
            name: "Avengers",
            image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
            date: "2023-10-15",
            description:
                "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            category: "Cinema",
            place: "Room D1",
            capacity: 9000,
            estimate: 9000,
            price: 250,
            __v: 0,
        },
    ],
};

////////////// navbar \\\\\\\\\\\\\\\\\\\\\\\

let nav = document.getElementById('navbar')


let navbarBrand = document.createElement("a");
navbarBrand.className = "navbar-brand navbar-expand-sm bg-light-subtle object-fit-none border rounded";
navbarBrand.href = "index.html";

let brandImage = document.createElement("img");
brandImage.src = "amazing_brand.png";
brandImage.className = "logo";
brandImage.alt = "logo";

navbarBrand.appendChild(brandImage);

let navbarButton = document.createElement("button");
navbarButton.className = "navbar-toggler";
navbarButton.type = "button";
navbarButton.setAttribute("data-bs-toggle", "collapse");
navbarButton.setAttribute("data-bs-target", "#navbarNav");
navbarButton.setAttribute("aria-controls", "navbarNav");
navbarButton.setAttribute("aria-expanded", "false");
navbarButton.setAttribute("aria-label", "Toggle navigation");

let navbarIcon = document.createElement("span");
navbarIcon.className = "navbar-toggler-icon";

navbarButton.appendChild(navbarIcon);

let navbarCollapse = document.createElement("div");
navbarCollapse.className = "collapse navbar-collapse";
navbarCollapse.id = "navbarNav";

var navbarList = document.createElement("ul");
navbarList.className = "navbar-nav ms-auto";

let navItems = [
    { text: "Home", href: "index.html" },
    { text: "Upcoming Events", href: "upcomingEvents.html" },
    { text: "Past Events", href: "PastEvents.html" },
    { text: "Contact", href: "Contact.html" },
    { text: "Stats", href: "Stats.html" }
];

navItems.forEach(function (item) {
    var navItem = document.createElement("li");
    navItem.className = "nav-item fs-5 border me-2 border-danger-subtle rounded-4";

    var navLink = document.createElement("a");
    navLink.className = "nav-link active";
    navLink.setAttribute("aria-current", "page");
    navLink.href = item.href;
    navLink.textContent = item.text;

    navItem.appendChild(navLink);
    navbarList.appendChild(navItem);
});

navbarCollapse.appendChild(navbarList);

nav.appendChild(navbarBrand)

nav.appendChild(navbarButton)

nav.appendChild(navbarCollapse)

///////////////////  baner \\\\\\\\\\\\\\\\\\\\

let banner = document.getElementById("banner");
banner.className = " carousel-inner";

let images = ['optional_banner_1.jpg', 'optional_banner_2.jpg', 'optional_banner_3.jpg'];

for (let i = 0; i < images.length; i++) {
    let bannerItem = document.createElement('div');
    bannerItem.className = i === 0 ? 'carousel-item active' : 'carousel-item';

    let img = document.createElement('img');
    img.className = 'imagencarusel1 w-100';
    img.src = images[i];
    img.alt = '...';

    var caption = document.createElement('div');
    caption.className = 'carousel-caption w-75 d-flex justify-content-lg-end ';

    var h2 = document.createElement('h2');
    h2.className = 'TituloHome', 'text-end' ;
    h2.textContent = 'HOME';

    caption.appendChild(h2);
    bannerItem.appendChild(img);
    bannerItem.appendChild(caption);
    banner.appendChild(bannerItem);
}


///////////////////  checkbox-boton search   \\\\\\\\\\\\\\\\\\\\
let check = document.getElementById("checkbox")

let div = document.createElement("div")
div.classList.add("checkbox", "text-white")

check.appendChild(div)

let categories = ["Category1", "Category2", "Category3", "Category4"];

categories.forEach(function (category) {

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input p-1 ms-4";
    checkbox.setAttribute("aria-label", "checkbox");

    var label = document.createElement("label");
    label.className = "form-label ms-2";
    label.textContent = category;

    div.appendChild(checkbox);
    div.appendChild(label);
});

let inputGroup = document.createElement("div");
inputGroup.className = "input-group w-25";

let searchInput = document.createElement("input");
searchInput.type = "search";
searchInput.className = "form-control rounded";
searchInput.placeholder = "Search";

let searchButton = document.createElement("button");
searchButton.type = "button";
searchButton.className = "btn btn-outline-light bg-dark";
searchButton.textContent = "search";

inputGroup.appendChild(searchInput);
inputGroup.appendChild(searchButton);

check.appendChild(inputGroup)


///////////////////  tarjetas   \\\\\\\\\\\\\\\\\\\\
let carrusel = document.getElementById("carousel-Principal")

for (let i = 0; i < data.events.length; i += 4) {
    let carruselItem

    if (i < 4) {
        carruselItem = document.createElement("div")
        carruselItem.classList.add("carousel-item", "active")

    } else {
        carruselItem = document.createElement("div")
        carruselItem.classList.add("carousel-item")
    }

    

    let carruselItem2 = document.createElement("div")
    carruselItem2.classList.add("cards", "d-flex", "p-3")


    for (let j = i; j < i + 4; j++) {
        if (data.events[j] != undefined) {
            let card = document.createElement("div")
            card.classList.add("card" , "w-25", "ms-3", "me-3")
            card.innerHTML = `
            <div class="card-img-lg-top " >
            <img src="${data.events[j].image}" class="imagen w-100 "  alt="...">
            </div>             
        <div class="card-lg-body bg-dark">
            <h3 class="card-title text-center text-white">${data.events[j].name} </h3>
            <p class="card-text text-justify text-white">${data.events[j].description}</p>
        </div>
        <div class="d-flex justify-content-lg-between  p-2 bg-secondary">
            <a href="details.html#miFood" class="btn btn-dark">Details</a>
            <p class="card-text text-white">${data.events[j].price}</p>
        </div>`
            carruselItem2.appendChild(card)
        }
    }
    carruselItem.appendChild(carruselItem2)
    

    carrusel.appendChild(carruselItem)
}



