document.addEventListener('DOMContentLoaded', function () {

    /**fix gitpod/githop image path */
    let path = " "

    if (window.location.hostname === "kristianandersen.github.io") {
        path = "/ShrimpRoyal"
    } else {
        path = ".."
    }

    /**
     * Check if browser supports webP images ells fallback to png
     */
    let imageType = ""
    var webp = new Image();
    webp.onerror = function () {
        imageType = "png"
    };
    webp.onload = function () {
        imageType = "webp"

    };

    webp.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';


    let bgShrimp = document.querySelectorAll(".genus");
    for (let i = 0; i < bgShrimp.length; i++) {

        bgShrimp[i].addEventListener("mouseenter", toggleTools);
    }
    /**
     * Change the background image on mouse over
     */
    function toggleTools(evt) {

        const infoShrimp = document.querySelector(".infoshrimp");
        const shrimptype = evt.target.getAttribute("title");

        switch (shrimptype) {
            case "bj":
                infoShrimp.style.backgroundImage = 'url(' + path + '/assets/images/bluejelly.' + imageType + ')';
                break;
            case "gj":
                infoShrimp.style.backgroundImage = 'url(' + path + '/assets/images/greenjade.' + imageType + ')';
                break;
            case "sk":
                infoShrimp.style.backgroundImage = 'url(' + path + '/assets/images/sunkist.' + imageType + ')';
                break
            case "rl":
                infoShrimp.style.backgroundImage = 'url(' + path + '/assets/images/Rili.' + imageType + ')';
                break
            case "cs":
                infoShrimp.style.backgroundImage = 'url(' + path + '/assets/images/cherry.' + imageType + ')';
                break
        }
    }

    /**
     * toggle bootstrap menu in mobile mode 
     * show/hide when clicking menu links 
     * */
    const navigationA = document.querySelectorAll(".navbar-collapse a");

    for (let i = 0; i < navigationA.length; i++) {
        navigationA[i].addEventListener("click", togglemenu);
    }
    function togglemenu() {
        document.querySelector(".navbar-collapse").classList.toggle("show");

    }

    /**auto play pause shrimpVideClipeo if it is viseble  */
    window.addEventListener('scroll', function () {
        const shrimpVideClip = document.querySelector('#sshrimpVideClip');
        // checking whether fully visible
        if (isInViewport(shrimpVideClip)) {
            shrimpVideClip.play();
        } else {
            shrimpVideClip.pause();

        }
    });

    /**
     * check if shrimpVideClipeo is in viewport 
     * Start shrimpVideClipeo if it is visible in viewport
     * Stop it if it is outside viewport
     * */
    function isInViewport(elm) {
        const viewPortBounding = elm.getviewPortBoundingClientRect();
        return (
            viewPortBounding.top >= 0 &&
            viewPortBounding.left >= 0 &&
            viewPortBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            viewPortBounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };


});