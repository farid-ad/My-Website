$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(`.navbar`).addClass('sticky');
    } else {
      $(`.navbar`).removeClass('sticky');
    }
    if (this.scroll > 500) {
      $(`.scroll-up-btn`).addClass('show');
    } else {
      $(`.scroll-up-btn`).removeClass('show');
    }
  });

  // slide-up script
  //   $(`.scroll-up-btn`).click(function () {
  //     $(`html`).animate({ screenTop: 0 });
  //   });

  //   toogle menu/navbar
  $(`.menu-btn`).click(function () {
    $(`.navbar .menu`).toggleClass(`active`);
    $(`.menu-btn i`).toggleClass(`active`);
  });

  // typing animation script
  let typed = new Typed('.typing', {
    strings: ['Programmer', 'Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });

  let type = new Typed('.typing-2', {
    strings: ['Programmer', 'Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });
});
