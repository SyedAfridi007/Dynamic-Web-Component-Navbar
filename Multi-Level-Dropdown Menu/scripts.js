//Create function to select elements

const selectElement = ({ s }) => document.querySelector(s);
selectElement({ s: '.ion-md-menu' }).addEventListener('click', () => {
    selectElement({ s: 'nav' }).classList.add('active');
});
selectElement({ s: '.ion-md-close' }).addEventListener('click', () => {
    selectElement({ s: 'nav' }).classList.remove('active');
});