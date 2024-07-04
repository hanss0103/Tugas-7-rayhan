const weapon = [
    {
        name: 'GLOCK',
        image: '../assets/image/glock.jpg',
        price: '$359.00',
        desc: [
            '.22 LR',
            'STRIKER',
            '10 ROUNDS',
            '4.02 BARREL',
        ]
    },
    {
        name: 'COLT',
        image: '../assets/image/colt.jpg',
        price: '$883.99',
        desc: [
            '357 MAG',
            'DOUBLE ACTION',
            '6 ROUNDS',
            '2 BARREL',
        ]
    },
    {
        name: 'DESSERT EAGLE',
        image: '../assets/image/Deagle.jpg',
        price: '$1,729.99',
        desc: [
            '.44 MAGNUM',
            'SINGLE SHOT',
            '8 ROUNDS',
            '6 BARREL',
        ]
    },
    {
        name: 'GLOCK 19X 9MM',
        image: '../assets/image/Glock 19X 9MM.jpg',
        price: '$635.99',
        desc: [
            '9MM LUGER (9X19 PARA)',
            'STRIKER',
            '17 ROUNDS',
            '4 BARREL',
        ]
    },
    {
        name: 'M16A4',
        image: '../assets/image/m16a4.jpg',
        price: '$1,250.99',
        desc: [
            '5.56X45MM NATO',
            'SEMI AUTOMATIC',
            '30 ROUNDS',
            '20 BARREL',
        ]
    },
    {
        name: 'AUG M1',
        image: '../assets/image/aug.jpg',
        price: '$2,442.99',
        desc: [
            '.223 REM/5.56 NATO',
            'SEMI AUTOMATIC',
            '30 ROUNDS',
            '16 BARREL',
        ]
    },
    {
        name: 'M416',
        image: '../assets/image/M416.jpg',
        price: '$474.95',
        desc: [
            '.22 LR',
            'BLOWBACK',
            '25 ROUNDS',
            '16 BARREL',
        ]
    },
    {
        name: 'M4',
        image: '../assets/image/M4.jpg',
        price: '$483.99',
        desc: [
            '.22 LR',
            'SEMI AUTOMATIC',
            '25 ROUNDS',
            '16 BARREL',
        ]
    },
    {
        name: 'SCAR-L',
        image: '../assets/image/scar-l.jpg',
        price: '$3,671.99',
        desc: [
            '5.56X45MM NATO',
            'SEMI AUTOMATIC',
            '30 ROUNDS',
            '16.25 BARREL',
        ]
    },
    {
        name: 'M4A1',
        image: '../assets/image/m4a1.jpg',
        price: '$1,518.99',
        desc: [
            '5.56X45MM NATO',
            'SEMI AUTOMATIC',
            '30 ROUNDS',
            '16.5 BARREL',
        ]
    },
    {
        name: 'AK-47',
        image: '../assets/image/AK-47.jpg',
        price: '$799.99',
        desc: [
            '7.62X39MM',
            'SEMI AUTOMATIC',
            '30 ROUNDS',
            '20 BARREL',
        ]
    },
    {
        name: 'MP5',
        image: '../assets/image/mp5.jpg',
        price: '$572.99',
        desc: [
            '.22 LR',
            'SEMI AUTOMATIC',
            '25 ROUNDS',
            '16.1 BARREL',
        ]
    },
    {
        name: 'KAR98-K',
        image: '../assets/image/kar98k.jpg',
        price: '$999.99',
        desc: [
            '8MM MAUSER',
            'BOLT ACTION',
            '5 ROUNDS',
            '20 BARREL',
        ]
    },
    {
        name: 'RAK-47 CLASSICAL',
        image: '../assets/image/rak.jpg',
        price: '$837.99',
        desc: [
            '7.62X39MM',
            'SEMI AUTOMATIC',
            '30 ROUNDS',
            '16.25 BARREL',
        ]
    },
]

function card(product) {
    let content = document.querySelector('.content');
    let figure = document.createElement('figure');
    let figcaption = document.createElement("figcaption");
    let img = document.createElement('img');
    img.src = product.image;
    let h1 = document.createElement('h1');
    h1.textContent = product.name;
    let h2 = document.createElement('h2');
    h2.textContent = product.price;
    let ul = document.createElement('ul');
    let like = document.createElement('button');
    like.textContent = 'LIKE';
    like.addEventListener('click', () => alert('Anda menyukai product ini'));
    let buy = document.createElement('button');
    buy.textContent = 'BUY NOW';
    buy.addEventListener('click', () => confirm('Apakah anda yakin membeli produk ini?'));
    let com = document.createElement('button');
    com.textContent = 'COMENT   ';
    com.addEventListener('click', () => prompt('Tambahkan komentar'))
    product.desc.map((d) => {
        let li = document.createElement('li');
        li.textContent = d;
        ul.appendChild(li);
    })
    figcaption.appendChild(h1);
    figcaption.appendChild(ul);
    figcaption.appendChild(h2);
    figcaption.appendChild(like);
    figcaption.appendChild(buy);
    figcaption.appendChild(com);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    content.appendChild(figure);
}
weapon.map((product) => {
    card(product);
});

// slide di header
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    const changeSlide = () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    };

    setInterval(changeSlide, 4000);
});
