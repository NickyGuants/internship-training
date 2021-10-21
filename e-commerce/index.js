const bedEl=document.querySelector(".products");
const cartItemsEl= document.querySelector(".cart-items");
const cartFooterEl= document.querySelector(".cart-footer");
const totalItemsEl =document.querySelector(".total-items");

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

//fUNCTIONALITY
function renderProducts(){
  products.forEach((product)=>{
    bedEl.innerHTML += `
    <div class="card">
      <img src="${product.imgSrc}" alt="${product.name}">
      <p>${product.name}</p>
      <p>${product.description}</p>
      <div class="add-to-cart" onclick="addToCart(${product.id})">
        <button>Add to Cart</button>
      </div>
    </div>  
    `
  });
}
renderProducts();

//cart array for items in the array
let cart =[];

function addToCart(id){
  if(cart.some((item)=> item.id === id)){
    changeNumberOfUnits("plus", id)
  }else{
    const item =products.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
    alert(`${item.name} has been added to the cart`)
  }
  updateCart();
}

//update cart 

function updateCart(){
  renderCartItems();
  localStorage.setItem("CART", JSON.stringify(cart));
}

//render cart items
function renderCartItems(){
    let totalPrice =0;
    let discount =0;
    let subTotal =0;
    let grandTotal=0;
    let totalDiscount=0;
    let payableAmount=0;
    let totalItems=0;
    cartItemsEl.innerHTML = ""; // clear cart element
    cart.forEach((item)=>{
      subTotal= item.price*item.numberOfUnits;
      if(item.numberOfUnits >=50){
        discount = item.numberOfUnits*0.5;

      }else if(item.numberOfUnits >=25){
        discount= item.numberOfUnits*0.25;
      }else if(item.numberOfUnits >=10){
        discount =item.numberOfUnits*0.1;
      }else{
        discount=0;
      }
      totalPrice=subTotal-discount;
      totalItems+= item.numberOfUnits;

      totalItemsEl.innerHTML=totalItems;

        cartItemsEl.innerHTML += `
                <div class="cart-item">
                    <div class="item-info">
                        <img src="${item.imgSrc}" alt="Double size bed">
                        <h4>${item.name}</h4>
                    </div>
                    <div class="unit-price">
                        <small>$</small>${item.price}
                    </div>
                    <div class="units">
                        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                        <div class="number">${item.numberOfUnits}</div>
                        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
                    </div>
                    <div class="sub-total">
                        <small>$</small>${subTotal}
                    </div>
                    <div class="discount">
                        <small>$</small>${discount}
                    </div>
                    <div class="total-price">
                        <small>$</small>${totalPrice}
                    </div>
                </div>
        `;
      grandTotal+=subTotal;
      totalDiscount+=discount;
      payableAmount+=totalPrice;

        cartFooterEl.innerHTML =`
        <div class="grand-total">
            Grand total: $<span>${grandTotal}</span>
        </div>
        <div class="total-discount">
          Total Discount: $<span>${totalDiscount}</span>
        </div>
        <div class="total-price">
          Total  price after discount: $<span>${payableAmount}</span>
        </div>
        <div class="checkout">
          Proceed to checkout
        </div>
        `;

    }) 
}



function changeNumberOfUnits(action, id){
  cart= cart.map((item)=>{
    let numberOfUnits = item.numberOfUnits;
      if(item.id === id){
          if(action === "minus" && numberOfUnits > 1){
            numberOfUnits--;
          }else if(action === "plus" && numberOfUnits < item.instock){
            numberOfUnits++;
          }
      }
      return {
        ...item,
        numberOfUnits,
      };
  });
  updateCart();
}