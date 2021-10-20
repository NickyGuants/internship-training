const bedEl=document.querySelector(".products");

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
      <button>Add to Cart</button>
    </div>  
    `
  });
}
renderProducts();

