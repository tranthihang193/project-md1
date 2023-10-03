import { REMEMBER_ME, USERS,getItemLocalStorage,setLocalStorage,USER } from "../helper.js"

const inputRememberMe = document.getElementById("remember-me")
const btnLogin = document.getElementById("btn-login")

    btnLogin.addEventListener("click",()=>{

    const btnLogin = document.getElementById("btn-login")
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

//lấy list user từ local
const users = getItemLocalStorage(USERS)
console.log(users);
// thực hiện so sánh user login và local
const userFoundByEmailPass = users.find(item => item.username === email && item.password===password)

if(userFoundByEmailPass){
    const rememberMe = document.getElementById("remember-me")
    if(rememberMe.checked){
        setLocalStorage(REMEMBER_ME,true)
    }else{
        setLocalStorage(REMEMBER_ME,false)
    }
    setLocalStorage(USER,userFoundByEmailPass)
    window.location.href = "/pillowmart-master/my-project/home/index.html"
}else{
    alert("sai thong tin tai khoan hoac mat khau!!!")
}
})



// inputRememberMe.addEventListener("change",(e)=>{
//     console.log(e.target.checked);
// })
