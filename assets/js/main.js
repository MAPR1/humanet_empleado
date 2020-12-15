var nav_link     = document.querySelectorAll("li.has-sub .nav-link")


for (var i= 0; i < nav_link.length; i++) {
 
nav_link.onmouseover = function(){

    nav_link.classList.add('focus');
}

nav_link.onmouseout = function(){

    nav_link.classList.remove('focus');
}
}



