"use strict";
const mainSvg = document.querySelector('#main-svg');
const dataLocal = localStorage.getItem("cart");
const dataLocal1 = JSON.parse(dataLocal);
dataLocal1?.map(product => {
  const cards =
    `
            <div class="card1">
                <div class="imageControl">
                    <img src="${product.image}" alt="image" >
                </div>
                <div>
                    <h3 class="productName">${product.name}</h3>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h4 class="productCetogry" style="font-size: 10px;">${product.category}</h4>
                            <h5 style="color: red;">${product.price}</h5>
                        </div>
                        <button class="removeButton" data-product-id=${product.id}>Remove</button>
                    </div>
                </div>
            </div>
        `
  const selectEle = document.querySelector('.select');
  selectEle?.insertAdjacentHTML('beforeend', cards);

//   mainSvg.addEventListener('click', (e) => {
//     e.preventDefault();
//     const selectEle = document.querySelector('.select');
//     selectEle.classList.toggle('display');
//   });
});
// const mainSvg = document.querySelector('#main-svg');

mainSvg.addEventListener('click', (e) => {
  e.preventDefault();
  const selectEle = document.querySelector('.select');
  selectEle.classList.toggle('display');
});
/////////////////////////////////////////////////////////////////////////////////



const removeButtonOnClick = document.querySelectorAll('.removeButton');
// console.log(removeButtonOnClick, 'removebuttononclick');
// for (var i = 0 ; i < removeButtonOnClick.length; i++) {
// removeButtonOnClick[i].addEventListener('click', (cardClass)=>{
//   var itemRemain= cardClass.target.dataset.productId;
//   dataLocal1.forEach(element => {
//     // console.log(element.id)
//     // console.log(element.productId);
//     if(element.id===itemRemain){
//       var currentIndex=dataLocal1.lastIndexOf(element.id);
//       console.log(currentIndex);
//       dataLocal1.splice(currentIndex,1);
//     //   dataLocal1.splice(i,i+1)
//       console.log(cardClass.target.parentElement.parentElement.parentElement.remove());
//       localStorage.setItem("cart",JSON.stringify(dataLocal1));
//       window.location.reload();

//     }
//     else{
//       console.log('something error')
//     }
//     // console.log(element);  
//   });
// })};
////////////////////////////////////////////////////////////////////////////////////////
// const removeBtn = document.querySelectorAll('.remove-item')


const remove = function(){
removeButtonOnClick.forEach((btn,i)=>{
    const removeshow = localStorage.getItem('cart')
    let dataChnage =JSON.parse(removeshow)
    if(dataChnage===null) return
    btn.addEventListener('click',function(e){

        dataChnage.splice(i,i+1)
        localStorage.setItem('cart',JSON.stringify(dataChnage))
        window.location.reload();
        // e.preventDefault();
    })
})
}

remove()

/////////////////////////////////////////////////////////////////////////////////

  // for(let i=0; i<dataLocal1.length;i++){
  //     if(dataLocal1[i].id==cardClass.id){
  //         alert('Remove Item from Cart')
  //         return;
  //     }
  // }


///////////////////////////////////////////////////////////////////////////////////
