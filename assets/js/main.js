document.addEventListener('DOMContentLoaded', function () {

    /**fix gitpod/githop image path */
    let path = " "

    if (window.location.hostname === "kristianandersen.github.io") {
        path = "/ShrimpRoyal"
    } else {
        path = ".."
    }

    /*is webP supportet or not*/
    let imageType = ""
    var webp = new Image();
    webp.onerror = function () {
        imageType = "png"
    };
    webp.onload = function () {
        imageType = "webp"

    };
    webp.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';



    let bgshrimp = document.querySelectorAll(".genus");
    for (let i = 0; i < bgshrimp.length; i++) {

        bgshrimp[i].addEventListener("mouseenter", toggleTools);
    }

    function toggleTools(evt) {
        let infoshrimp = document.querySelector(".infoshrimp");


        const shrimptype = evt.target.getAttribute("title");

        switch (shrimptype) {
            case "bj":
                infoshrimp.style.backgroundImage = 'url(' + path + '/assets/images/bluejelly.' + imageType + ')';
                break;
            case "gj":
                infoshrimp.style.backgroundImage = 'url(' + path + '/assets/images/greenjade.' + imageType + ')';
                break;
            case "sk":
                infoshrimp.style.backgroundImage = 'url(' + path + '/assets/images/sunkist.' + imageType + ')';
                break
            case "rl":
                infoshrimp.style.backgroundImage = 'url(' + path + '/assets/images/Rili.' + imageType + ')';
                break
            case "cs":
                infoshrimp.style.backgroundImage = 'url(' + path + '/assets/images/cherry.' + imageType + ')';
                break
        }

    }
    /**
     * toggle menu show/hide when clicking menu links 
     * */
    const nava = document.querySelectorAll(".navbar-collapse a");

    for (let i = 0; i < nava.length; i++) {
        nava[i].addEventListener("click", togglemenu);
    }
    function togglemenu() {
        document.querySelector(".navbar-collapse").classList.toggle("show");

    }

    /**auto play pause video if it is viseble  */
    window.addEventListener('scroll', function () {
        const vid = document.querySelector('#svid');


        // checking whether fully visible
        if (isInViewport(vid)) {
            vid.play();


        } else {
            vid.pause();

        }
    });

    /**check if vide is in viewport or not */
    function isInViewport(elm) {
        const bounding = elm.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };


});