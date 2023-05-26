window.addEventListener("scroll", function()
{
    var reveal = document.querySelector(".mid-img h1")
    var windowheight = window.innerHeight;
    var revealtop = reveal.getBoundingClientRect().top;
    var revealpoint = 50;
    if(revealtop < windowheight - revealpoint)
    {
        reveal.classList.add("reveal");
    }
})