"use strict";
fetch('https://fakestoreapi.com/products').then(response=>{
    return response.json();
}).then(data=>{
    console.log(data);
    const products=data.map(product =>{
        const cards=`
            <div class="card">
                <img src="${product.image}" alt="image" style="width:60%; margin:auto; height:65%;"><br>
                <h3 style="font-size: 13px;color: rgb(35, 35, 194);">${product.title}</h3>
                <p class="title" style="font-size: 12px;">${product.category}</p>
                <h5 style="color: red;">Price:${product.price} &#8377</h5>
                <label for="style" style="color: brown;">-:Description:-</label>
                <p style="font-size: 10px;">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"</p>
                <p><button>Add to Cart</button></p>
            </div>
        `
        // console.log(product);
        const selectElement=document.querySelector('.card-deck');
        // console.log(selectElement);
        selectElement.insertAdjacentHTML('beforeend',cards)

    });
}).catch(error=>{
    console.log(error);
});







    