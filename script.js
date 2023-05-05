const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".dangnhap");
const registerLink = document.querySelector(".dangki");


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})