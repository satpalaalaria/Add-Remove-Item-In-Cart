"use strict";
async function asyncall(){
await fetch('https://fakestoreapi.com/products').then(response=>{
    return response.json();
}).then(data=>{
    data.map(product =>{ 
        const cards=`
            <div class="card">
                <img src="${product.image}" alt="image" style="width:65%; margin:auto; height:35%;" id="imageId"><br>
                <h3 id="producttitle" style="font-size: 13px;color: rgb(35, 35, 194);">${product.title}</h3>
                <p class="titileCategory" style="font-size: 12px;">${product.category}</p>
                <h5 id="priceOfProduct" style="color: red;">Price:${product.price} &#8377</h5>
                <label for="style" style="color: brown;">-:Description:-</label>
                <p style="font-size: 10px;">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"</p>
                <button class="addTocart" data-product-id=${product.id}>Add to Cart</button>
            </div>
        `
        const selectElement=document.querySelector('.card-deck');
        selectElement.insertAdjacentHTML('beforeend',cards)    
    });


    var svg1=document.querySelector('h1');
    var button=document.getElementsByClassName('addTocart');
    for (const i of button)
    {
        i.addEventListener('click',(e)=>{
            var add=Number(svg1.getAttribute('data-count')|| 0);
            svg1.setAttribute('data-count', add + 1);
            svg1.classList.add('zero');
        })
    };  

    let productIsInCart=[]
    function updateProductInCart(cardClass){
        for(let i=0; i<productIsInCart.length;i++){
            if(productIsInCart[i].id==cardClass.id){
                alert('Product alredy add in cart')
                // svg1.setAttribute('data-count', add + 1-1);
                return;
            }
        }
        productIsInCart.push(cardClass);
        localStorage.setItem("cart",JSON.stringify(productIsInCart));
    };


    const allCardClass=document.querySelectorAll('.card');
    allCardClass.forEach(cardClass =>{
        cardClass.addEventListener('click',(e)=>{
            if(e.target.classList.contains('addTocart')){
                const prodeuctID=e.target.dataset.productId;
                const prodeuctName=cardClass.querySelector('#producttitle').innerHTML;
                const prodeuctImage=cardClass.querySelector('#imageId').getAttribute("src");
                const prodeuctPrice=cardClass.querySelector('#priceOfProduct').innerHTML;
                const productCategpry=cardClass.querySelector('.titileCategory').innerHTML;

                let productToCart={
                    name:prodeuctName,
                    image:prodeuctImage,
                    price:prodeuctPrice,
                    id:prodeuctID,
                    category:productCategpry
                }  
                updateProductInCart(productToCart);
            }
        })
    });     
}).catch(error=>{
    console.log(error);
})};
asyncall();


// function addToCart(pId,Pname,Pprice){
//     // let product1={productId:pId,productTitle:Pname};
//     // localStorage.setItem("cart",JSON.stringify(product1)); 
//     let cart=localStorage.getItem("cart");
//     // console.log(JSON.parse(cart));
//     // let cartItem=JSON.parse(cart);
//     // console.log(cartItem);
//     if(cart==null){
//         alert("empty cart");
//         let product1=[];
//         let product2={productId:pId,productTitle:Pname,prodeuctPrice:Pprice};
//         product1.push(product2);
//         localStorage.setItem("cart",JSON.stringify(product1)); 
//     }else{
//         // alert('satpal')
//         let cartItem=JSON.parse(cart);
//         // console.log(cartItem);
//         let cartItemCheck=cartItem.find((item)=> item.prodeuctId==pId)
//         if(cartItemCheck){
//             alert("alredy added")
//         }else{
//             let product2={productId:pId,productTitle:Pname,prodeuctImage:pimage,prodeuctPrice:Pprice};
//             cartItem.push(product2);
//             localStorage.setItem("cart",JSON.stringify(cartItem)); 
//         }
//     }
// }
// // addToCart()
// // addToCart(`${recip.Id}`,`${recip.Title}`,`${recip.Image}`,`${recip.Price}`);
// const prodeuctId=document.querySelectorAll('.card').id;
// const productTitle=document.querySelectorAll('#producttitle').innerHTML;
// // const prodeuctImage=document.querySelectorAll('#imageId').getAttribute("src");
// const prodeuctPrice=document.querySelectorAll('#priceOfProduct').innerHTML;
// addToCart(prodeuctId,productTitle,prodeuctPrice);
/////////////////////////////////////////////////////////////////////////////////////
// move item to cart
// var parent=e.target.parentNode;
// var clone=parent.cloneNode(true);
// select.appendChild(clone);
// clone.lastElementChild.innerText="Remove"
// // clone.lastElementChild.onclick="remove()"
// if (clone){
//     svg1.onclick=()=>{
//         select.classList.toggle('display');
//     }
// }
// const removeButton=document.querySelector('.select button');
// removeButton. onclick = ()=> {
//    select.removeChild(clone) 
//    svg1.setAttribute('data-count', add+1-1);
//    // console. log(event);
// };
//////////////////////////////////////////
// console.log(removeButton);
// function remove(){
//     const removeButton=document.querySelector('.select button');
//     console.log(removeButton);
// }
// remove();            



//////////////////////////////////////////////////////////////////////////////////////////
// const removeButtonOnClick = document.querySelectorAll('.removeButton');
// // console.log(removeButtonOnClick, 'removebuttononclick');
// for (var i = 0 ; i < removeButtonOnClick.length; i++) {
// removeButtonOnClick[i].addEventListener('click', (cardClass)=>{
//   var itemRemain= cardClass.target.dataset.productId
//   dataLocal1.forEach(element => {
//     // console.log(element.id)
//     // console.log(element.productId);
//     if(element.id===itemRemain){
//       var currentIndex=dataLocal1.lastIndexOf(element.id);
//       console.log(currentIndex);
//       dataLocal1.splice(currentIndex,1);
//       console.log(cardClass.target.parentElement.parentElement.parentElement.remove());
//       localStorage.setItem("cart",JSON.stringify(dataLocal1));

//     }
//     else{
//       console.log('something error')
//     }
//     // console.log(element);
    
//   });
// })};




















    