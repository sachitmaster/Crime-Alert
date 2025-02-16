const t1 = gsap.timeline()

t1
    .from(".title .para1", {
        opacity: 0,
        delay: "-0.5",
        duration: 1,
        onStart: function () {
            $('.title .para1').textillate({
                in: { effect: 'fadeInUpBig' },
            });
        },
    })
    .from(".nav .txt", {
        opacity: 0,
        y: -100,
        duration: 1,
        stagger: 0.2,
    })

window.addEventListener('scroll', reveal)
function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i<reveals.length; i++){
        var windowheight =  window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}