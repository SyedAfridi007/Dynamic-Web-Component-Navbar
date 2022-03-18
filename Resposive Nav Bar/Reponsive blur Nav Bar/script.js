const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const mainContent = document.querySelector('.main-content');
    
    burger.addEventListener('click',()=> {
      
      // toggle nav
      nav.classList.toggle('nav-active');

      // animate Links
      navLinks.forEach((link, index)=> {
        // if link has animation on it..
        if(link.style.animation){
          link.style.animation = ''  
        } else {
          // must use back tick "`"
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      
      // burger animation
      burger.classList.toggle('close');
      
      // add opacity to main content
      mainContent.classList.toggle('background-fade')
    });  
  }

  
// call function
navSlide();



// check window size, if it is larger than 850px, remove nav-active class from nav ul
const mainContent = document.querySelector('.main-content');
const navUl = document.getElementById("navUl");
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-links li');

// remove blur and close nav function
function removeBlurAndClose() {
  if (window.innerWidth > 850) {
    navUl.classList.remove("nav-active");
    mainContent.classList.remove('background-fade')
    burger.classList.remove('close');

    // remove links style
    navLinks.forEach((link, index)=> {
        link.style.animation = ''  
      });
  }
}


// close nav drop down when user clicks outside of nav (if nav-active)
function exitNav() {
  if (window.innerWidth <= 850 && navUl.classList.contains("nav-active") == true) {
    navUl.classList.remove("nav-active");
    mainContent.classList.remove('background-fade')
    burger.classList.remove('close');

    // remove links style
    navLinks.forEach((link, index)=> {
        link.style.animation = ''  
      });
    }
  }


// Listen for main content click 
mainContent.addEventListener('click',exitNav);

// on window resize, call the remove blur and close nav function
window.onresize = removeBlurAndClose;
