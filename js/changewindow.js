var resizeTimer = null;

window.onresize = function () {
    var gridLeft = document.querySelector(".grid-left");
    var gridRight = document.querySelector(".grid-right");
    // console.log(gridLeft);        
    if (resizeTimer) {
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function () {

        var width = document.documentElement.clientWidth;
        if (width <= 900) {
           // console.log(gridLeft);
            leftOpen = false;
            gridLeft.style.width = "50px";
            gridRight.style.left = "50px";
            gridRight.style.width = (width-50)+"px";
            controlLeft();
        } else {
            gridLeft.style.width = "250px";
            gridRight.style.left = "250px";
            gridRight.style.width = (width-250)+"px";
            removeControlLeft();
           // resetSearch();
        }
        // console.log("窗口改变")
    }, 10)


}

