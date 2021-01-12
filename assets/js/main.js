document.addEventListener('DOMContentLoaded', function() {

 /**fix gitpod/githop image path */
    let path = " "

    if (window.location.hostname === "kristianandersen.github.io") {
        path = "/ShrimpRoyal"
    } else {
        path = ".."
    }
    console.log()


    let bgshrimp = document.querySelectorAll(".genus");
    for (let i = 0; i < bgshrimp.length; i++) {
        bgshrimp[i].addEventListener("mouseenter", toggleTools);
    }

    function toggleTools(evt) {
        let infoshrimp = document.querySelector(".infoshrimp");


        let shrimptype = evt.target.getAttribute("title");
        console.log(shrimptype)
        switch (shrimptype) {
            case "bj":
                infoshrimp.style.backgroundImage = 'url(' + path + '/assets/images/bluejelly.png)';
                break;
            case "gj":
                infoshrimp.style.backgroundImage = 'url(' + path + '/assets/images/greenjade.png)';
                break;
            case "sk":
                infoshrimp.style.backgroundImage = 'url(' + path + '/assets/images/sunkist.png)';
                break
            case "rl":
                infoshrimp.style.backgroundImage = 'url(' + path + '/assets/images/Rili.png)';
                break
            case "cs":
                infoshrimp.style.backgroundImage = 'url(' + path + '/assets/images/cherry.png)';
                break
        }

    }
    /**toggle menu show/hide when clicking menu links */
    let nava = document.querySelectorAll(".navbar-collapse a");

    for (let i = 0; i < nava.length; i++) {
        nava[i].addEventListener("click", togglemenu);
    }
    function togglemenu() {
        document.querySelector(".navbar-collapse").classList.toggle("show");

    }

    /**play pause video if it is viseble  */
     window.addEventListener('scroll', function () {
        let vid = document.querySelector('#svid');
        

        // checking whether fully visible
        if (isInViewport(vid)) {
            vid.play();
            //console.log('Play')


        } else {
            vid.pause();
           // console.log("pause")
        }
    });

/**check if vide is in viewport or not */
    function isInViewport(elm) {
        var bounding = elm.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };


});