let productdiv = document.querySelector(".product");

let productsAPI = () => {
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => {
            json.forEach(element => {

                productdiv.innerHTML += `
                <div class="productitem">
                    <img src="${element.image}" alt="${element.title}">
                    <h3>${element.title}</h3>
                    <p>${element.description}</p>
                    <p class="price">Price: $${element.price}</p>
                </div>`;
            })
        })
}

productsAPI();
