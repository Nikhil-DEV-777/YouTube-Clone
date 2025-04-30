let menu=document.querySelector(".hamburger-menu");
menu.addEventListener('click',function(){
    let mainsidebar=document.querySelector('.main-sidebar');
    let sidebar=document.querySelector('.side-bar');
    console.log(sidebar.classList)
    mainsidebar.classList.toggle('min');
    sidebar.classList.toggle('full')
    let sidebarcontents=document.querySelector('.side-bar-full');
    sidebarcontents.classList.toggle('display')
    let body=document.querySelector('body');
    body.classList.toggle("full");
    let header=document.querySelector('.categories_selection_ALL')
    header.classList.toggle('full');
})