const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});


const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.slider-btn__next',
    prevEl: '.slider-btn__prev',
  },
});

const scrollDiv = document.getElementById('timeline')
const progressBar = document.querySelector('.progress-bar__timeline')
const height = document.documentElement.scrollHeight - 
document.documentElement.clientHeight

window.addEventListener('scroll', () => {
  const scrollTop = scrollDiv.scrollHeight
  const scrolled = (scrollTop / height) * 100

  progressBar.style.height = `${scrolled}%`
})