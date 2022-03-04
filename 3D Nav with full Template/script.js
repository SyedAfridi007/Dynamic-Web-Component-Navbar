const container = document.querySelector('.page-container');
const pages = [...document.querySelectorAll('.page')];
const toggleBtn = document.querySelector('.toggle-btn');
const ul = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');
const link = [...document.querySelectorAll('.link')];

let currentPageIndex = 0;

toggleBtn.addEventListener('click',() => {
    toggleBtn.classList.toggle('active');
    container.classList.toggle('active');
    ul.classList.toggle('show');

})

const changePage = (i) => {
    overlay.style.animation = 'slide .1s linear .1s';
    setTimeout(() => {
        pages[currentPageIndex].classList.remove('active');
        pages[i].classList.add('active');
        currentPageIndex = i;
    }, 500);
    setTimeout(() => {
        overlay.style.animation = null;
    }, 1000);
}

link.forEach((item, i) =>{
    item.addEventListener('click',() => {
        changePage(i);
    })
})