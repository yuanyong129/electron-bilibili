

var resizeTimer = null;
var width = [];

window.onresize = function () {
    
    if (resizeTimer) {
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function () {
         width[1] = document.documentElement.clientWidth;

         if( width[0] !=width[1] ){
             width[0] = width[1];
             changeVideoCoverSize();
         }
    },200)

}


function changeVideoCoverSize(){
        
    var videoArea = document.querySelectorAll(".video-area");
    console.log(videoArea)
    var width = parseInt(getStyle(videoArea[0],"width"));
    console.log( width);
    videoArea.forEach(element => {
        element.style.height = width*0.5625 +"px";  
    });
  
}


function getStyle(parm1, parm2) {
    return parm1.currentStyle ? parm1.currentStyle[parm2] : getComputedStyle(parm1)[parm2];  //parm1,要改变的元素代替名;parm2,要改变的属性名
}
