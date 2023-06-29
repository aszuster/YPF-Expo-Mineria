// PAGINA YPF GAS

// OWL YPF GAS GRANEL CON CONTADOR

$('.owl-ypf-gas-granel')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-compliance').text(
      carousel.relative(carousel.current()) + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 10,
    stagePadding: 25,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
    navText: [
      "<img src='images/slider/arrow.png'>",
      "<img src='images/slider/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-counter-granel').append($('.owl-ypf-gas-granel .owl-nav'));

// OWL YPF GAS ENVASADO CON CONTADOR

$('.owl-ypf-gas-envasado')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-compliance').text(
      carousel.relative(carousel.current()) + 1
    );

    $('.slider-counter').text(carousel.relative(carousel.current()) + 1);
    $('.slider-counter-desktop').text(
      carousel.relative(carousel.current()) + 1 + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 10,
    stagePadding: 25,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 2,
      },
    },
    navText: [
      "<img src='images/slider/arrow.png'>",
      "<img src='images/slider/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-counter-envasado').append($('.owl-ypf-gas-envasado .owl-nav'));

// OWL YPF GAS CONTACTO CON CONTADOR

$('.owl-contacto')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-compliance').text(
      carousel.relative(carousel.current()) + 1
    );

    $('.slider-counter-contacto').text(
      carousel.relative(carousel.current()) + 1
    );
    $('.slider-counter-contacto-desktop').text(
      carousel.relative(carousel.current()) + 1 + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 10,
    stagePadding: 25,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 2,
      },
    },
    navText: [
      "<img src='images/slider/arrow.png'>",
      "<img src='images/slider/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-counter-contacto').append($('.owl-contacto .owl-nav'));

// OWL YPF GAS 4 CONTACTO CON CONTADOR

$('.owl-contacto-4')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-compliance').text(
      carousel.relative(carousel.current()) + 1
    );

    $('.slider-counter-contacto-4').text(
      carousel.relative(carousel.current()) + 1
    );
    $('.slider-counter-contacto-desktop').text(
      carousel.relative(carousel.current()) + 1 + 1
    );
  })
  .owlCarousel({
    loop: false,
    margin: 10,
    stagePadding: 25,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
    navText: [
      "<img src='images/slider/arrow.png'>",
      "<img src='images/slider/arrow.png'>",
    ],
  });

//MOVEMOS DE LUGAR LOS OWL-NAV

$('#nav-counter-contacto-4').append($('.owl-contacto-4 .owl-nav'));
