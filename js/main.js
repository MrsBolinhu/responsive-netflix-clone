/* Navbar Scroll Effect */

window.onscroll = function() {scrollFunction()};
                 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#141414";
    
  } else {
    document.getElementById("navbar").style.background = getComputedStyle(document.documentElement)
    .getPropertyValue('--blackfade');
    
  }
}

