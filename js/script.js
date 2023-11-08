'use strict';
const menus = [
    {
        id: 1,
        title: 'Lavash (standart)',
        category: 'lavash',
        price: "27 000 so'm",
        img: '../../image/lavash_standart.jpg',
    },
    {
        id: 2,
        title: 'Sendvich',
        category: 'sendvich',
        price: "35 000 so'm",
        img: '../../image/sendvich.jpg',
    },
    {
        id: 3,
        title: 'Bellissimo',
        category: 'pitsa',
        price: "60 000 so'm",
        img: '../../image/img/bellissimoPitsa60.webp',
    },
    {
        id: 4,
        title: 'Amerika Qahva',
        category: 'ichimlik',
        price: "11 000 so'm",
        img: '../../image/img/AmerikaQahva11.webp',
    },
    {
        id: 5,
        title: 'Lavash (Katta)',
        category: 'lavash',
        price: "32 000 so'm",
        img: '../../image/lavash-katta.jpg',
    },
    {
        id: 6,
        title: 'Donar (Pishloq)',
        category: 'donar',
        price: "27 000 so'm",
        img: '../../image/donar-pishloqli.jpg',
    },
    {
        id: 7,
        title: 'Gamburgen (Tovuq)',
        category: 'gamburgen',
        price: "18 000 so'm",
        img: '../../image/gamburgen-tovuq-goshtr.jpg',
    },
    {
        id: 8,
        title: 'Hot Dog',
        category: 'hotdog',
        price: "12 000 so'm",
        img: '../../image/hoddoc-12.jpg',
    },
    {
        id: 9,
        title: 'Dena 1l',
        category: 'ichimlik',
        price: "14 000 so'm",
        img: '../../image/dena1.jpg',
    },
    {
        id: 10,
        title: 'Barjome',
        category: 'ichimlik',
        price: "12 000 so'm",
        img: '../../image/barjome.jpg',
    },
    {
        id: 11,
        title: 'Alfredo Pitsa',
        category: 'pitsa',
        price: "45 000 so'm",
        img: '../../image/img/alfredoPitsa45.webp',
    },
    {
        id: 12,
        title: 'Chikers Malinkey',
        category: 'shirinlik',
        price: "10 000 so'm",
        img: '../../image/chikers-malinkey.jpg',
    },
    {
        id: 13,
        title: 'chokolak',
        category: 'shirinlik',
        price: "13 000 so'm",
        img: '../../image/chokolak.jpg',
    },
    {
        id: 14,
        title: 'Chortoq 0.5l',
        category: 'ichimlik',
        price: "9 000 so'm",
        img: '../../image/chortoq.jpg',
    },
    {
        id: 15,
        title: 'Beef Kabob',
        category: 'pitsa',
        price: "44 000 so'm",
        img: '../../image/img/beefKabobPitsa44.webp',
    },
    {
        id: 16,
        title: 'Dena',
        category: 'ichimlik',
        price: "14 000 so'm",
        img: '../../image/dena-ormon-meva1.jpg',
    },
    {
        id: 17,
        title: 'Classik Chizkeyk',
        category: 'shirinlik',
        price: "22 000 so'm",
        img: '../../image/img/classikChizkeyk22.webp',
    },
    {
        id: 18,
        title: 'Dinay 0.5l',
        category: 'ichimlik',
        price: "6 000 so'm",
        img: '../../image/dinay0.5.jpg',
    },
    {
        id: 19,
        title: 'Donar (Pishloq)',
        category: 'donar',
        price: "27 000 so'm",
        img: '../../image/donar-pishloqli.jpg',
    },
    {
        id: 20,
        title: 'Dabl Chizburger',
        category: 'pitsa',
        price: "55 000 so'm",
        img: '../../image/img/dablChizburger55.webp',
    },
    {
        id: 21,
        title: 'Fanta 0.5l',
        category: 'ichimlik',
        price: "6 000 so'm",
        img: '../../image/fanta0.5.jpg',
    },
    {
        id: 22,
        title: 'Derevenski Fri',
        category: 'fri',
        price: "16 000 so'm",
        img: '../../image/img/derevenskiKartoshkaFri16.webp',
    },
    {
        id: 23,
        title: 'Fanta 1l',
        category: 'ichimlik',
        price: "10 000 so'm",
        img: '../../image/fanta1l.jpg',
    },
    {
        id: 24,
        title: 'File BBQ 200gr',
        category: 'KFS',
        price: "33 000 so'm",
        img: '../../image/file-bbq0.2.jpg',
    },
    {
        id: 25,
        title: 'Dabl Pepperoni',
        category: 'pitsa',
        price: "60 000 so'm",
        img: '../../image/img/dablPepperoni60.webp',
    },
    {
        id: 26,
        title: 'File Chile',
        category: 'KFS',
        price: "30 000 so'm",
        img: '../../image/file-chile.jpg',
    },
    {
        id: 27,
        title: 'Coco Cola 1l',
        category: 'ichimlik',
        price: "11 000 so'm",
        img: '../../image/img/coco_cola8.webp',
    },
    {
        id: 28,
        title: 'File Frayd 200gr',
        category: 'KFS',
        price: "30 000 so'm",
        img: '../../image/file-frayd0.2.jpg',
    },
    {
        id: 29,
        title: 'Donar Pitsa',
        category: 'pitsa',
        price: "60 000 so'm",
        img: '../../image/img/DonarPitsa60.webp',
    },
    {
        id: 30,
        title: 'File Frayd 500gr',
        category: 'KFS',
        price: "60 000 so'm",
        img: '../../image/file-frayd0.5.jpg',
    },
    {
        id: 31,
        title: 'Flesh 0.5l',
        category: 'ichimlik',
        price: "10 000 so'm",
        img: '../../image/flesh0.5.jpg',
    },
    {
        id: 32,
        title: 'Fri',
        category: 'fri',
        price: "12 000 so'm",
        img: '../../image/fri.jpg',
    },
    {
        id: 33,
        title: 'Gavaycha Pitsa',
        category: 'pitsa',
        price: "50 000 so'm",
        img: '../../image/img/gavaychaPitsa50.webp',
    },
    {
        id: 34,
        title: 'File Kannam',
        category: 'KFS',
        price: "33 000 so'm",
        img: '../../image/file-kannam.jpg',
    },
    {
        id: 35,
        title: 'Sirniy snak 200gr',
        category: 'KFS',
        price: "33 000 so'm",
        img: '../../image/file-sirniy-snak0.2.jpg',
    },
    {
        id: 36,
        title: 'Gamburgen Tovuq',
        category: 'gamburgen',
        price: "18 000 so'm",
        img: '../../image/gamburgen-tovuq-goshtr.jpg',
    },
    {
        id: 37,
        title: 'Hot Dog',
        category: 'hotdog',
        price: "12 000 so'm",
        img: '../../image/hoddoc-12.jpg',
    },
    {
        id: 38,
        title: 'File Frayd 1kg',
        category: 'KFS',
        price: "130 000 so'm",
        img: '../../image/filefrayd1kg.jpg',
    },
    {
        id: 39,
        title: "Go'shtli Bellisster",
        category: 'pitsa',
        price: "24 000 so'm",
        img: '../../image/img/goshtliBellisster24.webp',
    },
    {
        id: 40,
        title: 'Gamburgen dvaynoy',
        category: 'gamburgen',
        price: "24 000 so'm",
        img: '../../image/gamburben-dvaynoy.jpg',
    },
    {
        id: 41,
        title: 'Hot dog Dvaynoy',
        category: 'hotdog',
        price: "16 000 so'm",
        img: '../../image/hoddoc-dvaynoy.jpg',
    },
    {
        id: 42,
        title: "Go'shtli Miks",
        category: 'pitsa',
        price: "90 000 so'm",
        img: '../../image/img/goshtliMiks99.webp',
    },
    {
        id: 43,
        title: 'Hot Dog',
        category: 'hotdog',
        price: "18 000 so'm",
        img: '../../image/hoddoc-goshtli.jpg',
    },
    {
        id: 44,
        title: 'Grecheskiy Salat',
        category: 'salat',
        price: "23 000 so'm",
        img: '../../image/img/grecheskiySalat23.webp',
    },
    {
        id: 45,
        title: 'Karolivichiski',
        category: 'hotdog',
        price: "17 000 so'm",
        img: '../../image/hoddoc-karolivichiski.jpg',
    },
    {
        id: 46,
        title: 'Ice Tea',
        category: 'ichimlik',
        price: "13 000 so'm",
        img: '../../image/img/iceTea13.webp',
    },
    {
        id: 47,
        title: 'Hot Dog oddiy',
        category: 'hotdog',
        price: "10 000 so'm",
        img: '../../image/hoddoc_oddiy.jpg',
    },
    {
        id: 48,
        title: 'KFS 1kg',
        category: 'KFS',
        price: "110 000 so'm",
        img: '../../image/keefdi1kg.jpg',
    },
    {
        id: 49,
        title: 'Kapachino Qahva',
        category: 'ichimlik',
        price: "12 000 so'm",
        img: '../../image/img/kapuchinoQahva12.webp',
    },
    {
        id: 50,
        title: 'Kebab Pitsa',
        category: 'pitsa',
        price: "60 000 so'm",
        img: '../../image/img/kebabPitsa60.webp',
    },
    {
        id: 51,
        title: 'KFS 0.5kg',
        category: 'KFS',
        price: "55 000 so'm",
        img: '../../image/keifsi500gr.jpg',
    },
    {
        id: 52,
        title: 'Kofe qora',
        category: 'ichimlik',
        price: "6 000 so'm",
        img: '../../image/kofe-qora.jpg',
    },
    {
        id: 53,
        title: 'Kulcha Non',
        category: 'non',
        price: "3 000 so'm",
        img: '../../image/kulcha-hleb.jpg',
    },
    {
        id: 54,
        title: 'Kvarokli',
        category: 'shirinlik',
        price: "14 000 so'm",
        img: '../../image/lakomctvo.jpg',
    },
    {
        id: 55,
        title: 'Fri',
        category: 'fri',
        price: "16 000 so'm",
        img: '../../image/img/kartoshkaFri16.webp',
    },
    {
        id: 56,
        title: 'Lakomka Chokolat',
        category: 'shirinlik',
        price: "16 000 so'm",
        img: '../../image/lakomka-chokolat.jpg',
    },
    {
        id: 57,
        title: 'Kombo Pitsa',
        category: 'pitsa',
        price: "55 000 so'm",
        img: '../../image/img/komboPitsa55.webp',
    },
    {
        id: 58,
        title: 'Limon Choy',
        category: 'ichimlik',
        price: "12 000 so'm",
        img: '../../image/img/limonliChoy12.webp',
    },
    {
        id: 59,
        title: 'Lakomka',
        category: 'shirinlik',
        price: "14 000 so'm",
        img: '../../image/lakomka.jpg',
    },
    {
        id: 60,
        title: 'Lavash Achchiq',
        category: 'lavash',
        price: "28 000 so'm",
        img: '../../image/lavash_achchiq.jpg',
    },
    {
        id: 61,
        title: 'Laymli Chizkeyk',
        category: 'shirinlik',
        price: "22 000 so'm",
        img: '../../image/img/laymliChizkeyk22.webp',
    },
    {
        id: 62,
        title: 'Musqaymoq',
        category: 'musqaymoq',
        price: "15 000 so'm",
        img: '../../image/musqaymoq.jpg',
    },
    {
        id: 63,
        title: 'Pepsi 0.5l',
        category: 'ichimlik',
        price: "8 000 so'm",
        img: '../../image/pepsi0.5-bltulka.jpg',
    },
    {
        id: 64,
        title: 'Margarita',
        category: 'pitsa',
        price: "39 000 so'm",
        img: '../../image/img/margarita39.webp',
    },
    {
        id: 65,
        title: 'Pepsi 1l',
        category: 'ichimlik',
        price: "11 000 so'm",
        img: '../../image/pepsi1l.jpg',
    },
    {
        id: 66,
        title: 'Sasitka safi',
        category: 'sasitka',
        price: "12 000 so'm",
        img: '../../image/sasitka(safi).jpg',
    },
    {
        id: 67,
        title: 'Limonli Choy',
        category: 'ichimlik',
        price: "12 000 so'm",
        img: '../../image/img/limonliChoy12.webp',
    },
    {
        id: 68,
        title: 'Meksikancha Pitsa',
        category: 'pitsa',
        price: "55 000 so'm",
        img: '../../image/img/meksikanchaPitsa55.webp',
    },
    {
        id: 69,
        title: 'Malinali Choy',
        category: 'ichimlik',
        price: "12 000 so'm",
        img: '../../image/img/malinaliChoy12.webp',
    },
    {
        id: 70,
        title: 'Tovuqli Billisster',
        category: 'pitsa',
        price: "22 000 so'm",
        img: '../../image/img/tovuqliBellisster22.webp',
    },
    {
        id: 71,
        title: 'Supper Miks',
        category: 'pitsa',
        price: "90 000 so'm",
        img: '../../image/img/supperMiksPitsa90.webp',
    },
    {
        id: 72,
        title: 'Tarxum',
        category: 'ichimlik',
        price: "13 000 so'm",
        img: '../../image/img/tarxun13.webp',
    },
    {
        id: 73,
        title: 'Shokoladli Fondan',
        category: 'shirinlik',
        price: "19 000 so'm",
        img: '../../image/img/shokoladliFondan19.webp',
    },
    {
        id: 74,
        title: 'Yashil Choy',
        category: 'ichimlik',
        price: "4 000 so'm",
        img: '../../image/img/yashilChoy4.webp',
    },
    {
        id: 75,
        title: 'Sezar Salat',
        category: 'salat',
        price: "23 000 so'm",
        img: '../../image/img/SezarSalat23.webp',
    },
    {
        id: 76,
        title: 'Peperon Pitsa',
        category: 'pitsa',
        price: "45 000 so'm",
        img: '../../image/img/peperoniPitsa.webp',
    },
    {
        id: 77,
        title: 'Shefdan Bellisster',
        category: 'pitsa',
        price: "22 000 so'm",
        img: '../../image/img/ShefdanBellisster22.webp',
    },
    {
        id: 78,
        title: "Pishloqli Jo'ja",
        category: 'pitsa',
        price: "39 000 so'm",
        img: "../../image/img/PishloqliJo'ja39.webp",
    },
    {
        id: 79,
        title: 'Qora Choy',
        category: 'ichimlik',
        price: "4 000 so'm",
        img: '../../image/img/qoraChoy4.webp',
    },
    {
        id: 80,
        title: 'Shokoladli Chizkeyk',
        category: 'shirinlik',
        price: "22 000 so'm",
        img: '../../image/img/shokoladliChizkeyk22.webp',
    },
    {
        id: 81,
        title: 'Pishloqli Pitsa',
        category: 'pitsa',
        price: "39 000 so'm",
        img: '../../image/img/pishloqliPitsa39.webp',
    },
    {
        id: 82,
        title: 'Moxito',
        category: 'ichimlik',
        price: "13 000 so'm",
        img: '../../image/img/moxita13.webp',
    },
];
const ulRespons = document.querySelector('.respons_item'),
    bars = document.querySelector('.bars'),
    navRes = document.querySelector('.nav_res'),
    aboutCards = document.querySelector('.about_cards');
const containerBtn = document.querySelector('.about_menu');

window.addEventListener('DOMContentLoaded', () => {
    displayMenu(menus);
    displayCategory();
});
bars.addEventListener('click', () => {
    if (ulRespons.classList.contains('block')) {
        ulRespons.classList.add('none');
        ulRespons.classList.remove('block');
    } else {
        ulRespons.classList.add('block');
        ulRespons.classList.remove('none');
    }

    if (navRes.classList.contains('navbar')) {
        navRes.classList.remove('navbar');
        navRes.classList.add('respons');
    } else {
        navRes.classList.add('navbar');
        navRes.classList.remove('respons');
    }
});
function displayMenu(menuList) {
    let displayMenu = menuList.map((item) => {
        return `
        <div class="about_card" id="${item.id}">
            <div class="about_image">
                <img src="${item.img}" alt="" />
            </div>
            <div class="about_card_text">
                <h1 class="about_card_title">${item.title}</h1>
                <h3 class="about_card_narx">${item.price}</h3>
                <div class="about_card_function" >
                    <form action="">
                        <input type="number" placeholder="0" id="${item.id}" class="aboutInput" />
                    </form>
                </div>
                <button class="about_btn_add">Karzinka Add</button>
            </div>
        </div>
                    `;
    });
    displayMenu = displayMenu.join('');
    aboutCards.innerHTML = displayMenu;

    const aboutCard = document.querySelectorAll('.about_card');
    const aboutInput = document.querySelectorAll('.aboutInput');
    const tbody = document.getElementById('tbody');
    aboutCard.forEach((item) => {
        valueItem(item);
    });
    function valueItem(item) {
        aboutInput.forEach((i) => {
            const btn = item.lastElementChild.lastElementChild;
            const narx = item.lastElementChild.childNodes[3].textContent;
            const title = item.lastElementChild.firstElementChild.textContent;
            if (i.id === item.id) {
                btn.addEventListener('click', () => {
                    // console.log(i.value, title, narx);
                    tbody.innerHTML += `
                    <tr>
                        <td>${title}</td>
                        <td>${narx}</td>
                        <td>${i.value}</td>
                    </tr>
                    `;
                    i.value = '';
                });
            }
        });
    }
}

function displayCategory() {
    const categories = menus.reduce(
        (values, item) => {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ['all']
    );
    const categoriesBtn = categories.map((category) => {
        return `<button data-id="${category}" type="button" class="filter-btn">${category}</button>`;
    });
    containerBtn.innerHTML = categoriesBtn.join('');

    // filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            console.log(category);
            const categoryList = menus.filter((item) => {
                if (item.category === category) {
                    return item;
                }
            });
            if (category === 'all') {
                displayMenu(menus);
            } else {
                displayMenu(categoryList);
            }
        });
    });
}
const sectionNavbar = document.querySelector('.section_navbar');
const scroll = document.querySelector('.scroll');
window.addEventListener('scroll', () => {
    let scrollPage = window.pageYOffset;
    if (scrollPage > 300) {
        scroll.style.display = 'block';
        scroll.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        scroll.style.display = 'none';
    }
});
const galareyaImg = document.querySelector('.galareya_images');
function images(image) {
    let num;
    for (let i = 0; i < 30; i++) {
        num = Math.floor(Math.random() * 82);
        let galareyaImage = image[num].img;
        galareyaImg.innerHTML += `
            <div class="galareya_images_img">
                <img src="${galareyaImage}" alt="" />
            </div>
        `;
    }
}
images(menus);
