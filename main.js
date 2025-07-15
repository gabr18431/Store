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

/**
 * Toggles the 'expend' class on the clicked submenu item while removing it from others.
 * 
 * @param {Event} e - The event object from the click event.
 */

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
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

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
    },
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
/**
 * Shows the back-to-top button when the user scrolls down the page
 * Hides it when the user scrolls back to the top
 * @this window
 */
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
/**
 * Searches the products items based on the input value
 * @param {object} this - The input element
 */
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

function favoriteItems() {
    let favoriteItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    let favoriteItemsHtml = document.querySelectorAll('.products .item h3 a');
    if (favoriteItems.length === 0) {
        favoriteItemsHtml.forEach(item => {
            item.closest('.item').querySelector('.hover-able li.active a').classList.remove('active');
        });
        return;
    }
    favoriteItemsHtml.forEach(item => {
        let isFavorite = favoriteItems.some(favorite => favorite.title === item.textContent);
        if (isFavorite) {
            item.closest('.item').querySelector('.hover-able li.active a').classList.add('active');
        } else {
            item.closest('.item').querySelector('.hover-able li.active a').classList.remove('active');
        }
    })
}
favoriteItems();

// add products to local storage
let productsDom = document.querySelectorAll('.products .item h3 a');
let idProduct = 0;
/**
 * addToCart: add product to local storage
 * @param {object} this button clicked
 * @return {undefined}
 */
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

    // check if the product already exists in the cart
    let existingProduct = products.find(product => product.title === items.title);

    if (existingProduct) {
        existingProduct.count++;
    }
    // if the product does not exist, add it to the cart
    if (!existingProduct) {
        products.push(items);
    }
    
    var updatedProducts = JSON.stringify(products);

    localStorage.setItem('productsItem', updatedProducts);

    showProducts();


    let numProducts = document.querySelectorAll('.icon-large .fly-item span')
numProducts.forEach(num => {
    num.innerHTML = JSON.parse(localStorage.getItem('productsItem')).length
})

}

document.querySelectorAll('.products .hover-able li:last-child a').forEach(icon => {
    icon.addEventListener('click', addToCart);
})
/**
 * addToWishlist: add product to wishlist or remove it if it is already in the wishlist
 * @param {object} e event
 * @return {undefined}
 */
function addToWishlist(e) {
    e.target.closest('.hover-able li.active a').classList.toggle('active')
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

    var products = localStorage.getItem('wishlistItems');

    if (products) {
        products = JSON.parse(products)
    } else {
        products = [];
    }

    // check if the product already exists in the cart
    let existingProduct = products.find(product => product.title === items.title);

    if (existingProduct) {
        products = products.filter(product => product.title !== items.title);
    }
    // if the product does not exist, add it to the cart
    if (!existingProduct) {
        products.push(items);
    }
    
    var updatedProducts = JSON.stringify(products);

    localStorage.setItem('wishlistItems', updatedProducts);

    showProductsInWishlist();
    updateHeartCount()

}

document.querySelectorAll('.products .hover-able li.active a:not(.active)').forEach(icon => {
    icon.addEventListener('click', addToWishlist);
})

// ...........................show products in cart

let miniCart = document.querySelector('.cart-body ul')
/**
 * showProducts: render products in cart
 * @param {array} allItems products in cart
 */

/**
 * Renders the products in the cart and updates the cart UI.
 * 
 * This function retrieves products from local storage or uses the provided
 * array of items to build the cart's HTML representation. It updates the
 * cart's content and subtotal, and adjusts the number of products displayed.
 *
 * @param {Array} allItems - An array of product objects to render in the cart
 *                           if local storage is empty. Each product object
 *                           should include `imgSrc`, `title`, `price`, and
 *                           `count` properties.
 */

function showProducts(allItems = []) {
    let productInCart = JSON.parse(localStorage.getItem("productsItem")) || allItems;
    if (!productInCart || productInCart.length === 0) {
        miniCart.innerHTML = '<div class="empty-cart"><h3 style="color: #999; margin-bottom: 20px;" class="text-center " >Your cart is empty</h3></div>';
        return;
    }
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
                        <div class="delete-item">
                            <a href="#" class="item-remove"><i onClick="removeItemFromCart(event)" class="fa-regular fa-circle-xmark"></i></a>
                        </div>
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

    var num = JSON.parse(localStorage.getItem("productsItem"))?.length || 0;
    let numProducts = document.querySelectorAll('.icon-large .fly-item span')
    numProducts.forEach(flyItem => {
    
    flyItem.innerHTML = num
})

if (num == 0) {
    miniCart.innerHTML = ''
}

}
showProducts()
function showProductsInWishlist(allItems = []) {
    let productInCart = JSON.parse(localStorage.getItem("wishlistItems")) || allItems;
    let productHtml = document.querySelector('.wish-list .products.main');
    let html = '';
    if (!productHtml) {
       return; // If the productHtml element does not exist, exit the function
    }
    if (!productInCart || productInCart.length === 0) {
        productHtml.innerHTML = '<div class="empty-cart"><h2 style="color: #d3d3d3; margin-bottom: 20px;" class="text-center " >Your wishlist is empty</h2></div>';
        return;
    }
    for (let i = 0; i < productInCart.length; i++) {

        html += `
                <div class="item">
                    <div class="media">
                        <div class="thumbnail object-cover">
                            <a href="page-single.html">
                                <img src="${productInCart[i].imgSrc}" alt="${productInCart[i].title}">
                            </a>
                        </div>
                        <div class="hover-able">
                            <ul>
                                <li class="active"><a class="active" onclick="removeItemFromWishlist(event)" href="#"><i class="fa-regular fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa-regular fa-eye"></i></a></li>
                                <li><a href="single-product.html"><i class="fa-solid fa-cart-plus"></i></a></li>
                            </ul>
                        </div>
                        <div class="discount circle flex-center"><span>31%</span></div>
                    </div>
                    <div class="content">
                        <h3 class="main-links"><a href="page-single.html">${productInCart[i].title}</a></h3>
                    </div>
                </div>
                `
        productHtml.innerHTML = html
    }

    var num = JSON.parse(localStorage.getItem("productsItem"))?.length || 0;
    let numProducts = document.querySelectorAll('.icon-large .fly-item span')
    numProducts.forEach(flyItem => {
    
    flyItem.innerHTML = num
    })

    if (num == 0) {
        miniCart.innerHTML = ''
    }

}
showProductsInWishlist()

// remove item from wishlist and cart
function removeItemFromWishlist(e) {
    let productTitle = e.target.closest('.item').querySelector('h3 a').textContent;
    let products = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    let productsUpdated = products.filter(product => product.title !== productTitle);
    localStorage.setItem('wishlistItems', JSON.stringify(productsUpdated));
    showProductsInWishlist(productsUpdated);
    countOffHearts = productsUpdated.length;
    heartCount.innerHTML = countOffHearts
}
/**
 * removeItemFromCart: remove item from cart
 * @param {object} e event
 * @return {undefined}
 */
function removeItemFromCart(e) {
    let productTitle = e.target.closest('.item-content').querySelector('p a').textContent;
    let products = JSON.parse(localStorage.getItem('productsItem')) || [];
    let productsUpdated = products.filter(product => product.title !== productTitle);
    localStorage.setItem('productsItem', JSON.stringify(productsUpdated));
    showProducts(productsUpdated);
    
    let numProducts = document.querySelectorAll('.icon-large .fly-item span')
    numProducts.forEach(num => {
        num.innerHTML = JSON.parse(localStorage.getItem('productsItem'))?.length || 0
    })
}


let heartIcon = document.querySelectorAll('.item li.active a')
let heartCount = document.querySelector('.heart-count')
let countOffHearts = localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')).length : 0

/**
 * updateHeartCount: update the number of hearts in the heart icon
 * @return {undefined}
 */
function updateHeartCount() {
    heartCount.innerHTML = localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')).length : 0;
}
updateHeartCount()

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
    this.closest('.qty-control').querySelector('input').value = value > 0 ? --value : 0
}

plusButton.forEach(plus => {
    plus.addEventListener('click', plusValueChanged)
})
minusButton.forEach(plus => {
    plus.addEventListener('click', minusValueChanged)
})

let numProducts = document.querySelectorAll('.icon-large .fly-item span')
numProducts.forEach(num => {
    num.innerHTML = JSON.parse(localStorage.getItem('productsItem'))?.length || 0
})

let imageProducts = document.querySelectorAll('.media img')
imageProducts.forEach(image => {
    image.addEventListener('error', function () {
        this.src = 'https://via.placeholder.com/150';
    });
});

// *****************************************************************************

