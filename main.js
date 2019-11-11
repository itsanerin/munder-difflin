scrollButton = document.getElementById('scroll-button')

window.onscroll = function () {
    scrollFunction()
}

scrollFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block"
        scrollButton.style.opacity = "100%"
    } else {
        scrollButton.classList.toggle('fade')
        scrollButton.style.opacity = "0%"
    }
}

topFunction = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}