const selectElement =(element) => document.querySelector(element);

const header = selectElement('header');
const mainContent = selectElement('main');


selectElement('.hamburger').addEventListener('click',() => {
    header.classList.toggle('active');
    mainContent.classList.toggle('active');

});

window.onclick = (Event) => {
    if(Event.target.matches('.active')){
        if(header.classList.contains('active')){
            header.classList.remove('active');
            mainContent.classList.remove('active');
        }
    }
};







