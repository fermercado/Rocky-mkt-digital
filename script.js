

// ROLAGEM SUAVE PARA OS ITENS DA PAGINA

const menuOptions = document.querySelectorAll('.button-footer, .img-menu a, .menu-options a[href^="#"]');

menuOptions.forEach(options => {
    options.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;

}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 110;
    
    scrollToPositon(to)
}

function scrollToPositon(to){
    smoothScrollTo(0, to);
}

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 800;
  
    
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  }; 


  // MENU HAMBURGUER

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

}

btnMobile.addEventListener('click' , toggleMenu);