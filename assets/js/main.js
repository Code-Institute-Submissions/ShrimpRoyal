    window.addEventListener("load", function (event) {
       
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
});