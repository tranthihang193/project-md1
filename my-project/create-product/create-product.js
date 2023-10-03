import { randomId, PRODUCT,getItemLocalStorage,setLocalStorage, authen} from "./../helper.js"

authen()

const productName = document.getElementById("basic-icon-default-productName")
const nsx = document.getElementById("basic-icon-default-nsx")
const status = document.getElementById("basic-icon-default-status")
const quantity = document.getElementById("basic-icon-default-quantity")
const price = document.getElementById("basic-icon-default-price")
const img = document.getElementById("basic-icon-default-img")

const bntSubmit = document.getElementById("bntSubmit")

bntSubmit.addEventListener("click",()=> {
    const productNameValue = productName.value
    const nsxValue = nsx.value
    const statusValue = status.value
    const quantityValue = quantity.value
    const priceValue = price.value
    const imgValue = img.value

    const newProduct = {
        productName: productNameValue,
        nsx: nsxValue,
        status:statusValue,
        quantity:quantityValue,
        price: priceValue,
        img: imgValue,
        id: randomId() 
    }

const product = getItemLocalStorage(PRODUCT)
product.push(newProduct)
setLocalStorage(PRODUCT,product)

window.location.href = "/pillowmart-master/my-project/product/index.html"
})