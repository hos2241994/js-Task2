
//Variables
const btnsContainer = document.querySelector('.pages-btns');
const productList = document.querySelector('.products-container');
let productsNumber =  100;
let productsInPage = 9;
const productListItems = (i) => {
    productList.innerHTML  +=` <div class="product-item">
    <h2>product${i + 1}</h2>
    </div>`;
}

//Primary Products
for(let i = 0; i < 9 ; i++){
    productListItems (i);
};

//Genertate Btns
for(let i = 0;  i < Math.ceil(productsNumber / productsInPage); i++){
    btnsContainer.innerHTML  +=`<button class=${i == 0 ? "active" : ""} type="button" id=${i + 1} onclick="showProducts(${i + 1})">${i + 1}</button>`;
};

//Show Products
function showProducts(id){
    let startNumber = (id - 1) * productsInPage;
    let endNumber = startNumber + productsInPage > productsNumber ? productsNumber : startNumber + productsInPage;
    productList.innerHTML = "";
    let btns = btnsContainer.querySelectorAll('button');
    [...btns].forEach(item => {
        if(item.id == id){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        };
    });
    for(let i = startNumber; i < endNumber ; i++){
        productListItems (i);
    }
}