/*global $*/
$(function () {
    // ### start padding 
function makePaddingLeft() {
    var navParent = $('header .menu .nav-bar'),
    listMenu = $('header .menu .nav-bar ul li');
    var wnav = Number(navParent.css('width').slice(0, navParent.css('width').length -2)),
    wlist = 0;
    for(i=0; i < listMenu.length; i++) {
        wlist += Number(listMenu.eq(i).css('width').slice(0, listMenu.eq(i).css('width').length -2));
    }
    navParent.css('padding-left', wnav - wlist+ 'px');
};
function makePaddingRight() {
    var navParent = $('header .menu .nav-bar'),
    listMenu = $('header .menu .nav-bar ul li');
    var wnav = Number(navParent.css('width').slice(0, navParent.css('width').length -2)),
    wlist = 0;
    for(i=0; i < listMenu.length; i++) {
        wlist += Number(listMenu.eq(i).css('width').slice(0, listMenu.eq(i).css('width').length -2));
    }
    navParent.css('padding-right', wnav - wlist+ 'px');
};

if (($('html').attr('dir') !== 'rtl') && ($(window).width() > 640)) {
    makePaddingLeft();
} else if(($('html').attr('dir') == 'rtl') && ($(window).width() > 640)){
    makePaddingRight();
}
// start show and hide nav bar in phone 
function slideNav(elt, elt2) {
    if (elt.hasClass('show')) {
        elt.animate({
            width:'100%'

        }, 500).toggleClass('show');
        elt2.removeClass('fa-bars').addClass("fa-times");
    } else {
        elt.animate({
            width:'0%'

        }, 500).toggleClass('show');
        elt2.removeClass('fa-times').addClass("fa-bars");
    }   
}
$('header .menu .navicon').on('click', function () {
    slideNav($('header .menu .nav-bar'), $(this).find('i'));
})


})