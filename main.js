const navbar = document.querySelector('.navbar');
const showModal = document.querySelector('.sidebar')
const overlay = document.querySelector('#overlay');
const hiddenModal = document.querySelector('.sidebar-header')






function toggle() {
    [overlay , hiddenModal , showModal].forEach((e)=>{
        e.classList.toggle('active');
    })
}


[hiddenModal , navbar , overlay].forEach((e)=>{
    e.addEventListener('click',toggle);
})