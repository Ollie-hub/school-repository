let header = document.getElementById('mainheader');

window.onscroll = function() {
    console.log(window.pageYOffset);
    if(window.pageYOffset > 20) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky')
    }
};