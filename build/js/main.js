$('#sandwichmenu').on('click', function(e) {
    e.preventDefault();
    $('#sandwichmenu').toggleClass("active");
$('.js_menu').toggleClass("active");
});
window.onscroll = function show__header (){
    const header = document.querySelector(".top-panel");
    if(window.pageYOffset > 200) {
        header.classList.add('headerfixed')
    } else if(window.pageYOffset < 200) {
        header.classList.remove('headerfixed');
    }
}