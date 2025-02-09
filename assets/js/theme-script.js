/* ------------------------------------------------
  Project:   Winck - Bootstrap 5 Multipurpose Landing Page
  Author:    ThemeHt
------------------------------------------------ */
/* ------------------------
    Table of Contents

  1. Predefined Variables
  2. Preloader  
  3. FullScreen
  4. Counter
  5. Owl carousel
  6. Testimonial Carousel
  7. Dropdown
  8. Magnific Popup
  9. Scroll to top
  10. Fixed Header
  11. Text Color, Background Color And Image
  12. Contact Form
  13. Countdown
  14. Rangeslider
  15. Btnproduct
  16. LightSlider
  17. Wow Animation
  18. Particles
  19. Window load and functions
  

------------------------ */

"use strict";

/*------------------------------------
  HT Predefined Variables
--------------------------------------*/
var $window = $(window),
  $document = $(document),
  $body = $('body'),
  $fullScreen = $('.fullscreen-banner') || $('.section-fullscreen'),
  $halfScreen = $('.halfscreen-banner');

//Check if function exists
$.fn.exists = function () {
  return this.length > 0;
};


/*------------------------------------
  HT PreLoader
--------------------------------------*/
function preloader() {
  $('#ht-preloader').fadeOut();
};

/*------------------------------------
  HT FullScreen
--------------------------------------*/
function fullScreen() {
  if ($fullScreen.exists()) {
    $fullScreen.each(function () {
      var $elem = $(this),
        elemHeight = $window.height();
      if ($window.width() < 768) $elem.css('height', elemHeight / 1);
      else $elem.css('height', elemHeight);
    });
  }
  if ($halfScreen.exists()) {
    $halfScreen.each(function () {
      var $elem = $(this),
        elemHeight = $window.height();
      $elem.css('height', elemHeight / 2);
    });
  }
};


/*------------------------------------
  HT Counter
--------------------------------------*/
function counter() {
  $('.count-number').countTo({
    refreshInterval: 2
  });
};


/*------------------------------------
  HT Owl Carousel
--------------------------------------*/
function owlcarousel() {
  $('.owl-carousel').each(function () {
    var $carousel = $(this);
    $carousel.owlCarousel({
      items: $carousel.data("items"),
      slideBy: $carousel.data("slideby"),
      center: $carousel.data("center"),
      loop: true,
      margin: $carousel.data("margin"),
      dots: $carousel.data("dots"),
      nav: $carousel.data("nav"),
      autoplay: $carousel.data("autoplay"),
      autoplayTimeout: $carousel.data("autoplay-timeout"),
      navText: ['<span class="la la-angle-left"><span>', '<span class="la la-angle-right"></span>'],
      responsive: {
        0: {
          items: $carousel.data('xs-items') ? $carousel.data('xs-items') : 1
        },
        576: {
          items: $carousel.data('sm-items')
        },
        768: {
          items: $carousel.data('md-items')
        },
        1024: {
          items: $carousel.data('lg-items')
        },
        1200: {
          items: $carousel.data("items")
        }
      },
    });
  });
};

/*------------------------------------
  HT Testimonial Carousel
--------------------------------------*/
function testimonialcarousel() {
  $('.testimonial-carousel').on('slide.bs.carousel', function (evt) {
    $('.testimonial-carousel .controls li.active').removeClass('active');
    $('.testimonial-carousel .controls li:eq(' + $(evt.relatedTarget).index() + ')').addClass('active');
  })
};



/*------------------------------------
  HT Dropdown
--------------------------------------*/
function dropdown() {
  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass("show");
    });

    return false;
  });
};


/*------------------------------------
  HT Magnific Popup
--------------------------------------*/
function magnificpopup() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a.popup-img',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
  if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

};


/*------------------------------------
  HT Scroll to top
--------------------------------------*/
function scrolltop() {
  var pxShow = 300,
    goTopButton = $(".scroll-top")
  // Show or hide the button
  if ($(window).scrollTop() >= pxShow) goTopButton.addClass('scroll-visible');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= pxShow) {
      if (!goTopButton.hasClass('scroll-visible')) goTopButton.addClass('scroll-visible')
    } else {
      goTopButton.removeClass('scroll-visible')
    }
  });
  $('.smoothscroll').on('click', function (e) {
    $('body,html').animate({
      scrollTop: 0
    }, 3000);
    return false;
  });
};


/*------------------------------------
  HT Fixed Header
--------------------------------------*/
function fxheader() {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 300) {
      $('#header-wrap').addClass('fixed-header');
    } else {
      $('#header-wrap').removeClass('fixed-header');
    }
  });
};


/*------------------------------------------
  HT Text Color, Background Color And Image
---------------------------------------------*/
function databgcolor() {
  $('[data-bg-color]').each(function (index, el) {
    $(el).css('background-color', $(el).data('bg-color'));
  });
  $('[data-text-color]').each(function (index, el) {
    $(el).css('color', $(el).data('text-color'));
  });
  $('[data-bg-img]').each(function () {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });
};


/*------------------------------------
  HT Contact Form
--------------------------------------*/



/*------------------------------------
  HT Countdown
--------------------------------------*/
function countdown() {
  $('.countdown').each(function () {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $(this).html(event.strftime('<li><span>%-D</span><p>Days</p></li>' + '<li><span>%-H</span><p>Hours</p></li>' + '<li><span>%-M</span><p>Minutes</p></li>' + '<li><span>%S</span><p>Seconds</p></li>'));
    });
  });
};



/*------------------------------------
  HT btnproduct
--------------------------------------*/
function btnproduct() {
  $('.btn-product-up').on('click', function (e) {
    e.preventDefault();
    var numProduct = Number($(this).next().val());
    if (numProduct > 1) $(this).next().val(numProduct - 1);
  });
  $('.btn-product-down').on('click', function (e) {
    e.preventDefault();
    var numProduct = Number($(this).prev().val());
    $(this).prev().val(numProduct + 1);
  });
};


/*------------------------------------
  HT LightSlider
--------------------------------------*/
function lightSlider() {
  $('#imageGallery').lightSlider({
    gallery: true,
    item: 1,
    verticalHeight: 450,
    thumbItem: 4,
    slideMargin: 0,
    speed: 600,
    autoplay: true,
  });
};



/*------------------------------------
  HT Wow Animation
--------------------------------------*/
function wowanimation() {
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  });
  wow.init();
}

/*------------------------------------
  HT Particles
--------------------------------------*/

function particles() {
  jQuery("#particles-js").each(function () {
    particlesJS({
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#01a479"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#ffffff"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

  })
}


/*------------------------------------
  HT Window load and functions
--------------------------------------*/
$(document).ready(function () {
  fullScreen(),
    owlcarousel(),
    counter(),
    testimonialcarousel(),
    dropdown(),
    magnificpopup(),
    scrolltop(),
    fxheader(),
    databgcolor(),
    countdown(),
    btnproduct(),
    lightSlider(),
    particles();
});


$window.resize(function () { });


/*------------------------------------
 Change language 
--------------------------------------*/
function changeLanguage(lang) {

  location.hash = lang;
  location.reload();
}
$(window).on('load', function () {
  preloader(),
    wowanimation();
});
var current_active = 'Orders_features'
var language = {
  eng: {
    nav: {
      nav_Home: "Home",
      nav_Company: "Company",
      nav_Features: "Features",
      nav_Benfits: "Benefits",
      nav_Pricing: "Pricing",
      nav_Support: "Support",
      nav_Login: "Login",
      nav_SignUp: "Sign Up"
    },
    header: {
      Manage: "Manage your",
      Businesses: "Business",
      infew: "in few Clicks",
      Intuitiv: "Intuitive & AI powered Invoicing, Accounting and ERP platform",
      Creat_Account: "Create Free Account"

    },
    Our_Features: "Our Benefits",
    What_makes: "A Unique User Experience",
    onePlace: {
      oneplace_header: "Save your time",
      oneplace_first: "Quotes, Invoices & Orders in few seconds",
      oneplace_second: "Manage Inventory & CRM ",
      oneplace_third: "Export Data to accountant in few clicks",
      oneplace_fourth: "Cash & Expenses management",
      learn_more2: "Learn More"
    },
    onepowerful: {
      onepowerful_header: "No Sweat",
      onepowerful_first: "Intuitive & User-Friendly",
      onepowerful_second: "AI, predictions & Optical Capture Recognition",
      onepowerful_third: "Full Integration with accountants systems",
      onepowerful_fourth: "All your business in one unique dashboard",
      learn_more1: "Learn More",

    },
    convenience: {
      convenience_header: "Boost cash position",
      convenience_first: "Focus on core business",
      convenience_second: "Scale down Accounting time",
      convenience_third: "End hassles of closing periods",
      convenience_fourth: "Get relevant and useful data analytics",
      learn_more3: "Learn More"
    },
    footer: {
      footer_simple: "Pricing Plans",
      footer_affordable: "Simple, Fair and affordable prices for all.",
      address: "Avenue Louise, 65 Brussels",
      Our_Address: "Our Address ",
      About_footer: "Company",
      Copyright: "Copyright ©2023 All rights reserved"

      ,
      footer_Features: "Features"
    },
    //features page 
    Features_header_page: "features",

    //  features header 
    Orders_features: "Invoices & Orders",
    Automation_features: "Access and Automation",
    Accounting_andFinance: "Accounting and Finance",
    Payment: "Payment",
    Inventory: "Inventory",

    //  Invoices & Orders

    Orders_features_header: "Invoices & Orders",
    Orders_features_content1: "Create invoices and orders in few seconds",
    Orders_features_content2: "Transform quotes into invoices in one click",
    Orders_features_content3: "Send invoices and orders through email, Watsapp and SMS",
    Orders_features_content4: "Mail quotes, invoices and orders through our mail services (option)",
    Orders_features_content5: "Manage and treat special services (Uber delivery, Deliveroo...)",

    //  Invoices & Orders

    Orders_features_header: "Invoices & Orders",
    Orders_features_content1: "Create invoices and orders in few seconds",
    Orders_features_content2: "Transform quotes into invoices in one click",
    Orders_features_content3: "Send invoices and orders through email, Watsapp and SMS",
    Orders_features_content4: "Mail quotes, invoices and orders through our mail services (option)",
    Orders_features_content5: "Manage and treat special services (Uber delivery, Deliveroo...)",

    //  Access and Automation"

    Automation_features_header: "Access and Automation",
    Automation_features_content1: "Automatic registration of new customers with VAT number",
    Automation_features_content2: "Automatic extraction of receipts and invoices from images and pdf (OCR/NLP)",
    Automation_features_content3: "Automatic extraction of invoices and receipts received by email",
    Automation_features_content4: "Data extraction and automatic tabulation and allocation",
    Automation_features_content6: "Alerts for compliance issues (bank accounts, missing invoices, receipts...etc)",
    Automation_features_content7: "Access your account & run your business from anywhere",
    Automation_features_content8: "Grant access to your selected users (Change access rights at any time)",
    Automation_features_content9: "Free iOS and Android Apps",
    Automation_features_content10: "Bank-standards security encryption & storage of your data and documents",
    Automation_features_content11: "Data updated and secure accross all devices",

    // Accounting and Finance

    Accounting_andFinance_header: "Accounting and Finance",
    Accounting_andFinance_content1: "Managment of sales, expenses and compliance reports (VAT return...)",
    Accounting_andFinance_content2: "Cash and expenseses management with automatic categorization",
    Accounting_andFinance_content3: "Real-time & forecast cash position taking into account data from bank account, sales, expenses...",
    Accounting_andFinance_content4: "Tailor-made access for your accountant  and full compatibility with his applications",
    Accounting_andFinance_content5: "Real-time collaboration with accountant and full accessibility to cloud data according to permissions",
    Accounting_andFinance_content6: "Export compatible journals of sales, expenses , bank reports & VAT to your accountants",
    Accounting_andFinance_content7: "Profit & Loss reporting",
    Accounting_andFinance_content8: "Analyse the health of your bsuiness with SquirX built-in reports",
    Accounting_andFinance_content9: "Make growth and investment decisions with real-time data and meaningful analysis",

    // Payment

    Payment_header: "Payment",
    Payment_content1: "Automatic payment tracking ",
    Payment_content2: "Structured communication for payment",
    Payment_content3: "Automatic reconciliation of  accounts payables and receivables against bank statement ",
    Payment_content4: "PSP services ( to come)",
    Payment_content5: "Online payments facilities of invoices and orders",


    // CRM

    CRM_header: "CRM ",
    CRM_content1: "360°view of your business by customer, products...",
    CRM_content2: "Automatic tracking and reminders of tasks ( Offers, opportunities, overdue...)",
    CRM_content3: "Automatic customers reports & analysis (sales, credit rating...) ",
    CRM_content4: "Tasks related and opportunities",

    // Inventory

    Inventory_header: "Inventory ",
    Inventory_content1: "Organize your vendors data in one unique database",
    Inventory_content2: "Real-time view of your stock in hand ",
    Inventory_content3: "Auto-update your inventory according to sales and orders",
    Inventory_content4: "keep tack of ordered material and easy replenishment",
    Inventory_content5: "Tailor-made alerts on low stock ",

    // ERP

    ERP_header: "ERP ",
    ERP_content1: "Time sheets",
    ERP_content2: "Schedules",

    //About_Us page 
    About_Us_header_page: "About Us",
    about_1: "SquirX has been created in 2019. Its purpose is to provide under-served customers with a simple, intuitive, affordable, yet powerful tool to manage flawlessly their daily ERP operations and enable their growth. SquirX is based in Brussels and will serve the european markets before expanding to high potential growth markets in Africa and Middle-east.",
    about_2: "The CSR is embedded in the company's DNA. Thus, it employs resources in conflict-hit countries in an effort to alleviate economic distress and provide real opportunities to young talents in these areas."
  },
  Fr: {
    nav: {
      nav_Home: "Acceuil",
      nav_Company: "entreprise",
      nav_Features: "Fonctionnalités",
      nav_Benfits: "Avantages",
      nav_Pricing: "tarifs",
      nav_Support: "assistance",
      nav_Login: "se connecter",
      nav_SignUp: "démarrez"
    },
    header: {
      Manage: "Gérer votre ",
      Businesses: "entreprise ",
      infew: "en quelques clicks",
      Intuitiv: "Votre outil de Facturation, de Comptabilité & de Ressources boosté par l’Intelligence Artificielle ",
      Creat_Account: "Créer un compte"
    },
    Our_Features: "Nos avantages",
    What_makes: "Expérience Unique tous les jours",
    onePlace: {
      oneplace_header: "Les Fonctions",
      oneplace_first: "Vos devis, factures et commandes en quelques secondes",
      oneplace_second: "Automatiser la gestion de votre inventaire & relations clients (CRM)",
      oneplace_third: "Export comptables & liasse fiscales en quelques clicks",
      oneplace_fourth: "Gestion simplifiée des dépenses et drésorerie",
      learn_more2: "apprendre encore plus",

    },
    onepowerful: {
      onepowerful_header: "Les Atouts",
      onepowerful_first: "Intuitive & simple d'utilisation",
      onepowerful_second: "AI, OCR (Reconnaissance et traitement d'images)",
      onepowerful_third: "Compatibilité avec les outils comptables",
      onepowerful_fourth: "Un tableau de bord simple, complet et user-friendly",
      learn_more1: "apprendre encore plus",

    },
    convenience: {
      convenience_header: "Les Bénéfices",
      convenience_first: "Dédiez votre temps à vos activités principales",
      convenience_second: "Diminuez vos tâches administratives",
      convenience_third: "Plus de tracas en périodes de clôtures",
      convenience_fourth: "Analyses pertinentes de vos données",
      learn_more3: "apprendre encore plus",

    },
    //footer
    footer: {
      footer_simple: "Plans de tarification",
      footer_affordable: "simple, Juste et des prix abordables pour tous.",
      address: "Avenue Louise, 65 Bruxelles",
      Our_Address: "Notre adresse ",
      About_footer: "entreprise"
      ,
      footer_Features: "Fonctionnalités",
      Copyright: "Copyright © 2021 Tous droits réservés"
    },
    //features page 

    Features_header_page: "Fonctionnalités",
    //  features header 
    Orders_features: "Facturation et Commandes",
    Automation_features: "Accès et automatisation",
    Accounting_andFinance: "Comptabilite et Finance",
    Payment: "Paiement",
    Inventory: "Inventaire",


    //  Invoices & Orders

    Orders_features_header: "Facturation et Commandes",
    Orders_features_content1: "Préparez vos factures et commandes en quelques secondes",
    Orders_features_content2: "Transformez vos devis en factures en un click",
    Orders_features_content3: "Envoyez vos devis, factures et commandes par e-mail, Watsapp, SMS & Courier (option)",
    Orders_features_content4: "Suivi des factures et des commandes en temps réel  ",
    Orders_features_content5: "Gérer et traiter les services prestataires (livraison Uber, Deliveroo ...)",


    //  Access and Automation"

    Automation_features_header: "Accès et automatisation",
    Automation_features_content1: "Enregistrement automatique des nouveaux clients avec numéro de TVA",
    Automation_features_content2: "Extraction automatique des reçus et factures à partir d'images et de pdf (OCR / NLP)",
    Automation_features_content3: "Extraction automatique des factures reçues par email",
    Automation_features_content4: "Extraction de données, classification et tabulation automatiques",
    Automation_features_content6: "Alertes de conformité (comptes bancaires, factures et recus manquants...)",
    Automation_features_content7: "Accédez à votre compte et gérez votre entreprise de n'importe où",
    Automation_features_content8: "Accordez les droits d'accès aux utilisateurs sélectionnés (modifiez les droits d'accès à tout moment)",
    Automation_features_content9: "Applications iOS et Android gratuites",
    Automation_features_content10: "Cryptage et stockage securises de vos données et documents ",
    Automation_features_content11: "Données mises à jour et sécurisées sur tous vos appareils",

    // Accounting and Finance

    Accounting_andFinance_header: "Comptabilite et Finance",
    Accounting_andFinance_content1: "Gestion des ventes, des dépenses et edition des rapports ( declaration TVA...)",
    Accounting_andFinance_content2: "Gestion de la trésorerie et des dépenses avec classification automatique",
    Accounting_andFinance_content3: "Position de trésorerie ( réelle et prévisionnelle)",
    Accounting_andFinance_content4: "Accès sur mesure pour votre comptable et compatibilité totale avec ses logiciels",
    Accounting_andFinance_content5: "Collaboration en temps réel avec le comptable et accessibilité totale aux données cloud selon autorisations",
    Accounting_andFinance_content6: "Exportez des journaux  de ventes, de dépenses, des rapports bancaires, TVA aux formats compatibles",
    Accounting_andFinance_content7: "Rapports de profits et pertes",
    Accounting_andFinance_content8: "Analysez la santé de votre entreprise avec les rapports intégrés SquirX",
    Accounting_andFinance_content9: "Prenez vos décisions  d'investissement avec des données en temps réel et analyses utiles",

    // Payment

    Payment_header: "Paiement ",
    Payment_content1: "Suivi automatique des paiements",
    Payment_content2: "Communication structurée pour le paiement",
    Payment_content3: "Rapprochement automatique des comptes fournisseurs et créances avec le relevé bancaire",
    Payment_content4: "Services PSP (à venir)",
    Payment_content5: "Paiement en ligne des factures et des commandes (Paypal, Stripe...)",


    // CRM

    CRM_header: "CRM ",
    CRM_content1: "Vue à 360 ° de votre entreprise par client, produits ...",
    CRM_content2: "Suivi automatique et rappels de tâches (Offres, devis, retard ...",
    CRM_content3: "Rapports et analyses automatiques des clients (ventes, profil de risque ...)",
    CRM_content4: "Tâches liées et opportunités",

    // Inventory

    Inventory_header: "Inventaire ",
    Inventory_content1: "Organisez les données de vos fournisseurs dans une base de données unique",
    Inventory_content2: "Vue en temps réel de votre stock en main",
    Inventory_content3: "Mettez à jour automatiquement votre inventaire en fonction des ventes et des commandes",
    Inventory_content4: "Tracabilite du matériel commandé et réapprovisionnement facile",
    Inventory_content5: "Alertes sur mesure pour status de stock",

    // ERP

    ERP_header: "ERP ",
    ERP_content1: "Feuilles du temps",
    ERP_content2: "Agenda utile",

    //About_Us page 
    About_Us_header_page: "À propos de nous",
    about_1: "SquirX a été établie en 2019. Son objectif est de fournir aux clients mal desservis un outil simple, intuitif, abordable, mais puissant pour gérer parfaitement leurs opérations ERP quotidiennes et permettre leur croissance. SquirX est basé à Bruxelles et desservira les marchés européens avant de s'étendre aux marchés à fort potentiel de croissance en Afrique et au Moyen-Orient."
    , about_2: "La RSE est ancrée dans l'ADN de l'entreprise. Ainsi, elle emploie des ressources dans les pays touchés par des conflits dans le but d'atténuer la détresse économique et d'offrir de réelles opportunités aux jeunes talents dans ces pays."
  }
};


if (window.location.hash) {


  if (window.location.hash == "#Fr") {
    if (window.location.href.indexOf("Erp") > -1) {
      document.getElementById('bentfit_2').classList.add('card-hightfr');
      document.getElementById('bentfit_3').classList.add('card-hightfr');


      //Nav
      nav_Home.textContent = language.Fr.nav.nav_Home;

      nav_Company.textContent = language.Fr.nav.nav_Company;
      document.getElementById("nav_Company").href = "about-us#Fr";

      nav_Features.textContent = language.Fr.nav.nav_Features;
      document.getElementById("nav_Features").href = "features#Fr";

      nav_Benfits.textContent = language.Fr.nav.nav_Benfits;
      nav_Pricing.textContent = language.Fr.nav.nav_Pricing;
      // nav_Support.textContent = language.Fr.nav.nav_Support;
      nav_Login.textContent = language.Fr.nav.nav_Login;
      nav_SignUp.textContent = language.Fr.nav.nav_SignUp;


      //header
      heder_Manage.textContent = language.Fr.header.Manage;
      heder_Businesses.textContent = language.Fr.header.Businesses;
      heder_infew.textContent = language.Fr.header.infew;
      header_Intuitive.textContent = language.Fr.header.Intuitiv;
      Creat_Account.textContent = language.Fr.header.Creat_Account;

      // contnet
      Our_Features.textContent = language.Fr.Our_Features
      What_makes.textContent = language.Fr.What_makes;
      // one Place
      oneplacee_header.textContent = language.Fr.onePlace.oneplace_header
      oneplacee_first.textContent = language.Fr.onePlace.oneplace_first;
      oneplacee_second.textContent = language.Fr.onePlace.oneplace_second;
      oneplacee_third.textContent = language.Fr.onePlace.oneplace_third;
      oneplacee_fourth.textContent = language.Fr.onePlace.oneplace_fourth;
      learn_more2.textContent = language.Fr.onePlace.learn_more2;
      document.getElementById("learn_more2").href = "features#Fr";

      // one powerful
      onepowerful_header.textContent = language.Fr.onepowerful.onepowerful_header;
      onepowerful_first.textContent = language.Fr.onepowerful.onepowerful_first;
      onepowerful_second.textContent = language.Fr.onepowerful.onepowerful_second;
      onepowerful_third.textContent = language.Fr.onepowerful.onepowerful_third;
      onepowerful_fourth.textContent = language.Fr.onepowerful.onepowerful_fourth;
      learn_more1.textContent = language.Fr.onepowerful.learn_more1;
      document.getElementById("learn_more1").href = "features#Fr";


      // one convenience
      convenience_header.textContent = language.Fr.convenience.convenience_header;
      convenience_first.textContent = language.Fr.convenience.convenience_first;
      convenience_second.textContent = language.Fr.convenience.convenience_second;
      convenience_third.textContent = language.Fr.convenience.convenience_third;
      convenience_fourth.textContent = language.Fr.convenience.convenience_fourth;
      learn_more3.textContent = language.Fr.convenience.learn_more3;
      document.getElementById("learn_more3").href = "features#Fr";


      var priceing = document.getElementById('Pricing_container');
      var priceing_FR = document.createElement('div');
      priceing_FR.innerHTML = `    <div class="row align-items-center pt-1">
      <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0  ">
        <!-- Card -->
        <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
          <!-- Body -->
          <div class="card-body">
            <!-- Badge -->
            <div  style="text-align: center;" class="pt-3 mb-3 "><span
                class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 10</span>
            </div>
            <h2  style="text-align: center;" class="h3 font-weight-bold"> 
              <span id="price">Gratuit</span>
            </h2>
            <div class="custom-separator my-4 mx-auto bg-primary"></div>

            <!-- Features -->
            <div class="row no-gutters">
              <div class="col-sm fw-bold">
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>

                    <p id="oneplace_first" class="mb-0 ml-3 ">Toutes les fonctionnalités  </p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>

                    <p id="oneplace_second" class="mb-0 ml-3  ">Jusqu'a 10 factures & commandes par mois 
                    </p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>
                    <p id="oneplace_third" class="mb-0 ml-3 "> 1 Utilisateur 
                    </p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>
                    <p id="oneplace_fourth" class="mb-0 ml-3  ">1 Accès comptable
                    </p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>
                    <p id="oneplace_fourth" class="mb-0 ml-3  ">Options exclues
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style="text-align: center;">
              <button style="width: 180px;" type="button"
                class="  btn button-rounder filed  btn-block btn-primaryfiled">Souscrire</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
        <!-- Card -->
        <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
          <!-- Body -->
          <div class="card-body">
            <!-- Badge -->
            <div style="text-align: center;" class="pt-3 mb-3 "><span
                class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 20</span>
            </div>
            <h2 style="text-align: center;" class="h3 font-weight-bold">€5<span
                class="text-small font-weight-normal text-light ml-2">/ mois</span></h2>
            <div class="custom-separator my-4 mx-auto bg-primary"></div>

            <!-- Features -->
            <div class="row no-gutters">
              <div class="col-sm fw-bold">
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>

                    <p id="oneplace_first" class="mb-0 ml-3 ">Toutes les fonctionnalités</p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>

                    <p id="oneplace_second" class="mb-0 ml-3  ">Jusqu'a 20 factures & commandes par Mois 
                    </p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>
                    <p id="oneplace_third" class="mb-0 ml-3 "> 1 Utilisateur
                    </p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>
                    <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accès comptable
                    </p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>
                    <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options exclues
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style="text-align: center;">
              <button style="width: 180px;" type="button"
                class="  btn button-rounder filed  btn-block btn-primaryfiled">Souscrire</button>
            </div>
          </div>
        </div>
      </div>
  
      <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
        <!-- Card -->
        <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
          <!-- Body -->
          <div class="card-body">
            <!-- Badge -->
            <div style="text-align: center;" class="pt-3 mb-3 "><span
                class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 100</span>
            </div>
            <h2 style="text-align: center;" class="h3 font-weight-bold">€10<span
                class="text-small font-weight-normal text-light ml-2">/ mois</span></h2>
            <div class="custom-separator my-4 mx-auto bg-primary"></div>

            <!-- Features -->
            <div class="row no-gutters">
              <div class="col-sm fw-bold">
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>

                    <p id="oneplace_first" class="mb-0 ml-3 ">Toutes les fonctionnalités</p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>

                    <p id="oneplace_second" class="mb-0 ml-3  ">Jusqu'a 100 factures & commandes par moish
                    </p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>
                    <p id="oneplace_third" class="mb-0 ml-3 "> 1 Utilisateur
                    </p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>
                    <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accès comptable
                    </p>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center">
                    <i class="las la-check"></i>
                    <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options exclues
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style="text-align: center;">
              <button style="width: 180px;" type="button"
                class="  btn button-rounder filed  btn-block btn-primaryfiled">Souscrire</button>
            </div>
          </div>
        </div>
      </div>
      
</div>

<div class="row align-items-center pt-4 p-1">
  <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
    <!-- Card -->
    <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
      <!-- Body -->
      <div class="card-body">
        <!-- Badge -->
        <div style="text-align: center;" class="pt-3 mb-3 "><span
            class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 200</span>
        </div>
        <h2 style="text-align: center;" class="h3 font-weight-bold">€20<span
            class="text-small font-weight-normal text-light ml-2">/ mois</span></h2>
        <div class="custom-separator my-4 mx-auto bg-primary"></div>

        <!-- Features -->
        <div class="row no-gutters">
          <div class="col-sm fw-bold">
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>

                <p id="oneplace_first" class="mb-0 ml-3 ">Toutes les fonctionnalités</p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>

                <p id="oneplace_second" class="mb-0 ml-3  ">Jusqu'a 200 factures & commandes par moish
                </p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>
                <p id="oneplace_third" class="mb-0 ml-3 "> 2 Utilisateur
                </p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>
                <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accès comptable
                </p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>
                <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options exclues
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style="text-align: center;">
          <button style="width: 180px;" type="button"
            class="  btn button-rounder filed  btn-block btn-primaryfiled">Souscrire</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
    <!-- Card -->
    <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
      <!-- Body -->
      <div class="card-body">
        <!-- Badge -->
        <div style="text-align: center;" class="pt-3 mb-3 "><span
            class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 300</span>
        </div>
        <h2 style="text-align: center;" class="h3 font-weight-bold">€30<span
            class="text-small font-weight-normal text-light ml-2">/ mois</span></h2>
        <div class="custom-separator my-4 mx-auto bg-primary"></div>

        <!-- Features -->
        <div class="row no-gutters">
          <div class="col-sm fw-bold">
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>

                <p id="oneplace_first" class="mb-0 ml-3 ">Toutes les fonctionnalités</p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>

                <p id="oneplace_second" class="mb-0 ml-3  ">Jusqu'a 300 factures & commandes par moish
                </p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>
                <p id="oneplace_third" class="mb-0 ml-3 "> 2 Utilisateur
                </p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>
                <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accès comptable
                </p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>
                <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options exclues
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style="text-align: center;">
          <button style="width: 180px;" type="button"
            class="  btn button-rounder filed  btn-block btn-primaryfiled">Souscrire</button>
        </div>
      </div>
    </div>
  </div>



  <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
    <!-- Card -->
    <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
      <!-- Body -->
      <div class="card-body">
        <!-- Badge -->
        <div style="text-align: center;" class="pt-3 mb-3 "><span
            class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 500</span>
        </div>
        <h2 style="text-align: center;" class="h3 font-weight-bold">€50<span
            class="text-small font-weight-normal text-light ml-2">/ mois</span></h2>
        <div class="custom-separator my-4 mx-auto bg-primary"></div>

        <!-- Features -->
        <div class="row no-gutters">
          <div class="col-sm fw-bold">
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>

                <p id="oneplace_first" class="mb-0 ml-3 ">Toutes les fonctionnalités</p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>

                <p id="oneplace_second" class="mb-0 ml-3  ">Jusqu'a 500 factures & commandes par moish
                </p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>
                <p id="oneplace_third" class="mb-0 ml-3 "> 2 Utilisateur
                </p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>
                <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accès comptable
                </p>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center">
                <i class="las la-check"></i>
                <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options exclues
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style="text-align: center;">
          <button style="width: 180px;" type="button"
            class="  btn button-rounder filed  btn-block btn-primaryfiled">Souscrire</button>
        </div>
      </div>
    </div>
  </div>
  
</div>`;
      priceing.parentNode.replaceChild(priceing_FR, priceing);

      //footer
      footer_simple.textContent = language.Fr.footer.footer_simple;
      footer_affordable.textContent = language.Fr.footer.footer_affordable;
      address.textContent = language.Fr.footer.address;
      Our_Address.textContent = language.Fr.footer.Our_Address;
      About_footer.textContent = language.Fr.footer.About_footer;
      document.getElementById("About_footer").href = "about-us#Fr";

      footer_Features.textContent = language.Fr.footer.footer_Features;
      document.getElementById("footer_Features").href = "features#Fr";

      Copyright.textContent = language.Fr.footer.Copyright;


    }


    if (window.location.href.indexOf("features") > -1) {

      nav_Home.textContent = language.Fr.nav.nav_Home;
      document.getElementById("nav_Home").href = "Erp#Fr";

      nav_Features.textContent = language.Fr.nav.nav_Features;
      nav_Login.textContent = language.Fr.nav.nav_Login;
      nav_SignUp.textContent = language.Fr.nav.nav_SignUp;
      Features_header_page.textContent = language.Fr.Features_header_page;
      //features page
      Orders_features.textContent = language.Fr.Orders_features;
      Automation_features.textContent = language.Fr.Automation_features;
      Accounting_andFinance.textContent = language.Fr.Accounting_andFinance;
      Payment.textContent = language.Fr.Payment;
      Inventory.textContent = language.Fr.Inventory;
      //footer
      address.textContent = language.Fr.footer.address;
      Our_Address.textContent = language.Fr.footer.Our_Address;
      About_footer.textContent = language.Fr.footer.About_footer;
      document.getElementById("About_footer").href = "Erp#Fr";

      footer_Features.textContent = language.Fr.footer.footer_Features;
      Copyright.textContent = language.Fr.footer.Copyright;
      if (current_active == 'Orders_features') {


        Orders_features_header.textContent = language.Fr.Orders_features_header;
        Orders_features_content1.textContent = language.Fr.Orders_features_content1;
        Orders_features_content2.textContent = language.Fr.Orders_features_content2;
        Orders_features_content3.textContent = language.Fr.Orders_features_content3;
        Orders_features_content4.textContent = language.Fr.Orders_features_content4;
        Orders_features_content5.textContent = language.Fr.Orders_features_content5;

      }

    }

    if (window.location.href.indexOf("about-us") > -1) {
      nav_Home.textContent = language.Fr.nav.nav_Home;
      document.getElementById("nav_Home").href = "Erp#Fr";

      nav_Company.textContent = language.Fr.nav.nav_Company;
      nav_Login.textContent = language.Fr.nav.nav_Login;
      nav_SignUp.textContent = language.Fr.nav.nav_SignUp;




      About_Us_header_page.textContent = language.Fr.About_Us_header_page;
      about_1.textContent = language.Fr.about_1;
      about_2.textContent = language.Fr.about_2;

      //footer
      address.textContent = language.Fr.footer.address;
      Our_Address.textContent = language.Fr.footer.Our_Address;
      About_footer.textContent = language.Fr.footer.About_footer;
      document.getElementById("About_footer").href = "Erp#Fr";

      footer_Features.textContent = language.Fr.footer.footer_Features
      Copyright.textContent = language.Fr.footer.Copyright;

    }

    selectdlang.textContent = "French"
    document.getElementById('selectedlangIcon').src = "assets/images/icon/france.svg"
    var fr_op = document.getElementById('fr_op');
    var en_op = document.createElement('a');
    en_op.innerHTML = `<a style="padding-left: 2px;
        margin-left: 9px;" id="eng_op"  class="dropdown-item" onclick="changeLanguage('eng')" href="Erp#eng"><img class="img-fluid" width="20px" src="assets/images/icon/united-kingdom.svg" alt=""> English</a>`;
    fr_op.parentNode.replaceChild(en_op, fr_op);

  } else if (window.location.hash == "#eng") {
    if (window.location.href.indexOf("Erp") > -1) {
      document.getElementById('bentfit_2').classList.remove('card-hightfr');
      document.getElementById('bentfit_3').classList.remove('card-hightfr');
      //Nav
      nav_Home.textContent = language.eng.nav.nav_Home;
      document.getElementById("nav_Home").href = "Erp#eng";

      nav_Company.textContent = language.eng.nav.nav_Company;
      document.getElementById("nav_Company").href = "about-us#eng";

      nav_Features.textContent = language.eng.nav.nav_Features;
      document.getElementById("nav_Features").href = "features#eng";

      nav_Benfits.textContent = language.eng.nav.nav_Benfits;
      nav_Pricing.textContent = language.eng.nav.nav_Pricing;

      // nav_Support.textContent = language.eng.nav.nav_Support;
      nav_Login.textContent = language.eng.nav.nav_Login;
      nav_SignUp.textContent = language.eng.nav.nav_SignUp;

      //header
      heder_Manage.textContent = language.eng.header.Manage;
      heder_Businesses.textContent = language.eng.header.Businesses;
      heder_infew.textContent = language.eng.header.infew;
      header_Intuitive.textContent = language.eng.header.Intuitiv;
      Creat_Account.textContent = language.eng.header.Creat_Account;

      // contnet

      // one Place
      oneplacee_header.textContent = language.eng.onePlace.oneplace_header
      oneplacee_first.textContent = language.eng.onePlace.oneplace_first;
      oneplacee_second.textContent = language.eng.onePlace.oneplace_second;
      oneplacee_third.textContent = language.eng.onePlace.oneplace_third;
      oneplacee_fourth.textContent = language.eng.onePlace.oneplace_fourth;
      learn_more2.textContent = language.onePlace.eng.learn_more2;
      document.getElementById("learn_more2").href = "features#eng";

      // one powerful
      onepowerful_header.textContent = language.eng.onepowerful.onepowerful_header;
      onepowerful_first.textContent = language.eng.onepowerful.onepowerful_first;
      onepowerful_second.textContent = language.eng.onepowerful.onepowerful_second;
      onepowerful_third.textContent = language.eng.onepowerful.onepowerful_third;
      onepowerful_fourth.textContent = language.eng.onepowerful.onepowerful_fourth;
      learn_more1.textContent = language.eng.onepowerful.learn_more1;
      document.getElementById("learn_more1").href = "features#eng";


      // one convenience
      convenience_header.textContent = language.eng.convenience.convenience_header;
      convenience_first.textContent = language.eng.convenience.convenience_first;
      convenience_second.textContent = language.eng.convenience.convenience_second;
      convenience_third.textContent = language.eng.convenience.convenience_third;
      convenience_fourth.textContent = language.eng.convenience.convenience_fourth;
      learn_more3.textContent = language.eng.convenience.learn_more3;
      document.getElementById("learn_more3").href = "features#eng";


      Copyright.textContent = language.eng.footer.Copyright;

      var priceing = document.getElementById('Pricing_container');
      var priceing_eng = document.createElement('div');
      priceing_eng.innerHTML = `
      <div class="row align-items-center p-1">
            <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0  ">
              <!-- Card -->
              <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
                <!-- Body -->
                <div class="card-body">
                  <!-- Badge -->
                  <div  style="text-align: center;" class="pt-3 mb-3 "><span
                      class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 10</span>
                  </div>
                  <h2  style="text-align: center;" class="h3 font-weight-bold"> 
                    <span id="price">Free</span>
                  </h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <!-- Features -->
                  <div class="row no-gutters">
                    <div class="col-sm fw-bold">
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>

                          <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>

                          <p id="oneplace_second" class="mb-0 ml-3  ">Up to 10 Invoices & Orders per month
                          </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>
                          <p id="oneplace_third" class="mb-0 ml-3 "> 1 User 
                          </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>
                          <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                          </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>
                          <p id="oneplace_fourth" class="mb-0 ml-3  ">  Options charged additionally
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="text-align: center;">
                    <button style="width: 180px;" type="button"
                      class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
              <!-- Card -->
              <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
                <!-- Body -->
                <div class="card-body">
                  <!-- Badge -->
                  <div style="text-align: center;" class="pt-3 mb-3 "><span
                      class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 20</span>
                  </div>
                  <h2 style="text-align: center;" class="h3 font-weight-bold">€5<span
                      class="text-small font-weight-normal text-light ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <!-- Features -->
                  <div class="row no-gutters">
                    <div class="col-sm fw-bold">
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>

                          <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>

                          <p id="oneplace_second" class="mb-0 ml-3  ">Up to 20 Invoices & Orders per month
                          </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>
                          <p id="oneplace_third" class="mb-0 ml-3 "> 1 User 
                          </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>
                          <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                          </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>
                          <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options charged additionally
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="text-align: center;">
                    <button style="width: 180px;" type="button"
                      class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
        
            <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
              <!-- Card -->
              <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
                <!-- Body -->
                <div class="card-body">
                  <!-- Badge -->
                  <div style="text-align: center;" class="pt-3 mb-3 "><span
                      class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 100</span>
                  </div>
                  <h2 style="text-align: center;" class="h3 font-weight-bold">€10<span
                      class="text-small font-weight-normal text-light ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>

                  <!-- Features -->
                  <div class="row no-gutters">
                    <div class="col-sm fw-bold">
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>

                          <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>

                          <p id="oneplace_second" class="mb-0 ml-3  ">Up to 100 Invoices & Orders per month
                          </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>
                          <p id="oneplace_third" class="mb-0 ml-3 "> 1 User 
                          </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>
                          <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                          </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center">
                          <i class="las la-check"></i>
                          <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options charged additionally
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="text-align: center;">
                    <button style="width: 180px;" type="button"
                      class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            
      </div>

      <div class="row align-items-center pt-4 p-1">
        <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0  ">
          <!-- Card -->
          <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
            <!-- Body -->
            <div class="card-body">
              <!-- Badge -->
              <div style="text-align: center;" class="pt-3 mb-3 "><span
                  class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 200</span>
              </div>
              <h2 style="text-align: center;" class="h3 font-weight-bold">€20 <span
                  class="text-small font-weight-normal text-light ml-2">/ month</span>
              </h2>
              <div class="custom-separator my-4 mx-auto bg-primary"></div>

              <!-- Features -->
              <div class="row no-gutters">
                <div class="col-sm fw-bold">
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>

                      <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>

                      <p id="oneplace_second" class="mb-0 ml-3  ">Up to 200 Invoices & Orders per month
                      </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>
                      <p id="oneplace_third" class="mb-0 ml-3 "> 2 Users 
                      </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>
                      <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                      </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>
                      <p id="oneplace_fourth" class="mb-0 ml-3  ">  Options charged additionally
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style="text-align: center;">
                <button style="width: 180px;" type="button"
                  class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
          <!-- Card -->
          <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
            <!-- Body -->
            <div class="card-body">
              <!-- Badge -->
              <div style="text-align: center;" class="pt-3 mb-3 "><span
                  class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 300</span>
              </div>
              <h2 style="text-align: center;" class="h3 font-weight-bold">€30<span
                  class="text-small font-weight-normal text-light ml-2">/ month</span></h2>
              <div class="custom-separator my-4 mx-auto bg-primary"></div>

              <!-- Features -->
              <div class="row no-gutters">
                <div class="col-sm fw-bold">
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>

                      <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>

                      <p id="oneplace_second" class="mb-0 ml-3  ">Up to 300 Invoices & Orders per month
                      </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>
                      <p id="oneplace_third" class="mb-0 ml-3 "> 2 Users 
                      </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>
                      <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                      </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>
                      <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options charged additionally
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style="text-align: center;">
                <button style="width: 180px;" type="button"
                  class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
    
        <div class="col-12 col-lg-4 col-md-6 mb-5 mb-lg-0">
          <!-- Card -->
          <div class="card card-zoom bg-white border-0 shadow_custom wow bounceInLeft " data-wow-duration="1s">
            <!-- Body -->
            <div class="card-body">
              <!-- Badge -->
              <div style="text-align: center;" class="pt-3 mb-3 "><span
                  class="h5 letter_space bg-primary rounded text-uppercase font-weight-bold text-primary">Plan 500</span>
              </div>
              <h2 style="text-align: center;" class="h3 font-weight-bold">€50<span
                  class="text-small font-weight-normal text-light ml-2">/ month</span></h2>
              <div class="custom-separator my-4 mx-auto bg-primary"></div>

              <!-- Features -->
              <div class="row no-gutters">
                <div class="col-sm fw-bold">
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>

                      <p id="oneplace_first" class="mb-0 ml-3 ">All SquirX Features </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>

                      <p id="oneplace_second" class="mb-0 ml-3  ">Up to 500 Invoices & Orders per month
                      </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>
                      <p id="oneplace_third" class="mb-0 ml-3 "> 2 Users  
                      </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>
                      <p id="oneplace_fourth" class="mb-0 ml-3  "> 1 Accountant access
                      </p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="las la-check"></i>
                      <p id="oneplace_fourth" class="mb-0 ml-3  ">    Options charged additionally
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style="text-align: center;">
                <button style="width: 180px;" type="button"
                  class="  btn button-rounder filed  btn-block btn-primaryfiled">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
</div>`;
      priceing.parentNode.replaceChild(priceing_eng, priceing);

      //footer
      footer_simple.textContent = language.eng.footer.footer_simple;
      footer_affordable.textContent = language.eng.footer.footer_affordable;
      address.textContent = language.eng.footer.address;
      Our_Address.textContent = language.eng.footer.Our_Address;
      About_footer.textContent = language.eng.footer.About_footer;
      document.getElementById("About_footer").href = "about-us#eng";

      footer_Features.textContent = language.eng.footer.footer_Features;
      document.getElementById("footer_Features").href = "features#eng";

      Copyright.textContent = language.eng.footer.Copyright;

    }
    if (window.location.href.indexOf("features") > -1) {
      //features page 
      nav_Home.textContent = language.eng.nav.nav_Home;
      document.getElementById("nav_Home").href = "Erp#eng";

      nav_Features.textContent = language.eng.nav.nav_Features;

      nav_Login.textContent = language.eng.nav.nav_Login;
      nav_SignUp.textContent = language.eng.nav.nav_SignUp;

      Features_header_page.textContent = language.eng.Features_header_page;

      Orders_features.textContent = language.eng.Orders_features;
      Automation_features.textContent = language.eng.Automation_features;
      Accounting_andFinance.textContent = language.eng.Accounting_andFinance;
      Payment.textContent = language.eng.Payment;
      Inventory.textContent = language.eng.Inventory;

      //footer 
      address.textContent = language.eng.footer.address;
      Our_Address.textContent = language.eng.footer.Our_Address;
      About_footer.textContent = language.eng.footer.About_footer;
      document.getElementById("About_footer").href = "Erp#eng";

      footer_Features.textContent = language.eng.footer.footer_Features;
      Copyright.textContent = language.eng.footer.Copyright;

      if (current_active == 'Orders_features') {


        Orders_features_header.textContent = language.eng.Orders_features_header;
        Orders_features_content1.textContent = language.eng.Orders_features_content1;
        Orders_features_content2.textContent = language.eng.Orders_features_content2;
        Orders_features_content3.textContent = language.eng.Orders_features_content3;
        Orders_features_content4.textContent = language.eng.Orders_features_content4;
        Orders_features_content5.textContent = language.eng.Orders_features_content5;

      }
    }
    if (window.location.href.indexOf("about-us") > -1) {

      nav_Home.textContent = language.eng.nav.nav_Home;
      document.getElementById("nav_Home").href = "Erp#eng";

      nav_Company.textContent = language.eng.nav.nav_Company;
      nav_Login.textContent = language.eng.nav.nav_Login;
      nav_SignUp.textContent = language.eng.nav.nav_SignUp;

      About_Us_header_page.textContent = language.eng.About_Us_header_page;
      about_1.textContent = language.eng.about_1;
      about_2.textContent = language.eng.about_2;

      //footer 
      address.textContent = language.eng.footer.address;
      Our_Address.textContent = language.eng.footer.Our_Address;
      About_footer.textContent = language.eng.footer.About_footer;
      document.getElementById("About_footer").href = "Erp#eng";

      footer_Features.textContent = language.eng.footer.footer_Features;
      Copyright.textContent = language.eng.footer.Copyright;

    }
  }

}
// $(document).ready(function () {
//   $(document).on("scroll", onScroll);

//   //smoothscroll
//   $('a[href="#"]').on('click', function (e) {
//     e.preventDefault();
//     $(document).off("scroll");

//     $('a').each(function () {
//       $(this).removeClass('active');
//     })
//     $(this).addClass('active');

//     var target = this.hash,
//       menu = target;
//     $target = $(target);
//     $('html, body').stop().animate({
//       'scrollTop': $target.offset().top + 2
//     }, 10000, 'swing', function () {
//       window.location.hash = target;
//       $(document).on("scroll", onScroll);
//     });
//   });
// });

// function onScroll(event) {
//   var scrollPos = $(document).scrollTop();
//   $('#navbarNav a').each(function () {
//     var currLink = $(this);
//     var refElement = $(currLink.attr("href"));
//     if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//       $('#navbarNav ul li a').removeClass("active");
//       currLink.addClass("active");
//     } else {
//       currLink.removeClass("active");
//     }
//   });
// }

function changeFeatures(features) {
  if (features == 'Orders_features') {

    if (current_active !== undefined) {
      document.getElementById(`${current_active}`).classList.remove('active');
    }
    current_active = 'Orders_features'

    document.getElementById('Orders_features').classList.add('active');
    var features = document.getElementById('features')
    var features_todisplay = document.createElement('div');
    features_todisplay.innerHTML = `    <div id="features">
      <h3 id="Orders_features_header" class="text-primary ">Invoices & Orders</h3>
      <div class="row no-gutters">
        <div class="col-sm fw-bold">
          <div class="mb-3">
            <div class="d-flex align-items-center h6 text-cutome">
              <div><i class="las la-angle-right"></i>
              </div>
              <p id="Orders_features_content1" class="mb-0 ml-3 ">Create invoices and orders in few seconds
              </p>
            </div>
          </div>
          <div class="mb-3">
            <div class="d-flex align-items-center h6 text-cutome">
              <div><i class="las la-angle-right"></i>
              </div>
              <!-- Serious -->
              <p id="Orders_features_content2" class="mb-0 ml-3">Transform quotes into invoices in one click
                <!-- (OCR) -->
              </p>
            </div>
          </div>
          <div class="mb-3">
            <div class="d-flex align-items-center h6 text-cutome">
              <div><i class="las la-angle-right"></i>
              </div>
              <!-- compliance &  -->
              <p  id="Orders_features_content3" class="mb-0 ml-3">Send invoices and orders through email, Watsapp and SMS
              </p>
            </div>
          </div>
          <div class="mb-3">
            <div class="d-flex align-items-center h6 text-cutome">
              <div><i class="las la-angle-right"></i>
              </div>
              <p id="Orders_features_content4" class="mb-0 ml-3">Mail quotes, invoices and orders through our mail
                services (option)</p>
            </div>

          </div>
          <div class="mb-3">
            <div class="d-flex align-items-center h6 text-cutome">
              <div><i class="las la-angle-right"></i>
              </div>
              <p id="Orders_features_content5" class="mb-0 ml-3">Manage and treat special services (Uber delivery,
                Deliveroo...)</p>
            </div>

          </div>
        </div>
      </div>
    </div>`
    features.parentNode.replaceChild(features_todisplay, features);

    if (window.location.hash == "#eng") {


      Orders_features_header.textContent = language.eng.Orders_features_header;
      Orders_features_content1.textContent = language.eng.Orders_features_content1;
      Orders_features_content2.textContent = language.eng.Orders_features_content2;
      Orders_features_content3.textContent = language.eng.Orders_features_content3;
      Orders_features_content4.textContent = language.eng.Orders_features_content4;
      Orders_features_content5.textContent = language.eng.Orders_features_content5;

    } else if (window.location.hash == "#Fr") {
      Orders_features_header.textContent = language.Fr.Orders_features_header;
      Orders_features_content1.textContent = language.Fr.Orders_features_content1;
      Orders_features_content2.textContent = language.Fr.Orders_features_content2;
      Orders_features_content3.textContent = language.Fr.Orders_features_content3;
      Orders_features_content4.textContent = language.Fr.Orders_features_content4;
      Orders_features_content5.textContent = language.Fr.Orders_features_content5;
    }

    ;

  } else if (features == 'Automation_features') {
    if (current_active !== undefined) {
      document.getElementById(`${current_active}`).classList.remove('active');
    }
    current_active = 'Automation_features'
    document.getElementById('Automation_features').classList.add('active');
    var features = document.getElementById('features');
    var features_todisplay = document.createElement('div');
    features_todisplay.innerHTML = `   <div id="features">
   <h3 id="Automation_features_header" class="text-primary ">Access and Automation</h3>
   <div class="row no-gutters">
       <div class="col-sm fw-bold">
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Automation_features_content1" class="mb-0 ml-3 ">Automatic registration of new customers with VAT number 
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- Serious -->
             <p id="Automation_features_content2" class="mb-0 ml-3">Automatic extraction of receipts and invoices from images and pdf (OCR/NLP)
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- compliance &  -->
             <p id="Automation_features_content3" class="mb-0 ml-3">Automatic extraction of invoices and receipts received by email
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Automation_features_content4" class="mb-0 ml-3">Data extraction and automatic tabulation and allocation</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Automation_features_content6" class="mb-0 ml-3">Alerts for compliance issues (bank accounts, missing invoices, receipts...etc)</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Automation_features_content7" class="mb-0 ml-3">Access your account & run your business from anywhere</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Automation_features_content8" class="mb-0 ml-3">Grant access to your selected users (Change access rights at any time)</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Automation_features_content9" class="mb-0 ml-3">Free iOS and Android Apps</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Automation_features_content10" class="mb-0 ml-3">Bank-standards security encryption & storage of your data and documents</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Automation_features_content11" class="mb-0 ml-3">Data updated and secure accross all devices</p>
           </div>
           
         </div>
       </div>
     </div>
</div>`;
    features.parentNode.replaceChild(features_todisplay, features);
    if (window.location.hash == "#eng") {

      Automation_features_header.textContent = language.eng.Automation_features_header;
      Automation_features_content1.textContent = language.eng.Automation_features_content1;
      Automation_features_content2.textContent = language.eng.Automation_features_content2;
      Automation_features_content3.textContent = language.eng.Automation_features_content3;
      Automation_features_content4.textContent = language.eng.Automation_features_content4;
      Automation_features_content6.textContent = language.eng.Automation_features_content6;
      Automation_features_content6.textContent = language.eng.Automation_features_content7;
      Automation_features_content8.textContent = language.eng.Automation_features_content8;
      Automation_features_content9.textContent = language.eng.Automation_features_content9;
      Automation_features_content10.textContent = language.eng.Automation_features_content10;
      Automation_features_content11.textContent = language.eng.Automation_features_content11;

    } else if (window.location.hash == "#Fr") {
      Automation_features_header.textContent = language.Fr.Automation_features_header;
      Automation_features_content1.textContent = language.Fr.Automation_features_content1;
      Automation_features_content2.textContent = language.Fr.Automation_features_content2;
      Automation_features_content3.textContent = language.Fr.Automation_features_content3;
      Automation_features_content4.textContent = language.Fr.Automation_features_content4;
      Automation_features_content6.textContent = language.Fr.Automation_features_content6;
      Automation_features_content6.textContent = language.Fr.Automation_features_content7;
      Automation_features_content8.textContent = language.Fr.Automation_features_content8;
      Automation_features_content9.textContent = language.Fr.Automation_features_content9;
      Automation_features_content10.textContent = language.Fr.Automation_features_content10;
      Automation_features_content11.textContent = language.Fr.Automation_features_content11;
    }
  } else if (features == 'Accounting_andFinance') {
    if (current_active !== undefined) {
      document.getElementById(`${current_active}`).classList.remove('active');
    }
    current_active = 'Accounting_andFinance'
    document.getElementById('Accounting_andFinance').classList.add('active');
    var features = document.getElementById('features');
    var features_todisplay = document.createElement('div');
    features_todisplay.innerHTML = `<div id="features">
   <h3 id="Accounting_andFinance_header" class="text-primary ">Accounting and Finance</h3>
   <div class="row no-gutters">
       <div class="col-sm fw-bold">
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Accounting_andFinance_content1" class="mb-0 ml-3 ">Managment of sales, expenses and compliance reports (VAT return...) 
             </p>
           </div>
         </div>
         <div class="mb-3">
         <div class="d-flex align-items-center h6 text-cutome">
           <div><i class="las la-angle-right"></i>
           </div>
           <!-- Serious -->
           <p id="Accounting_andFinance_content2" class="mb-0 ml-3">Cash and expenseses management with automatic categorization
           </p>
         </div>
       </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- Serious -->
             <p id="Accounting_andFinance_content3" class="mb-0 ml-3">Real-time & forecast cash position taking into account data from
               bank account, sales, expenses...
             </p>
           </div>
         </div>

         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- compliance &  -->
             <p id="Accounting_andFinance_content4" class="mb-0 ml-3">Tailor-made access for your accountant  and full compatibility with his applications
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Accounting_andFinance_content5" class="mb-0 ml-3">Real-time collaboration with accountant and full accessibility to cloud data according to permissions</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Accounting_andFinance_content6" class="mb-0 ml-3">Export compatible journals of sales, expenses , bank reports & VAT to your accountants</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Accounting_andFinance_content7" class="mb-0 ml-3">Profit & Loss reporting</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Accounting_andFinance_content8" class="mb-0 ml-3">Analyse the health of your bsuiness with SquirX built-in reports</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Accounting_andFinance_content9" class="mb-0 ml-3">Make growth and investment decisions with real-time data and meaningful analysis</p>
           </div>
           
         </div>
    
       </div>
     </div>
</div>`;
    features.parentNode.replaceChild(features_todisplay, features);
    if (window.location.hash == "#eng") {

      Accounting_andFinance_header.textContent = language.eng.Accounting_andFinance_header;
      Accounting_andFinance_content1.textContent = language.eng.Accounting_andFinance_content1;
      Accounting_andFinance_content2.textContent = language.eng.Accounting_andFinance_content2;
      Accounting_andFinance_content3.textContent = language.eng.Accounting_andFinance_content3;
      Accounting_andFinance_content4.textContent = language.eng.Accounting_andFinance_content4;
      Accounting_andFinance_content5.textContent = language.eng.Accounting_andFinance_content5;
      Accounting_andFinance_content6.textContent = language.eng.Accounting_andFinance_content6;
      Accounting_andFinance_content7.textContent = language.eng.Accounting_andFinance_content7;
      Accounting_andFinance_content8.textContent = language.eng.Accounting_andFinance_content8;
      Accounting_andFinance_content9.textContent = language.eng.Accounting_andFinance_content9;


    } else if (window.location.hash == "#Fr") {

      Accounting_andFinance_header.textContent = language.Fr.Accounting_andFinance_header;
      Accounting_andFinance_content1.textContent = language.Fr.Accounting_andFinance_content1;
      Accounting_andFinance_content2.textContent = language.Fr.Accounting_andFinance_content2;
      Accounting_andFinance_content3.textContent = language.Fr.Accounting_andFinance_content3;
      Accounting_andFinance_content4.textContent = language.Fr.Accounting_andFinance_content4;
      Accounting_andFinance_content5.textContent = language.Fr.Accounting_andFinance_content5;
      Accounting_andFinance_content6.textContent = language.Fr.Accounting_andFinance_content6;
      Accounting_andFinance_content7.textContent = language.Fr.Accounting_andFinance_content7;
      Accounting_andFinance_content8.textContent = language.Fr.Accounting_andFinance_content8;
      Accounting_andFinance_content9.textContent = language.Fr.Accounting_andFinance_content9;


    }
  } else if (features == 'Payment') {
    if (current_active !== undefined) {
      document.getElementById(`${current_active}`).classList.remove('active');
    }
    current_active = 'Payment'
    document.getElementById('Payment').classList.add('active');
    var features = document.getElementById('features');
    var features_todisplay = document.createElement('div');
    features_todisplay.innerHTML = `<div id="features">
   <h3 id="Payment_header" class="text-primary ">Payment</h3>
   <div class="row no-gutters">
       <div class="col-sm fw-bold">
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Payment_content1" class="mb-0 ml-3 ">Automatic payment tracking 
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- Serious -->
             <p id="Payment_content2" class="mb-0 ml-3">Structured communication for payment
               <!-- (OCR) -->
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- compliance &  -->
             <p id="Payment_content3" class="mb-0 ml-3">Automatic reconciliation of  accounts payables and receivables against bank statement 
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Payment_content4" class="mb-0 ml-3">PSP services ( to come)</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Payment_content5" class="mb-0 ml-3">Online payments facilities of invoices and orders</p>
           </div>
           
         </div>
       </div>
     </div>
</div>`;
    features.parentNode.replaceChild(features_todisplay, features);
    if (window.location.hash == "#eng") {

      Payment_header.textContent = language.eng.Payment_header;
      Payment_content1.textContent = language.eng.Payment_content1;
      Payment_content2.textContent = language.eng.Payment_content2;
      Payment_content3.textContent = language.eng.Payment_content3;
      Payment_content4.textContent = language.eng.Payment_content4;
      Payment_content5.textContent = language.eng.Payment_content5;



    } else if (window.location.hash == "#Fr") {

      Payment_header.textContent = language.Fr.Payment_header;
      Payment_content1.textContent = language.Fr.Payment_content1;
      Payment_content2.textContent = language.Fr.Payment_content2;
      Payment_content3.textContent = language.Fr.Payment_content3;
      Payment_content4.textContent = language.Fr.Payment_content4;
      Payment_content5.textContent = language.Fr.Payment_content5;





    }
  } else if (features == 'CRM') {
    if (current_active !== undefined) {
      document.getElementById(`${current_active}`).classList.remove('active');
    }
    current_active = 'CRM'
    document.getElementById('CRM').classList.add('active');
    var features = document.getElementById('features');
    var features_todisplay = document.createElement('div');
    features_todisplay.innerHTML = `<div id="features">
   <h3 id="CRM_header" class="text-primary ">CRM</h3>
   <div class="row no-gutters">
       <div class="col-sm fw-bold">
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="CRM_content1" class="mb-0 ml-3 ">360°view of your business by customer, products...
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- Serious -->
             <p id="CRM_content2" class="mb-0 ml-3">Automatic tracking and reminders of tasks ( Offers, opportunities, overdue...)
               <!-- (OCR) -->
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- compliance &  -->
             <p id="CRM_content3" class="mb-0 ml-3">Automatic customers reports & analysis (sales, credit rating...) 
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="CRM_content4" class="mb-0 ml-3">Tasks related and opportunities</p>
           </div>
           
         </div>
      
       </div>
     </div>
</div>`;
    features.parentNode.replaceChild(features_todisplay, features);
    if (window.location.hash == "#eng") {

      CRM_header.textContent = language.eng.CRM_header;
      CRM_content1.textContent = language.eng.CRM_content1;
      CRM_content2.textContent = language.eng.CRM_content2;
      CRM_content3.textContent = language.eng.CRM_content3;
      CRM_content4.textContent = language.eng.CRM_content4;



    } else if (window.location.hash == "#Fr") {

      CRM_header.textContent = language.Fr.CRM_header;
      CRM_content1.textContent = language.Fr.CRM_content1;
      CRM_content2.textContent = language.Fr.CRM_content2;
      CRM_content3.textContent = language.Fr.CRM_content3;
      CRM_content4.textContent = language.Fr.CRM_content4;





    }
  } else if (features == 'Inventory') {
    if (current_active !== undefined) {
      document.getElementById(`${current_active}`).classList.remove('active');
    }
    current_active = 'Inventory'
    document.getElementById('Inventory').classList.add('active');
    var features = document.getElementById('features');
    var features_todisplay = document.createElement('div');
    features_todisplay.innerHTML = `<div id="features">
   <h3 id="Inventory_header" class="text-primary ">Inventory</h3>
   <div class="row no-gutters">
       <div class="col-sm fw-bold">
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Inventory_content1" class="mb-0 ml-3 ">Organize your vendors data in one unique database
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- Serious -->
             <p id="Inventory_content2" class="mb-0 ml-3">Real-time view of your stock in hand 
               <!-- (OCR) -->
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- compliance &  -->
             <p id="Inventory_content3" class="mb-0 ml-3">Auto-update your inventory according to sales and orders
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Inventory_content4" class="mb-0 ml-3">keep tack of ordered material and easy replenishment</p>
           </div>
           
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="Inventory_content5" class="mb-0 ml-3">Tailor-made alerts on low stock </p>
           </div>
           
         </div>
       </div>
     </div>
</div>  `;
    features.parentNode.replaceChild(features_todisplay, features);

    if (window.location.hash == "#eng") {

      Inventory_header.textContent = language.eng.Inventory_header;
      Inventory_content1.textContent = language.eng.Inventory_content1;
      Inventory_content2.textContent = language.eng.Inventory_content2;
      Inventory_content3.textContent = language.eng.Inventory_content3;
      Inventory_content4.textContent = language.eng.Inventory_content4;
      Inventory_content5.textContent = language.eng.Inventory_content5;



    } else if (window.location.hash == "#Fr") {

      Inventory_header.textContent = language.Fr.Inventory_header;
      Inventory_content1.textContent = language.Fr.Inventory_content1;
      Inventory_content2.textContent = language.Fr.Inventory_content2;
      Inventory_content3.textContent = language.Fr.Inventory_content3;
      Inventory_content4.textContent = language.Fr.Inventory_content4;
      Inventory_content5.textContent = language.Fr.Payment_content5;





    }
  } else if (features == 'ERP') {
    if (current_active !== undefined) {
      document.getElementById(`${current_active}`).classList.remove('active');
    }
    current_active = 'ERP'
    document.getElementById('ERP').classList.add('active');
    var features = document.getElementById('features');
    var features_todisplay = document.createElement('div');
    features_todisplay.innerHTML = `   <div id="features">
   <h3 id="ERP_header" class="text-primary ">ERP</h3>
   <div class="row no-gutters">
       <div class="col-sm fw-bold">
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <p id="ERP_content1" class="mb-0 ml-3 ">Time sheets
             </p>
           </div>
         </div>
         <div class="mb-3">
           <div class="d-flex align-items-center h6 text-cutome">
             <div><i class="las la-angle-right"></i>
             </div>
             <!-- Serious -->
             <p id="ERP_content2" class="mb-0 ml-3">Schedules
               <!-- (OCR) -->
             </p>
           </div>
         </div>
 
       </div>
     </div>
</div>`;
    features.parentNode.replaceChild(features_todisplay, features);
    if (window.location.hash == "#eng") {

      ERP_header.textContent = language.eng.ERP_header;
      ERP_content1.textContent = language.eng.ERP_content1;
      ERP_content2.textContent = language.eng.ERP_content2;



    } else if (window.location.hash == "#Fr") {

      ERP_header.textContent = language.Fr.ERP_header;
      ERP_content1.textContent = language.Fr.ERP_content1;
      ERP_content2.textContent = language.Fr.Inventory_content2;
      In




    }
  }
}


var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
  , "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
  , "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica"
  , "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
  , "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
  , "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
  , "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
  , "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
  , "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
  , "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
  , "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
  , "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
  , "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia"
  , "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)"
  , "Yemen", "Zambia", "Zimbabwe"]
function country() {
  var x = "<option value='' disabled selected >Select Country</option>";

  for (var i = 0; i < country_list.length; i++) {
    x += "<option value='" + country_list[i] + "'> " + country_list[i] + " </option>"
  }

  let list = document.getElementsByClassName("country");
  for (let item of list) {
    item.innerHTML = x;
  }

}

country();
// message
let requiredF = document.getElementById('requiredF');
let successF = document.getElementById('successF');

requiredF.style.display = 'none'
successF.style.display = 'none'

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function SendMess() {

  var all = document.querySelectorAll("#contactForm input, #contactForm textarea, #contactForm select");
  let message = document.getElementById('message');
  let name = document.getElementById('name');
  let last = document.getElementById('Last');
  let email = document.getElementById('email');


  if (!message.value || !name.value || !validateEmail(email.value) || !last.value) {
    return requiredF.style.display = 'block'
  } else {
    requiredF.style.display = 'none'
  }
  document.getElementById('SubMess').setAttribute('disabled', 'disabled')
  let body = {}

  for (let field of all) {
    console.log(field.name + ':' + field.value);
    if (field.name == 'name') {
      body.first_name = field.value
    }
    if (field.name == 'Last') {
      body.last_name = field.value
    }
    if (field.name == 'email') {
      body.email = field.value
    }
    if (field.name == 'message') {
      body.message = field.value

    }
 
    if (field.name == 'country') {
      body.country = field.value 
    }
if (field.name == 'receiveCommunications' && field.value=='on') {
  body.receive_communications = true
}
if (field.name == 'Companyname' ) {
  body.companyName = field.value 

}


  }
  body.allow_store_data = true
  body.receive_communications = true
 

  fetch('https://site.squirx.com/api/contact-us', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      successF.style.display = 'block'
      document.getElementById("contactForm").reset()
      document.getElementById('SubMess').removeAttribute('disabled');

    })

}