import { ID_EDIT,PRODUCT,authen,getItemLocalStorage, setLocalStorage } from "../helper.js";

authen()

window.addEventListener("load",()=>{
    const idEdit = getItemLocalStorage(ID_EDIT);
    const products = getItemLocalStorage(PRODUCT);
    const productNeedEdit = products.find(item=>item.id===idEdit)

    const productName = document.getElementById("basic-icon-default-productName")
    productName.value = productNeedEdit.productName
    const nsx = document.getElementById("basic-icon-default-nsx")
    nsx.value = productNeedEdit.nsx
    const status = document.getElementById("basic-icon-default-status")
    status.value = productNeedEdit.status
    const quantity = document.getElementById("basic-icon-default-quantity")
    quantity.value = productNeedEdit.quantity
    const price = document.getElementById("basic-icon-default-price")
    price.value = productNeedEdit.price

    const img = document.getElementById("basic-icon-default-img")
    img.value = productNeedEdit.img
})

const btnUpdate = document.getElementById("btnUpdate");

btnUpdate.addEventListener("click",()=>{
// lấy dữ liệu từ các ô input
    const productName = document.getElementById("basic-icon-default-productName").value
    const nsx = document.getElementById("basic-icon-default-nsx").value
    const status = document.getElementById("basic-icon-default-status").value
    const quantity = document.getElementById("basic-icon-default-quantity").value
    const price = document.getElementById("basic-icon-default-price").value
    const img = document.getElementById("basic-icon-default-img").value
    // lấy list product từ local
    const products = getItemLocalStorage(PRODUCT)
// lấy ra ID cần update
    const idEdit = getItemLocalStorage(ID_EDIT)
//sửa dữ liệu
    const newData = products.map(item => {
        if(item.id === idEdit){
            item.productName = productName;
            item.nsx = nsx;
            item.status = status;
            item.quantity = quantity;
            item.price = price;
            item.img = img;
        }
        return item
    })
    setLocalStorage(PRODUCT,newData)

    window.location.href = "/pillowmart-master/my-project/product/index.html"
})
