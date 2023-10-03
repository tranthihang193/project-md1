const PRODUCT = "product"
const ID_EDIT = "id-edit"
const USERS = "users"
const USER = "user"
const REMEMBER_ME ="remember_me"
const CART = "cart"

function randomId() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function getItemLocalStorage(key) {
    const itemInLocal = localStorage.getItem(key)
    const result =JSON.parse(itemInLocal)
    return result ?? []
}

function setLocalStorage(key,value) {
    const stringData = JSON.stringify(value);
    localStorage.setItem(key,stringData)
}


function authen(){
    const userLogin = getItemLocalStorage(USER)
    console.log(userLogin.length);

    if (userLogin.length=== undefined){
        console.log("login");
        return;
    }else{
        console.log("chưa đăng nhập");
        window.location.href = "/pillowmart-master/my-project/auth/index.html"
    }
}


const totalCart = ()=>{
    //lay ra DS sản phảm có trong giỏ hàng
    const cartList = getItemLocalStorage(CART)
   console.log(cartList);
   let sumTotal = 0;
    //dùng for để chạy qa từng sp có trong giỏ hàng
    for (let i = 0; i<cartList.length; i++){
        const product = cartList[i];
        
        const sumInProduct = Number(product.price) * product.counter
        sumTotal = sumTotal + sumInProduct
    }
    //thực hiện cộng tính tổng giá tiền
    console.log(sumTotal);

    //xác định hiển thị sumTotal ở đâu
    //id= totalCart
    //lay ra thẻ cần gán tổng
    const totalCart = document.getElementById("totalCart")
    //thay đổi giá trọ content text
    const totalCart1 = document.getElementById("totalCart1")
    
    totalCart.innerText = "$" + sumTotal
    totalCart1.innerText = "$" + sumTotal
}

    const renderCounterCart = ()=>{
        //id cart-counter
        const cartCounter = document.getElementById("cart-counter")

        const cartList = getItemLocalStorage(CART)

        let sum=0;
        for (let i=0; i<cartList.length; i++){
            const product = cartList[i];
            sum =sum + product.counter
        }
        cartCounter.innerText = sum
    }
export {randomId,setLocalStorage,getItemLocalStorage,PRODUCT,ID_EDIT,USERS,REMEMBER_ME,USER,CART,authen,totalCart,renderCounterCart}