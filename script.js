function setNavbar() {
    if ($(document).scrollTop() > 160) {
        $('.sidebar').addClass('sticky');
    } else {
        $('.sidebar').removeClass('sticky');
    }
}

$(document).ready(function () {

    // Single page nav
    $('.main-nav').singlePageNav({
        'currentClass': "active",
        offset: 20
    });

    // Detect window scroll and change navbar
    setNavbar();

    $(window).scroll(function () {
        setNavbar();
    });

    // Magnific pop up
    $('.gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: { enabled: true }
        // other options
    });

    // Google Map
    loadGoogleMap();
});