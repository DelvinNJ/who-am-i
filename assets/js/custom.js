// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });

    // Counter
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // navbar toggle
    $('#nav-toggle').click(function () {
        $(this).toggleClass('is-active')
        $('ul.nav').toggleClass('show');
    });

    const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, strong, em, li, b");
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        }, { threshold: 0.1 });
        
        textElements.forEach(el => observer.observe(el));
});
