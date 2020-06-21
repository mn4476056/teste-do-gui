//Global

var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');

//divs

var fruitDIV= document.getElementById("fruitDIV");
var juiceDIV= document.getElementById("juiceDIV");
var saladDIV = document.getElementById("saladDIV");

//information
var FRUIT = [

    {name : 'Apple', prince:1},
    {name : 'Orange', prince:1},
    {name : 'Cherry', prince:1},
    {name : 'Strawberry', prince:1},
    {name : 'Kiwi', prince:1},
    {name : 'Banana', prince:1}

];
var JUICE=[
    {name:'Juice #1', prince:10},
    {name:'Juice #2', prince:11},
    {name:'Juice #3', prince:12}
];
var SALAD =[
    {name:'Salad #1', prince:11},
    {name:'Salad #2', prince:12},
    {name:'Salad #3', prince:15}
];
//html
function HTMLfruitProduct(con){
    let URL = `../img/fruits/fruits${con}.jpeg`; // min 1 e 58
    let btn = `btnFruits${con}`;
    return`
     <div class="col-md-4">
     <div class="card-img-top" style="height:16rem;" src="${URL}" alt Card image cap">
     <div class="card-body">
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <p class="card-text">${FRUIT[con-1].name}</p>
            <p class="card-text">Prince:${FRUIT[con-1].prince}.00</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class ="btn-group">
            <button type="button" onclick="cat2('${FRUIT[con-1].name} ','
            ${FRUIT[con-1].prince}','${URL} ',' ${con} ',' ${btn}') "  
            class="btn bnt-sm btn-outline-secondary"><a
            style="color:inherit;"href="/cart">Buy</a><button>
            <button id="${btn}" type="button onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].prince}','${URL}','${con}','${btn}')"
            class="btn btn-sm btn-outline-secondary" > Add to cart</button>
            </div>
            <small class="text-muted"> Free shipping </small>
            </div>
            </div>
            </div>
            </div>
    
    
    `
    
}
function HTMLjuiceProduct(con){
    let URL = `../img/juice/juice${con}.jpeg`; // min 1 e 58
    let btn = `btnJuices${con}`;
    return`
     <div class="col-md-4">
     <div class="card-img-top" style="height:16rem;" src="${URL}" alt Card image cap">
     <div class="card-body">
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <p class="card-text">${JUICE[con-1].name}</p>
            <p class="card-text">Prince:${JUICE[con-1].prince}.00</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class ="btn-group">
            <button type="button" onclick="cat2('${JUICE[con-1].name} ','
            ${JUICE[con-1].prince}','${URL} ',' ${con} ',' ${btn}') "  
            class="btn bnt-sm btn-outline-secondary"><a
            style="color:inherit;"href="/cart">Buy</a><button>
            <button id="${btn}" type="button onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].prince}','${URL}','${con}','${btn}')"
            class="btn btn-sm btn-outline-secondary" > Add to cart</button>
            </div>
            <small class="text-muted"> Free shipping </small>
            </div>
            </div>
            </div>
            </div>
    
    
    `
    
}
function HTMLsaladProduct(con){
    let URL = `../img/salads/salads${con}.jpeg`; // min 1 e 58
    let btn = `btnJuices${con}`;
    return`
     <div class="col-md-4">
     <div class="card-img-top" style="height:16rem;" src="${URL}" alt Card image cap">
     <div class="card-body">
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <p class="card-text">${SALAD[con-1].name}</p>
            <p class="card-text">Prince:${SALAD[con-1].prince}.00</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class ="btn-group">
            <button type="button" onclick="cat2('${SALAD[con-1].name} ','
            ${SALAD[con-1].prince}','${URL} ',' ${con} ',' ${btn}') "  
            class="btn bnt-sm btn-outline-secondary"><a
            style="color:inherit;"href="/cart">Buy</a><button>
            <button id="${btn}" type="button onclick="cart('${SALAD[con-1].name}','${SALAD[con-1].prince}','${URL}','${con}','${btn}')"
            class="btn btn-sm btn-outline-secondary" > Add to cart</button>
            </div>
            <small class="text-muted"> Free shipping </small>
            </div>
            </div>
            </div>
            </div>
    
    
    `
    
}
function animation(){
const toast=swal.mixin({
    toast=true,
    position:'top-end',
    showConfirmButton:false,
    timer:1000

});
toast({
    type:'sucess',
    title: 'Added to shopping cart'

});

}
function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
        
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
        
    }
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML= `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();    
}
function cart2(name,price,url,con,btncart){

    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage=JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
        
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        products;push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML`[${products.length}]`;
    document.getElementById(btncart).style.display="none";

}


(()=>{
    for (let index= 1; index <= 6; index++){
        fruitDIV.innerHTML+=`{HTMLfruitProduct(index)}`;
    }
    for (let index= 1; index <= 3; index++){
        juiceDIV.innerHTML+=`{HTMLfruitProduct(index)}`;
        saladDIV.innerHTML+=`{HTMLfruitProduct(index)}`;
    }
    if (localStorage.getItem("cart")==null) {
        
    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
        
    }






})();