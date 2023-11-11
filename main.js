// copy menu
function copyMenu() {
    var dptCategory = document.querySelector('.dpt-cat')
    var dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML;
    // copy in site nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var mainPlace = document.querySelector('.off-canvas nav');
    mainPlace.innerHTML = mainNav.innerHTML;


    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu()
// show mobile menu 
const menuBtn = document.querySelector('.trigger'),
    closeBtn = document.querySelector('.t-close'),
    addClass = document.querySelector('.site');
menuBtn.addEventListener('click', function (e) {
    addClass.classList.toggle('show-menu');
    e.preventDefault();
})
closeBtn.addEventListener('click', function (e) {
    addClass.classList.remove('show-menu');
    e.preventDefault();
})

// show submenu  mobile 

const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach(menu => menu.addEventListener('click', toggle))

function toggle(e) {
    e.preventDefault();
    subMenu.forEach(item => item != this ? item.closest('.has-child').classList.remove('expend') : this.closest('.has-child').classList.toggle('expend'));
    // subMenu.forEach(item => item.parentNode.classList.remove('expend'));
    // if (this.closest('.has-child').classList != 'expend')
    // this.closest('.has-child').classList.toggle('expend');
}

// slider ... swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
    // جعل البوليتات قابلة للنقر
});

// offer Day 
let countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 1);
countDownDate.setHours(countDownDate.getHours() + 23);
countDownDate.setMinutes(countDownDate.getMinutes() + 59);
countDownDate.setSeconds(countDownDate.getSeconds() + 59);

setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let seconds = Math.floor(dateDiff / 1000) % 60;
    let minutes = Math.floor(dateDiff / 1000 / 60) % 60;
    let hours = Math.floor(dateDiff / 1000 / 60 / 60) % 24;
    let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);

    document.querySelectorAll(".seconds").forEach(i => i.innerHTML = seconds)
    document.querySelectorAll(".minutes").forEach(i => i.innerHTML = minutes)
    document.querySelectorAll(".hours").forEach(i => i.innerHTML = hours)
    document.querySelectorAll(".days").forEach(i => i.innerHTML = days)

}, 1000);
// search-bottom
const searchBottom = document.querySelector(".t-search"),
    tClose = document.querySelector(".search-close"),
    showClose = document.querySelector(".site");
searchBottom.addEventListener("click", function () {
    showClose.classList.toggle('show-search');
})
tClose.addEventListener("click", function () {
    showClose.classList.remove('show-search');
})

// show dpt menu
let dptButton = document.querySelector('.dpt-cat .dpt-trigger');
let dptClass = document.querySelector('.site');
dptButton.addEventListener('click', (e) => {
    e.preventDefault()
    dptClass.classList.toggle('show-dpt');
})

// menu-bottom scroll show 
let navBar = document.querySelector('.menu-bottom');
let prevScrollPos = window.scrollY;
window.addEventListener('scroll', function () {
    let currScrollPos = window.scrollY;
    if (currScrollPos > prevScrollPos) {
        navBar.style.transform = 'translateY(105%)';
    } else {
        navBar.style.transform = 'translateY(0%)';
    }
    prevScrollPos = currScrollPos;
})

// product image slider 
let productThumbs = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 22,
        }
    }
});
let productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumbs,
    }
});
// stock ..............
let stocks = document.querySelectorAll('.products .stock');
stocks.forEach((st) => {
    let stock = st.dataset.stock,
        available = st.querySelector('.qty-available').innerHTML,
        sold = st.querySelector('.qty-sold').innerHTML,
        percent = sold * 100 / stock;
    st.querySelector('.available').style.width = percent + '%';
})

// show mini cart 
let divToShow = '.mini-cart'
let divPopup = document.querySelector(divToShow)
let divTrigger = document.querySelector('.cart-trigger')
divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show')
        }
    }, 50)
})

// close the popup
document.addEventListener('click', (e) => {
    let isClose = e.target.closest(divToShow)
    if (!isClose && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show')
    }
})



// back-to-top
let toTop = document.querySelector('.back-to-top a')

toTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
window.onscroll = function () {

    let windowHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop > windowHeight) {
        toTop.style.bottom = '60px';
    } else {
        toTop.style.bottom = '-60px';
    }
}

let searchProducts = document.querySelectorAll('input[type="search"]')
let productsItems = document.querySelectorAll('.products.main h3 a');
function searchPro() {
    let inputValue = this.value.toLowerCase();
    for (let i = 0; i < productsItems.length; i++) {
        if (!productsItems[i].textContent.toLowerCase().includes(inputValue)) {
            productsItems[i].closest('.item').style.display = 'none';

        } else productsItems[i].closest('.item').style.display = 'block';
    }
    for (let i = 0; i < productsItems.length; i++) {
        if (inputValue == '') {
            productsItems[i].closest('.item').style.display = 'block';

        }
    }
}
searchProducts.forEach(searchProduct => {
    searchProduct.addEventListener('keyup', searchPro)
})
searchProducts.forEach(searchProduct => {
    searchProduct.addEventListener('click', searchPro)
})
searchProducts.forEach(searchProduct => {
    searchProduct.addEventListener('mouseout', searchPro)
})

// add products to local storage
let productsDom = document.querySelectorAll('.products .item h3 a');
let idProduct = 0;
function addToCart() {
    let productImage = this.closest('.item').querySelector('img');
    let productTitle = this.closest('.item').querySelector('h3 a');
    let productPrice = this.closest('.item').querySelector('.price .current');
    idProduct++;
    let items = {
        imgSrc: productImage.getAttribute('src'),
        title: productTitle.textContent,
        price: productPrice.textContent,
        count: 1,
        id: idProduct,
    }

    var products = localStorage.getItem('productsItem');

    if (products) {
        products = JSON.parse(products)
    } else {
        products = [];
    }

    products.push(items);

    var updatedProducts = JSON.stringify(products);

    localStorage.setItem('productsItem', updatedProducts);

    showProducts();


    let numProducts = document.querySelectorAll('.icon-large .fly-item span')
numProducts.forEach(num => {
    num.innerHTML = JSON.parse(localStorage.getItem('productsItem')).length
})

}


// ...........................show products in cart

let miniCart = document.querySelector('.cart-body ul')
function showProducts(allItems = []) {
    let productInCart = JSON.parse(localStorage.getItem("productsItem")) || allItems;

    let html = '';
    for (let i = 0; i < productInCart.length; i++) {

        html += `
                <li class="item">
                    <div class="thumbnail object-cover">
                        <a href="#"><img src="${productInCart[i].imgSrc}" alt=""></a>
                    </div>
                    <div class="item-content">
                        <p><a href="#">${productInCart[i].title}</a></p>
                        <span class="price">
                            <span>${productInCart[i].price}</span>
                            <span class="fly-item"><span>${productInCart[i].count}x</span></span>
                        </span>
                    </div>
                    
                </li>
                `
        miniCart.innerHTML = html
    }



    let subTotal = document.querySelectorAll('.cart-footer strong')
    subTotal.forEach(total => {
        if (localStorage.getItem('productsItem')) {
            var subtotal = JSON.parse(localStorage.getItem('productsItem')).length
            var html = subtotal * 129
            
            total.innerHTML = `$${html}.00`
        }
    })

    var num = JSON.parse(localStorage.getItem("productsItem")).length
    let numProducts = document.querySelectorAll('.icon-large .fly-item span')
    numProducts.forEach(flyItem => {
    
    flyItem.innerHTML = num
})

if (num == 0) {
    miniCart.innerHTML = ''
}

}
showProducts()

// remove item from cart


// 0........................................





let heartIcon = document.querySelectorAll('.item li.active a')
let heartCount = document.querySelector('.heart-count')
let countOffHearts = 0
heartIcon.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('.hover-able li.active a').classList.toggle('active')
        if (e.target.closest('.hover-able li.active a').classList.contains('active')) {
            countOffHearts++
            heartCount.innerHTML = countOffHearts
        } else if (!e.target.closest('.hover-able li.active a').classList.contains('active')) {
            countOffHearts--
            heartCount.innerHTML = countOffHearts
        }
    })
})

productsDom.forEach(product => {
    product.addEventListener('click', addToCart);
})


// handle the plus and minus buttons click
let plusButton = document.querySelectorAll('.plus')
let minusButton = document.querySelectorAll('.minus')

function plusValueChanged(e) {
    e.preventDefault()
    let value = parseInt(this.closest('.qty-control').querySelector('input').value)
    this.closest('.qty-control').querySelector('input').value = ++value
}
function minusValueChanged(e) {
    e.preventDefault()
    let value = parseInt(this.closest('.qty-control').querySelector('input').value)
    this.closest('.qty-control').querySelector('input').value = --value
}

plusButton.forEach(plus => {
    plus.addEventListener('click', plusValueChanged)
})
minusButton.forEach(plus => {
    plus.addEventListener('click', minusValueChanged)
})

let numProducts = document.querySelectorAll('.icon-large .fly-item span')
numProducts.forEach(num => {
    num.innerHTML = JSON.parse(localStorage.getItem('productsItem')).length
})

let imageProducts = document.querySelectorAll('.media img')

imageProducts.forEach(product => {
    product.addEventListener('click', addToCart);
})

