let searchFrom = document.querySelector('.search-from');

document.querySelector('#search-btn').onclick = () =>{
    searchFrom.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#fav-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
}


