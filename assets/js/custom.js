let searchTopBox = document.querySelector('.search-top-box');
let searchBox = document.querySelector('.search-box');
let searchInputTop = document.querySelector('.search-input-top');
let cover = document.querySelector('.cover');
let categoryMenu = document.querySelector('.category-menu'); 
let categoryMenuList = document.querySelector('.category-menu-list'); 


searchTopBox.addEventListener('click',(event)=>{
    searchBox.classList.add('active');
    cover.classList.add('active');

});
cover.addEventListener('click',(event)=>{
    searchBox.classList.remove('active');
    cover.classList.remove('active');
});

categoryMenu.addEventListener('mousemove',()=>{
    categoryMenuList.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
// categoryMenuList.addEventListener('mousemove',()=>{
//     categoryMenuList.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// });

categoryMenu.addEventListener('mouseleave',()=>{
    categoryMenuList.style.display = 'none';
    document.body.style.overflow = 'auto';
});
// categoryMenu.addEventListener('mouseleave',()=>{
//     categoryMenuList.style.display = 'none';
//     document.body.style.overflow = 'auto';
// });