scrollButton = document.getElementById('scroll-button')

window.onscroll = function() {
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


var item = document.getElementsByClassName('item')

for (let i = 0; i < item.length; i++) {
item[i].addEventListener("mouseover", () => {
  item[i].style.transform = "scale(1.05)"
})

item[i].addEventListener("mouseleave", () => {
  item[i].style.transform = "scale(1)"
  behavior: 'smooth'
})
}
