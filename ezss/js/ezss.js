window.onload = function(){
    // Alert Notification Close Animation
    var exit = document.getElementsByClassName("alert-exit");
    
    for (let i = 0; i < exit.length; i++) {
        exit[i].onclick = function(){
            let div = this.parentElement;
            div.style.opacity = "0";
            setTimeout(function(){ div.style.display = "none"; }, 600);
        }
    }

    //Navigation Dropdown Drop and Animation
    var drop = document.getElementsByClassName("nav-drop");

    for (let j = 0; j < drop.length; j++) {
        drop[j].addEventListener("click", function() {
            let current = this.children[1];
            if (current.style.maxHeight){
                current.style.maxHeight = null;
            } else {
                for(let k = 0; k < drop.length; k++){
                    if(j != k){
                        drop[k].children[1].style.maxHeight = null;
                    }
                    else {
                        current.style.maxHeight = current.scrollHeight + "px";
                        current.style.minWidth = this.children[0].offsetWidth;
                    }
                }
            } 
        });
    }
}