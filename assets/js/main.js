const
  navMenu = document.querySelector('#nav-menu'),
  toggleMenu = document.querySelector('#nav-toggle'),
  closeMenu = document.querySelector('#nav-close'),
  navLink = document.querySelectorAll('.nav__link'),
  sections = document.querySelectorAll('section[id]');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})

function linkAction() {
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

window.addEventListener('scroll', () => {
  const srollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
})