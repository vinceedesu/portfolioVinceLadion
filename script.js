// Variable for toggle button in html
const toggleButton = document.getElementsByClassName('togglebtn')[0]

// variable for nav-links
const navBarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click',() => {
    navBarLinks.classList.toggle('active')
})

// $(document).ready(function(){
//     $(window).scroll(function(){
//     $('.Box').css("opacity", 1- $(window).scrollTop() / 700)
//     })
// })