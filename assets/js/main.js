    window.addEventListener("load", function (event) {
       
var vid = document.getElementById("svid");
vid.playbackRate = 1;
 vid.autoplay = true;

        /**fix gitpod/githop image path */
        let path=" "
       
       if(window.location.hostname==="kristianandersen.github.io"){
            path="/ShrimpRoyal"
       }else{
           path=".."
       }
        console.log()


    let bgshrimp = document.querySelectorAll(".genus");
    for (let i=0; i<bgshrimp.length; i++){
	    bgshrimp[i].addEventListener("mouseenter", toggleTools);
    }

	function toggleTools(evt){
    let infoshrimp = document.querySelector(".infoshrimp");
            
    
    let shrimptype = evt.target.getAttribute("title");
console.log(shrimptype)
    switch (shrimptype) {
                    case "bj":
                   infoshrimp.style.backgroundImage = 'url('+path+'/assets/images/bluejelly.png)';
                    break;
                    case "gj":
                    infoshrimp.style.backgroundImage = 'url('+path+'/assets/images/greenjade.png)';
                    break;
                      case "sk":
                    infoshrimp.style.backgroundImage = 'url('+path+'/assets/images/sunkist.png)';
                    break
                      case "rl":
                    infoshrimp.style.backgroundImage = 'url('+path+'/assets/images/Rili.png)';
                    break
                    case "cs":
                    infoshrimp.style.backgroundImage = 'url('+path+'/assets/images/cherry.png)';
                    break
                }

    }
    /**toggle menu show/hide when clicking menu links */
    let nava = document.querySelectorAll(".navbar-collapse a");

    for (let i=0; i<nava.length; i++){
	    nava[i].addEventListener("click", togglemenu);
    }
    function togglemenu(){
        document.querySelector(".navbar-collapse").classList.toggle("show");
 
    }


});