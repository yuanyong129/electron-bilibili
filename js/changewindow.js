var resizeTimer = null;
var width2 = [];

window.onresize = function () {
    var gridLeft = document.querySelector(".grid-left");
    var gridRight = document.querySelector(".grid-right");
    // console.log(gridLeft);        
    if (resizeTimer) {
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function () {

        width2[1] = document.documentElement.clientWidth;

         if( width2[0] !=width2[1] ){
             width2[0] = width2[1];
             globalWidth =width2[1];
             if (width2[1] <= 900) {
                // console.log(gridLeft);
                 leftOpen = false;
                 gridLeft.style.width = "50px";
                 gridRight.style.left = "50px";
                 gridRight.style.width = (width2[1]-50)+"px";
                 controlLeft();
             } else {
                 gridLeft.style.width = "250px";
                 gridRight.style.left = "250px";
                 gridRight.style.width = (width2[1]-250)+"px";
                 removeControlLeft();
                // resetSearch();
             }
         }

      //var width = document.documentElement.clientWidth;
      
        // console.log("窗口改变")
    }, 10)

}

